import {
	createRouter,
	createWebHistory,
	createWebHashHistory,
} from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';
import SwiperIndex from '@/views/swiper/SwiperIndex.vue';
import MyPageView from '@/views/MypageView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateView,
	},
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetailView,
		props: true,
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEditView,
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
	{
		path: '/nested',
		name: 'Nested',
		component: NestedView,
		children: [
			{
				path: '',
				name: 'NestedHome',
				component: NestedHomeView,
			},
			{
				path: 'one',
				name: 'NestedOne',
				component: NestedOneView,
			},
			{
				path: 'two',
				name: 'NestedTwo',
				component: NestedTwoView,
			},
		],
	},
	{
		path: '/swiper',
		name: 'SwiperIndex',
		component: SwiperIndex,
		beforeEnter: [removeQueryParams, removeHash]
	},
	{
		path: '/my',
		name: 'MyPageView',
		component: MyPageView,
		//라우트 가드 (beforeEnter)
		// beforeEnter: (to, from) => {
		// 	console.log('to', to);
		// 	console.log('from', from);
		// 	//return false; //라우팅 취소
		// }
	},
];

function removeQueryParams(to) {
  if (Object.keys(to.query).length)
    return { path: to.path, query: {}, hash: to.hash }
}

function removeHash(to) {
  if (to.hash) return { path: to.path, query: to.query, hash: '' }
}

const router = createRouter({
	history: createWebHistory(),
	//history: createWebHashHistory(),
	routes,
});

//전역가드 (Global Before Guards)
// router.beforeEach((to, from) => {
// 	console.log('to', to);
// 	console.log('from', from);
// 	if (to.name == 'MyPageView'){
// 		router.push({name:'Home'})
// 	}
// 	return false; //라우팅 취소
// })

export default router;
