<template>
	<div class="container py-4">
		<input ref="inputRef" type="text" value="hello world!" />
		<hr class="my-3" />
		<p id="message">{{ message }}</p>

		<hr class="my-3" />
		<button @click="visible = !visible">Child Visible</button>
		<LifecycleChild v-if="visible"></LifecycleChild>
	</div>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, ref } from 'vue';
import LifecycleChild from './LifecycleChild.vue';

export default {
	components: {
		LifecycleChild,
	},
	setup() {
		console.log('setup');
		const inputRef = ref(null);
		const message = ref('message');
		const visible = ref(false);
		// onBeforeMount(() => {
		// 	console.log('onBeforeMount');
		// 	console.log('onBeforeMount', inputRef.value);
		// });
		// onMounted(() => {
		// 	//DOM에 접근 가능
		// 	console.log('onMounted', inputRef.value.value);
		// });

		// //DOM이 업데이트 전이기 때문에 dom은 안변함
		// onBeforeUpdate(() => {
		// 	console.log('onBeforeUpdate', message.value);
		// 	console.log(
		// 		'DOM Content',
		// 		document.querySelector('#message').textContent,
		// 	);
		//});
		//DOM 업데이트 이후라 가져옴
		// onUpdated(() => {
		// 	console.log('onUpdated', message.value);
		// 	console.log(
		// 		'DOM Content',
		// 		document.querySelector('#message').textContent,
		// 	);
		// });
		return { inputRef, message, visible };
	},
	// beforeCreate() {
	// 	//vue3에선 사용X
	// 	console.log('beforeCreate');
	// },
	// created() {
	// 	//vue3에선 사용X
	// 	console.log('created');
	// },
};
</script>

<style lang="scss" scoped></style>
