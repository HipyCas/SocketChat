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
	<div class="flex flex-row justify-between items-center">
		<span class="h-0.5 flex-grow flex-shrink bg-gray-400 mr-2"></span>
		<span class="text-xs align-middle text-gray-600">
			<slot></slot>
		</span>
		<span class="h-0.5 flex-grow flex-shrink bg-gray-400 ml-2"></span>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
