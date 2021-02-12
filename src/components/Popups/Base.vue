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
	<div
		id="contentDiv"
		class="z-50 fixed top-0 h-screen w-screen flex justify-center items-center"
	>
		<div
			class="w-9/12 h-4/5 h-max rounded-xl border-none bg-gray-50 p-5 overflow-auto"
		>
			<slot></slot>
		</div>
	</div>
	<div
		id="backdrop"
		class="z-40 fixed w-screen h-screen bg-gray-900 bg-opacity-50"
	></div>
</template>

<script>
export default {
	name: 'PopupsBase',
};
</script>

<style></style>
