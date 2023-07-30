<template>
	<div>
		<h2>Home View</h2>
		<p>{{ $route.path }}</p>
		<button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
		<hr class="mg-4" />
		<AppGrid :items="items" v-slot="{ item }" col-class="col-6">
			<AppCard>{{ item }}</AppCard>
		</AppGrid>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AppGrid from '@/components/AppGrid.vue';
import AppCard from '@/components/AppCard.vue';

const router = useRouter();
const goAboutPage = () => {
	router.push('/about');
};

const items = ref(['사과', '배', '포도', '바나나']);
</script>

<style lang="scss" scoped></style>
