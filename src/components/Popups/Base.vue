<template>
	<div
		id="contentDiv"
		class="z-50 fixed top-0 h-screen w-screen flex justify-center items-center"
	>
		<div class="w-9/12 h-4/5 h-max rounded-xl border-none bg-gray-50 p-5 overflow-auto">
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
