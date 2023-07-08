<template>
	<div>
		<h2>{{ teacher.name }}</h2>
		<p>강의가 있습니까?</p>
		<p>{{ hasLecture }}</p>
		<p>{{ hasLecture }}</p>
		<p>{{ existLecture() }}</p>
		<p>{{ existLecture() }}</p>
		<hr />
		<h2>이름</h2>
		<p>{{ fullName }}</p>
		<p>{{ newFullName }}</p>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
	setup() {
		const teacher = reactive({
			name: '짐코딩',
			lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
		});

		const hasLecture = computed(() => {
			//캐시를 가지고 있음
			console.log('computed');
			return teacher.lectures.length > 0 ? '있음😀' : '없음😥';
		});

		const existLecture = () => {
			console.log('method');
			return teacher.lectures.length > 0 ? '있음😀' : '없음😥';
		};

		//기본적으로 computed는 읽기 전용. 새로운 속성을 넣을때
		const firstName = ref('김');
		const lastName = ref('예리');

		const fullName = computed(() => {
			return firstName.value + ' ' + lastName.value;
		});

		fullName.value = '조 상희';

		const newFirstName = ref('김');
		const newLastName = ref('예리');
		const newFullName = computed({
			get() {
				return newFirstName.value + ' ' + newLastName.value;
			},
			set(value) {
				console.log('value: ', value);
				console.log(value.split(' '));
				[newFirstName.value, newLastName.value] = value.split(' ');
			},
		});
		newFullName.value = '조 상희';

		return {
			teacher,
			hasLecture,
			existLecture,
			firstName,
			lastName,
			fullName,
			newFirstName,
			newLastName,
			newFullName,
		};
	},
};
</script>

<style lang="scss" scoped></style>
