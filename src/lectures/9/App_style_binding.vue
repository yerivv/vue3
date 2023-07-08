<template>
	<div>
		<div :style="styleObject">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ut quo
			repudiandae, optio quia ad provident adipisci possimus. Minus nesciunt
			quae quisquam qui illo labore ipsa dignissimos aperiam, repudiandae
			officiis?
		</div>
		<button v-on:click="fontSize--">-</button>
		<button v-on:click="fontSize++">+</button>
	</div>
</template>

<script>
import { ref } from 'vue';
import { computed } from 'vue';
import { reactive } from 'vue';

export default {
	setup() {
		// const styleObject = reactive({
		// 	color: 'red',
		// 	fontSize: '20px',
		// });
		const fontSize = ref(13);
		const styleObject = computed(() => {
			return {
				color: 'red',
				fontSize: fontSize.value + 'px',
			};
		});
		return { styleObject, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
