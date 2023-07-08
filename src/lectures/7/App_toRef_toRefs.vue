<template>
	<div>
		<p>author : {{ author }}</p>
		<p>title : {{ title }}</p>
	</div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

export default {
	setup() {
		const book = reactive({
			author: 'Vue Team',
			year: '2020',
			title: 'Vue 3 Guide',
			description: '당신은 이 책을 지금 바로 읽습니다 ;)',
			price: '무료',
		});

		//const { author, title } = book; //반응성을 잃음.
		//const { author, title } = toRefs(book);
		//각각 가져오고 싶을때
		const author = toRef(book, 'author');
		const title = toRef(book, 'title');

		return { author, title, book };
	},
};
</script>

<style lang="scss" scoped></style>
