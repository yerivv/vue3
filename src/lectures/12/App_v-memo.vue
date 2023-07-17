<template>
	<div>
		<!-- v-memo : 한번만 실행되지만 포함된 반응형함수가 업데이트되면 모두 업데이트 시켜줌-->
		<div>
			<p>memo1 : {{ memo1 }}</p>
			<p>memo2 : {{ memo2 }}</p>
			<p>memo3 : {{ memo3 }}</p>
		</div>
		<button @click="memo1++">memo1++</button>
		<button @click="memo2++">memo2++</button>
		<button @click="memo3++">memo3++</button>
		<div v-memo="[memo2]">
			<p>memo1 : {{ memo1 }}</p>
			<p>memo2 : {{ memo2 }}</p>
			<p>memo3 : {{ memo3 }}</p>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const memo1 = ref(4000);
		const memo2 = ref(500);
		const memo3 = ref(20);
		return { memo1, memo2, memo3 };
	},
};
</script>

<style lang="scss" scoped></style>
