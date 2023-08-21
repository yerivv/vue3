<template>
	<div>
		<h2>My Page</h2>
	</div>
</template>

<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';

onBeforeRouteLeave(() => {
	console.log('onBeforeRouteLeave');
});
onBeforeRouteUpdate(() => {
	console.log('onBeforeRouteUpdate');
});
</script>

<script>
export default {
	beforeRouteEnter() {
		console.log('beforeRouteEnter');
	},
};
</script>

<style lang="scss" scoped></style>
