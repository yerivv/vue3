<template>
	<div class="card">
		<div class="card-body">
			<!-- <div>{{ $props }}</div> -->
			<span class="badge bg-secondary">{{ typeName }}</span>
			<h5 class="card-title mt-2">{{ title }}</h5>
			<p class="card-text">
				{{ contents }}
			</p>
			<a href="#" class="btn" :class="isLikeClass">좋아요</a>
			<!-- <button @click="toggleLike">toggle(반대)</button> -->
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
export default {
	props: {
		type: {
			type: String,
			default: 'news',
			validator: value => {
				return ['news', 'notice'].includes(value);
			}, //유효성 검사 2가지 외는 안돼
		},
		isLike: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			required: true, //필수항목
		},
		contents: {
			type: String,
			//required: true, //필수항목
		},
		obj: {
			type: Object,
			default: () => {},
		},
	},
	emits: ['toggleLike'],
	setup(props, context) {
		//console.log('props.title :', props.title);
		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);

		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);

		const toggleLike = () => {
			//props.isLike = !props.isLike;
			context.emit('toggleLike');
		};

		return { isLikeClass, typeName, toggleLike };
	},
};
</script>

<style>
.red {
	color: v-bind(color) !important;
}
</style>
<!-- <style lang="scss" scoped></style> -->
