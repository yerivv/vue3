<template>
	<form>
		<div class="mb-3">
			<label for="title" class="form-label">제목</label>
			<!-- autofocus : 로딩 한번만 실행 -->
			<input
				v-focus
				v-color="'orange'"
				:value="title"
				@input="$emit('update:title', $event.target.value)"
				type="text"
				class="form-control"
				id="title"
			/>
		</div>
		<div class="mb-3">
			<label for="content" class="form-label">내용</label>
			<textarea
				:value="content"
				@input="$emit('update:content', $event.target.value)"
				class="form-control"
				id="content"
				rows="3"
			></textarea>
		</div>
		<div class="d-flex gap-2 mt-4">
			<slot name="actions"></slot>
		</div>
	</form>
</template>

<script setup>
//객체로 정의
// const vFocus = {
// 	//매개변수
// 	mounted: el => {
// 		el.focus();
// 	},
// };
defineProps({
	title: String,
	content: String,
});
defineEmits(['update:title', 'update:content']);
</script>

<style lang="scss" scoped></style>
