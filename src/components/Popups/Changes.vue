<template>
	<Base>
		<h1
			id="title"
			class="w-full my-2 align-middle text-center text-2xl font-black text-yellow-500"
		>
			🎉 New features out! 🎉
		</h1>
		<p
			id="subtitle"
			class="w-full align-middle text-center px-5 text-gray-700 whitespace-pre-line"
		>
			SocketChat has been updated to version {{ newVersion }}, yay! The last
			version you used was {{ oldVersion }}, but since then we have worked hard
			and pushed so many awesome features! Here you have what has changesd since
			you were gone:
		</p>
	</Base>
</template>

<script>
import Base from './Base.vue';

export default {
	name: 'PopupsChanges',
	components: { Base },
	data() {
		return {
			newVersion: '1.0.0',
			oldVersion: '0.8.4',
		};
	},
};
</script>

<style></style>
