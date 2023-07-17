<template>
	<div>
		<h1>변경되면 저장되는 예제(watchEffect)</h1>
		<p>watch랑 다르게 최초에 실행함</p>
		<!--submit은 새로고침이 기본기능이므로 prevent를 추가-->
		<form action="" @submit.prevent="save(title, contents)">
			<input type="text" v-model.lazy="title" placeholder="title" />
			<textarea v-model.lazy="contents" placeholder="contents"></textarea>
			<hr />
			<button>저장</button>
		</form>
		<form action="" @submit.prevent>
			<input type="text" v-model.lazy="title" placeholder="title" />
			<textarea v-model.lazy="contents" placeholder="contents"></textarea>
			<hr />
			<button @click.once="save(title, contents)">한번만저장</button>
		</form>
	</div>
</template>

<script>
import { watchEffect } from 'vue';
import { ref } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');
		const save = (title, contents) => {
			console.log(`저장 title : ${title},  contents : ${contents}`);
		};
		watchEffect(() => {
			console.log('watchEffect 실행');
			// console.log('title:', title.value);
			// console.log('contents:', contents.value);
			save(title.value, contents.value);
		});
		return { title, contents, save };
	},
};
</script>

<style lang="scss" scoped>
h1 {
	font-size: 16px;
}
form {
	display: block;
	width: 200px;
	input,
	textarea {
		display: block;
		margin: 5px 0;
		width: 100%;
	}
}
</style>
