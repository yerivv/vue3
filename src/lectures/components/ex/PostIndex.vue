<template>
	<main>
		<div class="container py-4">
			<!-- 자식에서의 v-on: >> @이벤트명 = '메서드'로 입력-->
			<PostCreate @create-post="createPost"></PostCreate>
			<hr class="my-3" />
			<div class="row g-3">
				<div v-for="post in posts" :key="post.id" class="col col-4">
					<PostItem
						:title="post.title"
						:contents="post.contents"
						:type="post.type"
						:is-like="post.isLike"
						@toggle-like="post.isLike = !post.isLike"
					></PostItem>
					<!-- 객체를 사용한 다중 속성 전달(전달인자 없음) -->
					<!-- <PostItem v-bind="post"></PostItem> -->

					<!-- 단반향 : 부모컴포넌트 > 자식컴포넌트 -->
					<!-- <button @click="post.isLike = !post.isLike">toggle</button> -->
				</div>
			</div>

			<hr class="my-3" />
			<!--
				사용자 정의컴포넌트 에서는
				props : modelValue
				event : update:modelValue
				를 통해서 v-model을 그려줌
			-->
			<!--
				:model-value="username"
				@update:model-value="value => (username = value)"
			-->
			<LabelInput v-model="username" label="이름"></LabelInput>
			<LabelTitle v-model:title="username" label="제목"></LabelTitle>

			<Username
				v-model:firstname="firstname"
				v-model:lastname="lastname"
			></Username>
		</div>
	</main>
</template>

<script>
import { reactive, ref } from 'vue';
import PostItem from '@/components/PostItem.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue';
import LabelTitle from '@/components/LabelTitle.vue';
import Username from '@/components/Username.vue';

export default {
	components: {
		PostItem,
		PostCreate,
		LabelInput,
		LabelTitle,
		Username,
	},
	setup() {
		const posts = reactive([
			{
				id: '1',
				title: '제목1',
				contents: '내용1',
				type: 'news',
				isLike: true,
			},
			{
				id: '2',
				title: '제목2',
				contents: '내용2',
				type: 'news',
				isLike: true,
			},
			{
				id: '3',
				title: '제목3',
				contents: '내용3',
				type: 'news',
				isLike: true,
			},
			{
				id: '4',
				title: '제목4',
				contents: '내용4',
				type: 'notice',
				isLike: false,
			},
			{
				id: '5',
				title: '제목5',
				contents: '내용5',
				type: 'notice',
				isLike: false,
			},
		]);

		const createPost = newPost => {
			console.log('newPost:', newPost);
			posts.push(newPost); //배열에 추가
		};

		const username = ref('');
		const firstname = ref('');
		const lastname = ref('');
		return { posts, createPost, username, firstname, lastname };
	},
};
</script>

<style lang="scss" scoped></style>
