<template>
	<div class="row g-3">
		<!-- 
      자식에서 부모로 줄때는 내장메서드 $emit 이용
      $emit('이벤트명')
      파라미터 넘기는 것도 가능

      1. 컴포넌트 내장메서드 활용하는 법
      @click="$emit('createPost', 1, 2, 3, '김길동')"
    -->
		<div class="col col-2">
			<select
				class="form-select"
				v-model="type"
				aria-label="Default select example"
			>
				<option value="news">뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>
		<div class="col col-8">
			<input type="text" class="form-control" v-model="title" />
		</div>
		<div class="col col-2 d-grid">
			<button class="btn btn-primary" @click="createPost">추가</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	//자식에서 이벤트 동작
	//emits: ['createPost'],
	//객체문법
	emits: {
		//createPost: null, //유효성검사 없을 때
		createPost: newPost => {
			//console.log('validator : ', newPost); //유효성체크
			if (!newPost.type) {
				return false;
			} else if (!newPost.title) {
				return false;
			}
			return true;
		},
	},
	setup(props, { emit }) {
		const type = ref('news');
		const title = ref('');
		//2. context객채의 emit메서드 이용 setup(props, context)
		//context.emit
		//3. 구조분해할당 setup(props, {emit})
		const createPost = () => {
			//2 context.emit('createPost', 1, 2, 3, '김길동');
			const newPost = {
				type: type.value,
				title: title.value,
			};
			emit('createPost', newPost);
			//추가후 초기화
			type.value = 'news';
			title.value = '';
		};
		return { createPost, type, title };
	},
};
</script>

<style lang="scss" scoped></style>
