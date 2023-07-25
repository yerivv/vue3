<template>
	<div class="container py-4">
		{{ msg }}
		<hr />
		{{ message }}
		<input v-model="message" type="text" />
		<button @click="sayHello">버튼</button>

		<hr />
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:isLike="true"
		></PostItem>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import PostItem from '@/components/setup/PostItem.vue';
const msg = 'hello world';
const sayHello = () => {
	alert('함수사용');
};
const message = ref('');

const response = await axios(
	'https://dummy.restapiexample.com/api/v1/employees',
);
console.log('response', response);
</script>

<style lang="scss" scoped></style>
