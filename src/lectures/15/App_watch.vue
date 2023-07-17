<template>
	<div></div>
</template>

<script>
import { watch } from 'vue';
import { ref } from 'vue';

export default {
	setup() {
		const message = ref(''); //반응형 데이터
		watch(message, (newValue, oldValue) => {
			console.log('newValue:', newValue); //새로운 값
			console.log('oldValue:', oldValue); //이전 값
		});
		return { message };
	},
};
</script>

<style lang="scss" scoped></style>
