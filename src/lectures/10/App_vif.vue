<template>
	<div>
		<h2 v-if="visible">True입니다.</h2>
		<button v-on:click="visible = !visible">toggle</button>
		<hr />
		<button v-on:click="type = 'A'">A</button>
		<button v-on:click="type = 'B'">B</button>
		<button v-on:click="type = 'C'">C</button>
		<button v-on:click="type = 'D'">D</button>
		<h2 v-if="type === 'A'">A 입니다</h2>
		<h2 v-else-if="type === 'B'">B 입니다</h2>
		<h2 v-else-if="type === 'C'">C 입니다</h2>
		<h2 v-else>A,B,C 아니니다</h2>
		<hr />
		<template v-if="visible">
			<h1>Title</h1>
			<p>Paragraph 1</p>
			<p>Paragraph 2</p>
		</template>
		<br />
		<h1 v-show="ok">show합니다</h1>
		<button v-on:click="ok = !ok">show toggle</button>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const visible = ref(false);
		const type = ref('A');
		const ok = ref(true);
		return { visible, type, ok };
	},
};
</script>

<style lang="scss" scoped></style>
