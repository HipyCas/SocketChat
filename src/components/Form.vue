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
	<form
		@submit.prevent="send"
		class="p-5 min-h-20 bg-gray-900 w-screen flex flex-row flex-wrap items-stretch"
	>
		<div class="pb-3 sm:pb-0">
			<input
				type="text"
				placeholder="Username"
				v-model="username"
				@change="usernameChanged"
				class="h-full pr-10 mr-3 rounded-md border-0 focus:border-8 focus:border-blue-500 bg-gray-800 text-white focus:bg-gray-200 focus:text-black"
			/>
			<a @click.prevent="updateUsername" class="-ml-12"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 172 172"
					class="text-white m-0 mb-1 p-0 inline hover:animate-spin motion-safe:animation-none"
				>
					<g>
						<path d="M0,172v-172h172v172z" fill="none"></path>
						<g>
							<path
								d="M15.49505,153.725l12.16685,-12.16685l-0.7052,-0.7611c-13.9191,-14.94895 -21.5817,-34.41075 -21.5817,-54.79705c0,-44.4577 36.1673,-80.625 80.625,-80.625c3.6464,0 7.52285,0.3139 11.825,0.9632v19.5607c-3.95815,-0.7783 -7.9292,-1.1739 -11.825,-1.1739c-33.78725,0 -61.275,27.48775 -61.275,61.275c0,15.11665 5.6502,29.67645 15.90785,40.9919l0.75895,0.83635l13.4332,-13.43535v39.3321z"
								fill="#ffffff"
							></path>
							<g>
								<path
									d="M86,166.625c-3.6464,0 -7.52285,-0.3139 -11.825,-0.9632v-19.5607c3.95815,0.7783 7.92705,1.1739 11.825,1.1739c33.78725,0 61.275,-27.48775 61.275,-61.275c0,-15.14245 -5.64375,-29.70655 -15.89065,-41.01125l-0.75895,-0.83635l-13.4504,13.45255v-39.32995h39.32995l-12.2034,12.20125l0.7052,0.7611c13.94275,14.9769 21.61825,34.4258 21.61825,54.76265c0,44.4577 -36.1673,80.625 -80.625,80.625z"
									fill="#ffffff"
								></path>
							</g>
						</g>
					</g></svg
			></a>
		</div>
		<input
			type="text"
			placeholder="Type something to the world!"
			v-model="message"
			class="flex-grow rounded-md bg-gray-400 focus:bg-gray-200 placeholder-blue-700 focus:placeholder-gray-500"
		/>
		<button
			type="submit"
			class="ml-3 py-3 px-5 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md focus:outline-white"
			:disabled="message.length < 1"
		>
			Send
		</button>
	</form>
</template>

<script>
import * as rug from 'random-username-generator';

export default {
	name: 'Form',
	emits: ['send', 'usernameChanged'],
	data() {
		return {
			username: '',
			message: '',
			timestamp: 'now',
		};
	},
	methods: {
		send() {
			if (this.message.length < 1) {
				return;
			}
			this.$emit('send', {
				username: this.username,
				message: this.message,
				type: 'message',
			});
			this.message = '';
		},
		usernameChanged() {
			this.$emit('usernameChanged', this.username);
		},
		updateUsername() {
			this.username = rug.generate();
			this.$emit('usernameChanged', this.username);
		},
	},
	mounted() {
		this.username = rug.generate();
	},
};
</script>

<style></style>
