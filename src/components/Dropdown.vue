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
	<div class="relative">
		<!-- Dropdown button when closed -->
		<div
			class="flex justify-between rounded bg-opacity-0 py-1 px-2"
			:class="{ 'border border-gray-200': borders }"
			@click="open = !open"
			v-if="!open"
		>
			<slot name="button"></slot>
			<svg
				v-if="arrow"
				class="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 9l-7 7-7-7"
				></path>
			</svg>
		</div>
		<!-- Dropdown button when opened -->
		<div
			class="flex justify-between border border-b-0 rounded rounded-b-none border-gray-200 bg-white py-1 px-2"
			@click="open = !open"
			v-if="open"
		>
			<slot name="button"></slot>
			<svg
				v-if="arrow"
				class="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 15l7-7 7 7"
				></path>
			</svg>
		</div>
		<!-- To close when clicked outside of the dropdown content -->
		<button
			class="fixed inset-0 h-full w-full cursor-default focus:outline-none"
			v-if="open"
			@click="open = false"
			tabindex="-1"
		></button>
		<!-- Dropdown content -->
		<transition
			enter-active-class="transition-all duration-200 ease-out"
			leave-active-class="transition-all duration-750 ease-in"
			enter-class="opacity-0 scale-75"
			enter-to-class="opacity-100 scale-100"
			leave-class="opacity-100 scale-100"
			leave-to-class="opacity-0 scale-75"
		>
			<div
				class="block absolute shadow-lg border border-t-0 rounded-t-none w-full rounded py-4 px-3 text-sm bg-white"
				v-if="open"
			>
				<slot name="content"></slot>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: ['arrow', 'borders'],
	data() {
		return {
			open: false,
		};
	},
	mounted() {
		const onEscape = (e) => {
			if (e.key === 'Esc' || e.key === 'Escape') {
				this.open = false;
			}
		};

		document.addEventListener('keydown', onEscape);
	},
};
</script>

<style></style>
