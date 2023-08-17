<template>
	<AppLoading v-if="loading" />
	<AppError v-else-if="error" :message="error.message" />
	<div v-else>
		<h2>{{ post.title }}</h2>
		<p>id : {{ post.id }}, isOdd: {{ isOdd }}</p>
		<p>{{ post.content }}</p>
		<p class="text-muted">
			{{ $dayjs(post.createdAt).format('YYYY. MM. DD HH:mm:ss') }}
		</p>
		<hr class="my-4" />
		<AppError v-if="removeError" :message="removeError.message" />
		<div class="row g-2">
			<div class="col-auto">
				<button class="btn btn-outline-dark">이전글</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-dark">다음글</button>
			</div>
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-outline-dark" @click="goListPage">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-outline-primary" @click="goEditPage">
					수정
				</button>
			</div>
			<div class="col-auto">
				<button
					class="btn btn-outline-danger"
					@click="remove"
					:disabled="removeLoading"
				>
					<template v-if="removeLoading">
						<span
							class="spinner-border spinner-border-sm"
							aria-hidden="true"
						></span>
						<span role="status">삭제중...</span>
					</template>
					<template v-else> 삭제 </template>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, ref, toRef, toRefs } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAxios } from '@/hooks/useAxios';
import { useNumber } from '@/composables/number';

const props = defineProps({
	id: [String, Number],
});

const router = useRouter();
const { id: idRef } = toRefs(props);
//const idRef = toRef(props, 'id');
const { isOdd } = useNumber(idRef);
const url = computed(() => `/posts/${props.id}`);
const { data: post, error, loading } = useAxios(url);

const {
	error: removeError,
	loading: removeLoading,
	execute,
} = useAxios(
	`/posts/${props.id}`,
	{ method: 'delete' },
	{
		immediate: false,
		onSuccess: () => {
			router.push({ name: 'PostList' });
		},
		onError: err => {
			removeError.value = err;
		},
	},
);

const remove = () => {
	if (confirm('해당 게시물을 삭제하시겠습니까?') === false) {
		return;
	}
	execute();
};

const goListPage = () => {
	router.push({ name: 'PostList' });
};
const goEditPage = () => {
	router.push({ name: 'PostEdit', params: { id: props.id } });
};
</script>

<style lang="scss" scoped></style>
