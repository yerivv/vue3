<template>
	<div>
		<ul>
			<li v-for="(item, index) in items" :key="item.id">
				id: {{ item.id }} index: {{ index }} {{ item.message }}
			</li>
		</ul>

		<ul>
			<template v-for="(item, index) in items" :key="item.id">
				<li v-if="item.id % 2 == 0">id: {{ item.id }} {{ item.message }}</li>
			</template>
		</ul>

		<ul>
			<template v-for="(item, index) in evenItems" :key="item.id">
				<li>id: {{ item.id }} {{ item.message }}</li>
			</template>
		</ul>

		<ul>
			<li v-for="(title, key, index) in myObject" :key="key">
				{{ index }}-{{ key }}-{{ title }}
			</li>
		</ul>
	</div>
</template>

<script>
import { computed } from 'vue';
import { reactive } from 'vue';

export default {
	setup() {
		const items = reactive([
			{ id: 1, message: '홍예선' },
			{ id: 2, message: '김예미' },
			{ id: 3, message: '김예리' },
			{ id: 4, message: '김예은' },
		]);
		const evenItems = computed(() => items.filter(item => item.id % 2 === 0));

		const myObject = reactive({
			title: '제목입니다.',
			author: '홍길동',
			publishedAt: '2016-04-10',
		});

		return { items, evenItems, myObject };
	},
};
</script>

<style lang="scss" scoped></style>
