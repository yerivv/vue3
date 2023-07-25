<template>
	<main>
		<lifecycleHooks></lifecycleHooks>
		<!-- <provideInject></provideInject> -->
	</main>
</template>

<script>
import provideInject from '@/components/ProvideInject.vue';
import lifecycleHooks from '@/components/LifecycleHooks.vue';
import { onBeforeMount, onMounted } from 'vue';
export default {
	components: {
		//provideInject,
		lifecycleHooks,
	},
	setup() {
		return {};
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
