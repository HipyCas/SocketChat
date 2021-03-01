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
	<div>
		<Base v-if="open">
			<h1
				id="title"
				class="w-full my-2 align-middle text-center text-2xl font-black text-yellow-500"
			>
				🎉 Welcome to SocketChat! 🎉
			</h1>
			<p
				id="subtitle"
				class="w-full align-middle text-center px-5 text-gray-700 whitespace-pre-line"
			>
				The free/libre, open source and privacy first open web chat.<br />Chat
				freely and with no restrictions: no logs, no login, no cookies, no
				tracking, just liberty
			</p>
			<div id="features" class="flex flex-col gap-6 p-6">
				<div id="privacy" class="flex flex-col md:flex-row items-center">
					<div
						id="privacyIcon"
						class="flex-grow-0 flex-shrink-0 relative rounded-full bg-gradient-to-r from-purple-600 to-blue-700 w-16 h-16"
					>
						<svg
							class="w-6 h-6 absolute top-5 left-5 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
							></path>
						</svg>
					</div>
					<div id="privacyText" class="ml-5 mt-2 md:mt-0">
						<h2
							@click="featureNotAvailable('Privacy!')"
							class="text-lg font-bold group text-gray-900"
						>
							Privacy out of the box, read our water clean Privacy statement
							<svg
								class="w-6 h-6 mb-1 ml-2 inline text-yellow-500 group-hover:animate-bounce"
								fill="none"
								stroke="currentColor"
								stroke-width="5"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								></path>
							</svg>
						</h2>
						<p class="text-sm text-gray-700">
							SocketChat is built from the basis of privacy. Your session is
							totally anonimous, we don't log any of your actions or have any
							trackers, and if you want you can change your username with just
							one click! We promise to respect your privacy,
							<span class="uppercase text-yellow-500">always</span>.
						</p>
					</div>
				</div>
				<div id="manifesto" class="flex flex-col md:flex-row items-center">
					<div
						id="manifestoIcon"
						class="flex-grow-0 flex-shrink-0 relative rounded-full bg-gradient-to-r from-green-600 to-green-900 w-16 h-16"
					>
						<!--* Other SVG icon options: heart, user-group -->
						<svg
							class="w-6 h-6 absolute top-5 left-5 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
							></path>
						</svg>
					</div>
					<div id="manifestoText" class="ml-5 mt-2 md:mt-0">
						<h2
							@click="featureNotAvailable('Manifest!')"
							class="text-lg font-bold group text-gray-900"
						>
							True to our values, to build an open and free as in speech world
							world
							<svg
								class="w-6 h-6 mb-1 ml-2 inline text-yellow-500 group-hover:animate-bounce"
								fill="none"
								stroke="currentColor"
								stroke-width="5"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								></path>
							</svg>
						</h2>
						<p class="text-sm text-gray-700">
							We are a team of open source and free (as in free speech, not as
							free beer) advocates, who create and work on SocketChat in our
							free time for to create a new way of connecting the world. If you
							share our idea, please take into consideration the idea of
							<a class="uppercase text-yellow-500">donating</a> to the project.
						</p>
					</div>
				</div>
				<div id="features" class="flex flex-col md:flex-row items-center">
					<div
						id="featuresIcon"
						class="flex-grow-0 flex-shrink-0 relative rounded-full bg-gradient-to-r from-yellow-600 to-red-900 w-16 h-16"
					>
						<!--* Heroicons SVG: lightning-bolt -->
						<svg
							class="w-6 h-6 absolute top-5 left-5 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							></path>
						</svg>
					</div>
					<div id="featuresText" class="ml-5 mt-2 md:mt-0">
						<h2
							@click="featureNotAvailable"
							class="text-lg font-bold group text-gray-900"
						>
							Simple yet powerful features, see them all!
							<svg
								class="w-6 h-6 mb-1 ml-2 inline text-yellow-500 group-hover:animate-bounce"
								fill="none"
								stroke="currentColor"
								stroke-width="5"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M14 5l7 7m0 0l-7 7m7-7H3"
								></path>
							</svg>
						</h2>
					<p class="text-sm text-gray-700">
						<!--! I do not like much how it ended up, so probably change it later -->
						There are many good messaging platforms nowadays, but we are like
						none of them. We got some ideas from them, but reinvented the wheel
						with some simple but useful ideas, like no history. If you feel like
						something is missing, we would love you to fill a
						<a
							class="uppercase text-yellow-500 hover:underline"
							href="https://github.com/HipyCas/SocketChat/issues"
							target="_blank"
							>feature request</a
						>.
					</p>
					</div>
				</div>
			</div>
		<div id="closing" class="relative w-full h-28 mt-12">
			<div class="text-center w-full absolute bottom-0">
				Made with
				<svg
					class="w-6 h-6 text-red-500 fill-current inline"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					></path>
				</svg>
				by
				<a
					class="text-yellow-500 p-0.5 font-bold rounded hover:bg-yellow-500 hover:text-white"
					href="https://hipycas.github.io"
					>HipyCas</a
				>
				& collaborators
				<div class="relative">
					<div class="flex items-center justify-center">
						<a
							class="inline ml-auto mr-auto md:absolute md:left-1 md:bottom-1"
							href="https://www.gnu.org/licenses/gpl-3.0"
							target="_blank"
							><GNU class="h-14 w-24"></GNU
						></a>
					</div>
					<button
						@click="open = false"
						class="inline my-3 py-1 px-2 uppercase text-md rounded-md border-2 border-blue-500 text-blue-800 hover:bg-blue-500 hover:text-white"
					>
						continue
					</button>
				</div>
			</div>
		</div>
		</Base>
		<Changes v-if="newVersion !== oldVersion && !open"></Changes>
	</div>
</template>

<script>
import Base from './Base.vue';
import Changes from './Changes.vue';
import GNU from '../svg/GPL.vue';

export default {
	name: 'PopupsWelcome',
	components: { Base, Changes, GNU },
	data() {
		return { open: true, newVersion: '1.8.7', oldVersion: '1.8.7' };
	},
	methods: {
		featureNotAvailable() {
			alert('This feature is not out yet! Working hard on it!');
		},
	},
};
</script>

<style></style>
