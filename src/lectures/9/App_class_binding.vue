<template>
	<div>
		<div class="text" :class="classObject">텍스트입니다.</div>
		<button v-on:click="toggle">toggle</button>
		<button v-on:click="hasError = !hasError">hasError</button>
	</div>
</template>

<script>
import { computed } from 'vue';
import { reactive } from 'vue';
import { ref } from 'vue';

export default {
	setup() {
		const isActive = ref(true);
		const hasError = ref(false);

		//여러가지를 줄때
		// const classObject = reactive({
		// 	active: true,
		// 	'text-danger': true,
		// });

		const classObject = computed(() => {
			return {
				active: isActive.value && !hasError.value,
				'text-danger': !isActive.value && hasError.value,
			};
		});

		const toggle = () => {
			isActive.value = !isActive.value;
		};
		return { isActive, toggle, hasError, classObject };
	},
};
</script>

<style scoped>
.active {
	color: tomato;
	font-weight: 700;
}
.text-danger {
	text-decoration: underline;
}
</style>
