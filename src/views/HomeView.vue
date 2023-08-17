<template>
	<div>
		<h2>Home View</h2>
		<p>{{ $route.path }}</p>
		<button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
		<hr class="mg-4" />
		<AppGrid :items="items" v-slot="{ item }" col-class="col-6">
			<AppCard>{{ item }}</AppCard>
		</AppGrid>
		<hr />
		<!-- <h2>{{ $person.name }}</h2>
		<button class="btn btn-primary" @click="person.say()">click person</button> -->
		<h2>{{ position }}</h2>

		<h2>{{ x }}, {{ y }}</h2>
	</div>
</template>

<script>
export default {
	created() {
		//console.log(this.$person.name);
		//this.$person.say();
	},
};
</script>

<script setup>
import { inject, reactive, ref, toRef, toRefs } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};

const items = ref(['사과', '배', '포도', '바나나']);

//const person = inject('person');
//console.log('person.name : ', person.name);

const position = reactive({
	x: 100,
	y: 1000,
});

//const x = toRef(position, 'x'); //동기화
//const y = toRef(position, 'y');

const { x, y } = toRefs(position);

//const { x, y } = position;
//const x = ref(position.x);
//const y = ref(position.y);
</script>

<style lang="scss" scoped></style>
