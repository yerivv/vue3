<template>
	<div class="container py-4">
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<!-- 마운트 되기 전까지 null 오류가 나므로 v-if 추가 -->
		<p v-if="input">
			{{ input.value }}, {{ $refs.input.value }}, {{ $refs.input == input }}
		</p>
		<ul>
			<!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">
				{{ fruit }}
			</li> -->
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="el => itemRefs.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul>

		<hr />
		<button @click="child.sayHello" class="my-2">버튼</button>
		<TemplateRefsChild ref="child"></TemplateRefsChild>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import TemplateRefsChild from './TemplateRefsChild.vue';
export default {
	components: {
		TemplateRefsChild,
	},
	setup() {
		const input = ref(null);
		console.log('setup', input.value); //렌더링 되기 전에는 null

		const fruits = ref(['사과', '배', '딸기']);
		const itemRefs = ref([]);

		const child = ref(null);

		const message = ref('[parent] 메세지');

		onMounted(() => {
			input.value.value = '김예리';
			console.log('onMounted', input.value);
			// itemRefs.value.forEach(item => {
			// 	console.log('item:', item.textContent);
			// });
			itemRefs.value.forEach(item => {
				console.log('item:', item);
			});

			console.log(child.value.message);
			//child.value.sayHello();
		});
		return { input, fruits, itemRefs, child, message };
	},
};
</script>

<style lang="scss" scoped></style>
