<template>
	<div class="card">
		<div class="card-body">Lifecycle Child</div>
		<input id="input" type="text" />
	</div>
</template>

<script>
import {
	onBeforeMount,
	onMounted,
	ref,
	onBeforeUnmount,
	onUnmounted,
} from 'vue';
export default {
	setup() {
		const test = ref('test');
		console.log('[Child] setup');
		console.log('----------------');
		onBeforeMount(() => {
			console.log('[Child] onBeforeMount');
		});
		onMounted(() => {
			console.log('[Child] onMounted');
			console.log('----------------');
		});
		onBeforeUnmount(() => {
			//해지하기 직전이라 DOM을 가지고 올 수 있음
			console.log('[Child] onBeforeUnmount');
			console.log(document.querySelector('#input'));
		});
		onUnmounted(() => {
			//해지한 후라 DOM 못가지고 옴
			console.log('[Child] onUnmounted');
			console.log(document.querySelector('#input'));
			console.log('----------------');
		});
		return { test };
	},
};
</script>

<style lang="scss" scoped></style>
