<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">ProvideInject Component</div>
			<div class="card-body">
				<button @click="count++">click</button>
				<p>appMessage : {{ appMessage }}</p>
				<Child></Child>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, provide, inject, readonly } from 'vue';
import Child from '@/components/ChildFirst.vue';
export default {
	components: { Child },
	setup() {
		const staticMessage = 'static message';
		const message = ref('message');
		const updateMessage = appendMessage => {
			message.value = message.value + appendMessage;
		};
		const count = ref('10');
		//provide('static-message', staticMessage);
		//readonly는 하위컴포넌트에서 변경X
		provide('message', { message: readonly(message), updateMessage }); //객체로 전달
		provide('count', count);

		const appMessage = inject('app-message');
		return { count, appMessage };
	},
};
</script>

<style lang="scss" scoped></style>
