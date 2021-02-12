<!--
  SocketChat: the FLOSS simple instant chat software built around socket.io
  Copyright (C) 2021 Hipy Cas

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->

<template>
	<WelcomePopup></WelcomePopup>
	<Navbar @langChanged="updateLang" @roomChanged="updateRoom"></Navbar>
	<div class="h-16"></div>
	<div ref="container" class="z-0">
		<button
			class="text-white bg-red-500 rounded-sm p-0.5 font-extrabold"
			@click="banMe()"
		>
			BAN ME!
		</button>
		<div
			v-for="message in messages"
			:key="message.timestamp"
			:id="`message${message.timestamp}`"
		>
			<Message
				v-if="message.type === 'message'"
				:self="message.self ?? false"
				:username="message.username"
				:message="message.message"
				:timestamp="message.timestamp"
				:locale="locale"
				:timezone="timezone"
			></Message>
			<LineDivider v-if="message.type === 'change'">
				<template v-slot>{{ message.message }}</template>
			</LineDivider>
		</div>
	</div>
	<div class="h-36 sm:h-28"></div>
	<Form
		ref="form"
		class="fixed bottom-0"
		@send="sendMessage"
		@usernameChanged="newUser"
	></Form>
</template>

<script>
import WelcomePopup from './Popups/Welcome.vue';
import Navbar from './Navbar.vue';
import Form from './Form.vue';
import Message from './Message.vue';
import LineDivider from './LineDivider.vue';

export default {
	name: 'Page',
	components: { WelcomePopup, Navbar, Form, Message, LineDivider },
	data() {
		return {
			socket: null,
			username: '',
			messages: [
				{
					id: 1,
					username: 'SocketChat',
					message:
						'Welcome to SocketChat!\n \
            A free, open source and privacy first community.',
					timestamp: Date.now(),
					type: 'message',
				},
			],
		};
	},
	computed: {
		locale: () =>
			navigator.language ||
			navigator.browserLanguage ||
			(navigator.languages || ['en'])[0],
		timezone: () => Intl.DateTimeFormat().resolvedOptions().timeZone,
	},
	methods: {
		sendMessage(params) {
			console.log('Sending message to socket');
			this.socket.emit('chat message', params);
		},
		newUser(username) {
			console.log(`Changed username to ${username}`);
			this.socket.emit('new user', username);
			this.username = username;
		},
		updateLang(lang) {
			console.log(`Changed language to code ${lang.code}`);
			this.messages.push({
				message: `Language changed to ${lang.name}`,
				timestamp: Date.now(),
				type: 'change',
			});
		},
		updateRoom(room) {
			console.log(`Changed room to ${room.name}`);
			this.messages.push({
				message: `You have joined the ${room.name} room`,
				timestamp: Date.now(),
				type: 'change',
			});
		},
		banMe() {
			this.socket.emit('ban me');
		},
	},
	mounted() {
		console.info('Connecting to ws://acer.duo:3000...');
		this.socket = io();
		console.log(this.socket);

		this.socket.on('server message', (message) => {
			//if (message.username != this.username) this.messages.push(message);
			console.log(
				`Pushing message from ${message.username} to ${this.messages}`
			);
			if (message.username === this.username) message.self = true;
			this.messages.push(message);
			//let msg = this.$el.querySelector(`message${message.id}`);
			//console.log(`Scrolling ${{ behavior: 'smooth', block: 'start' }}`);
			//msg.scrollIntoView({ behavior: 'smooth', block: 'end' });
		});

		console.log(`Registering new user: ${this.$refs.form.username}`);
		this.socket.emit('new user', this.$refs.form.username);
		this.username = this.$refs.form.username;
	},
};
</script>

<style></style>
