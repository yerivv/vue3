<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div v-for="post in posts" :key="post.id" class="col-4">
				<PostItem
					:title="post.title"
					:content="post.content"
					:createdAt="post.createdAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
		<hr class="my-4" />
		<!-- 
      PostDetailView 를 재활용하여 상세 내용이 보이게
    -->
		<AppCard>
			<PostDetailView :id="2"></PostDetailView>
		</AppCard>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import AppCard from '@/components/AppCard.vue';
import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const posts = ref([]);

const fetchPosts = async () => {
	try {
		const { data } = await getPosts();
		posts.value = data;
	} catch (error) {
		console.error(error);
	}
};
fetchPosts();

const router = useRouter();
const goPage = id => {
	router.push({ name: 'PostDetail', params: { id } });
};
</script>

<style lang="scss" scoped></style>