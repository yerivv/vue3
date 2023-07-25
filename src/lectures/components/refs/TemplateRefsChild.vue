<template>
	<div>Child Refs</div>
	<!-- <p>{{ $parent }}</p> -->
	<p>{{ $parent.message }}</p>
	<ul>
		<li v-for="test in $parent.fruits" :key="test">{{ test }}</li>
	</ul>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const message = ref('[child] 메세지임');
		const sayHello = () => {
			alert(message.value);
		};
		return { message, sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
