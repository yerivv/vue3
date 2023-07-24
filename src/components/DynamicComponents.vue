<template>
	<div class="container py-4">
		<button class="btn btn-primary me-2" @click="changeComp(DynamicApple)">
			사과
		</button>
		<button class="btn btn-danger me-2" @click="changeComp(DynamicBanana)">
			바나나
		</button>
		<hr />
		<component :is="currentComp"></component>

		<p>{{ obj1 }}</p>
		<p>{{ obj2 }}</p>
	</div>
</template>

<script setup>
import { ref, shallowRef } from 'vue';
import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';

//const currentComp = ref(DynamicApple);
const currentComp = shallowRef(DynamicApple);
const changeComp = comp => {
	currentComp.value = comp;
};

const obj1 = ref({ name: '김예리' });
const obj2 = shallowRef({ name: '김예리' });
</script>

<style lang="scss" scoped></style>
