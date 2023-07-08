<template>
	<div>
		<h2>보긴법</h2>
		<div>데이터 바인딩의 가장 기본적인 형태</div>
		<p>문자열 : {{ message }}</p>
		<p v-once>문자열(한번만) : {{ message }}</p>
		<button v-on:click="message = message + '!'">클릭</button>
		<hr />
		<h2>HTML</h2>
		<p>{{ rawHtml }}</p>
		<p v-html="rawHtml"></p>
		<p>
			권장하지 않음. 관리자용으로만, 사용자가 어떤 내용을 올릴지 모르니..(XSS
			취약점(opens new window))
		</p>
		<hr />
		<h2>속성 바인딩</h2>
		<div>
			바인딩은 v-bind+':디렉티브'를 사용하는데 v-bind를 생략하고 '':디렉티브'로
			사용 가능
		</div>
		<p :title="dynamicTitle">마우스를 올려보세요</p>
		<h3>단축 표현</h3>
		<input type="text" value="김예리" :disabled="isInputDisabled" />
		<h3>다중 속성 바인딩</h3>
		<input v-bind="arrts" :disabled="isInputDisabled" />
		<h3>Javascript</h3>
		<p>{{ message.split('').reverse().join('') }}</p>
		{{ isInputDisabled ? '예' : '아니오' }}
		<input type="text" :placeholder="`입력해주세요. ${isInputDisabled}`" />
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('안녕하세요!');
		const rawHtml = ref('<strong>안녕하세요</strong>');
		const dynamicTitle = ref('안녕?');
		const isInputDisabled = ref(true);
		const arrts = ref({
			type: 'text',
			value: '123456',
			//disabled: false
		});

		return {
			message,
			rawHtml,
			dynamicTitle,
			isInputDisabled,
			arrts,
		};
	},
};
</script>

<style lang="scss" scoped></style>
