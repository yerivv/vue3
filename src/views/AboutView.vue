<template>
	<div>
		<h2>About View</h2>
		<p>path : {{ $route.path }} , name : {{ $route.name }}</p>
		<button class="btn btn-primary" @click="$router.push('/')">
			Home으로 이동
		</button>
		<h2>Store</h2>
		<!-- <p>counter: {{ store.counter }}</p> -->
		<p>counter : {{ counter }}</p>
		<p>doubleCount: {{ doubleCount }}</p>
		<p>doubleCountPlusOne: {{ doubleCountPlusOne }}</p>
		<button @click="increment">click</button>
	</div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
const route = useRoute();
console.log(route.path);

const store = useCounterStore();
//구조분해할당 - 반응성을 잃음.
//storeToRefs사용
const { counter, doubleCount, doubleCountPlusOne } = storeToRefs(store); //state, getter 구조분해할당
const { increment } = store; //actions 구조분해할당
counter.value = 100;
//increment();
</script>

<style lang="scss" scoped></style>
