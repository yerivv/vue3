<template>
	<div></div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
	setup() {
		// ref -> object
		const count = ref(0);
		const state = reactive({
			count, //count: count 같을 땐 하나로
		});
		count.value++;
		count.value++;
		// console.log(count.value);
		// console.log('state.count : ', state.count);

		//ref -> Array
		const message = ref('Hello');
		const arr = reactive([message]);
		console.log('arr[0] : ', arr[0].value); //배열에서는 .valuer가 들어감
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
