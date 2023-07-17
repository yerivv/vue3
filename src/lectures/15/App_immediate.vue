<template>
	<div>
		<h1>watch 즉시 실행</h1>
		<p>{{ message }}</p>
		<p>{{ reverseMessage }}</p>
	</div>
</template>

<script>
import { watch } from 'vue';
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('Hello Vue!');
		const reverseMessage = ref('');

		const reverseFunction = newValue => {
			console.log('즉시 실행');
			reverseMessage.value = newValue.split('').reverse().join('');
		};

		// watch(message, reverseFunction, {
		// 	immediate: true,
		// });
		watch(message, reverseFunction);
		reverseFunction(message.value);
		return { message, reverseMessage, reverseFunction };
	},
};
</script>

<style lang="scss" scoped></style>
