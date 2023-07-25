<template>
	<div class="card">
		<div v-if="$slots.header" class="card-header">
			<slot name="header" header-message="헤더 메세지">#header</slot>
		</div>
		<div v-if="$slots.default" class="card-body">
			<slot :child-message="childMessage" hello-message="안녕하3">#body</slot>
		</div>
		<div v-if="hasFooter" class="card-footer text-muted">
			<slot name="footer" footer-message="푸터 메세지">#footer</slot>
		</div>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
	setup(props, { slots }) {
		const childMessage = ref('자식안녕!');
		// context.slots
		const hasFooter = computed(() => !!slots.footer);
		return { childMessage, hasFooter };
	},
};
</script>

<style lang="scss" scoped></style>
