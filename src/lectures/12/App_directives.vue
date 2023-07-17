<template>
	<div>
		<p>{{ message }}</p>
		<!--v-text : 문자열로 인지 (이 안에는 다른 글을 쓰면 오류남) -->
		<p v-text="message"></p>
		<p v-text="htmlStr"></p>
		<!--v-html : html로 노출 (이 안에는 다른 글을 쓰면 오류남) -->
		<p v-html="htmlStr"></p>
		<!-- v-once : 한번만 렌더링. 업데이트 성능을 최적화 하는데 사용할 수 있음-->
		<p v-once>{{ message }}aaa</p>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('안녕하세요');
		const htmlStr = ref('<strong>안녕하세요!</strong>');
		return { message, htmlStr };
	},
};
</script>

<style lang="scss" scoped></style>
