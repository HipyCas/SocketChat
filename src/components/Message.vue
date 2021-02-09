<template>
	<div
		v-if="self"
		class="ml-auto shadow-lg bg-gradient-to-bl from-gray-100 to-green-400 min-w-max max-w-sm sm:max-w-md md:max-w-lg p-5 rounded-lg rounded-tr-none m-3"
	>
		<p class="text-xs font-bold">{{ username }}</p>
		<p
			id="messageHTML"
			class="pb-3 pt-1 whitespace-pre-line max-w-xs sm:max-w-md overflow-ellipsis overflow-hidden"
		>
			{{ message }}
		</p>
		<p id="timestampHTML" class="text-xs uppercase text-gray-600">
			{{ time }}
		</p>
	</div>
	<div
		v-else
		class="shadow-lg bg-gradient-to-br from-gray-100 to-purple-400 min-w-max max-w-sm sm:max-w-md md:max-w-lg p-5 rounded-lg rounded-tl-none m-3"
	>
		<p class="text-xs font-bold">{{ username }}</p>
		<p
			id="messageHTML"
			class="pb-3 pt-1 whitespace-pre-line max-w-xs sm:max-w-md overflow-ellipsis overflow-hidden"
		>
			{{ message }}
		</p>
		<p id="timestampHTML" class="text-xs uppercase text-gray-600">
			{{ time }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'Message',
	props: ['self', 'username', 'message', 'timestamp', 'locale', 'timezone'],
	data() {
		return {
			time: '',
		};
	},
	mounted() {
		this.$el.scrollIntoView({ behavior: 'smooth', block: 'center' });

		this.time = Intl.DateTimeFormat(this.locale, {
			dateStyle: 'medium',
			timeStyle: 'medium',
			timeZone: this.timezone,
		}).format(new Date(this.$props.timestamp));
	},
};
</script>

<style></style>
