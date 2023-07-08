<template>
	<div>
		<p>{{ message }}</p>
		<button v-on:click="addMessage">Add Click</button>
		<p>{{ messageOne.value }}</p>
		<button v-on:click="addMessageOne">Add Click</button>
		<p>{{ messageRef }}</p>
		<button v-on:click="addMessageRef">Add Click</button>
	</div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		const message = reactive('Hello Vue!');
		const addMessage = () => {
			message = message + '!';
		};
		console.log('message : ', message);
		console.log('message typeof : ', typeof message);

		//동기화
		const messageOne = reactive({
			value: 'Hello Vue ONE',
		});
		const addMessageOne = () => {
			messageOne.value = messageOne.value + '!';
		};
		console.log('messageOne : ', messageOne);
		console.log('messageOne.value typeof : ', typeof messageOne.value);

		//ref 프리미티브로 만들땐 ref 사용
		const messageRef = ref('Hello Vue Ref!');
		const addMessageRef = () => {
			messageRef.value = messageRef.value + '!';
		};

		return {
			message,
			addMessage,
			messageOne,
			addMessageOne,
			messageRef,
			addMessageRef,
		};
	},
};
</script>

<style lang="scss" scoped></style>
