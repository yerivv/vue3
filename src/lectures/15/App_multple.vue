<template>
	<div></div>
</template>

<script>
import { reactive } from 'vue';
import { watch } from 'vue';
import { ref } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);
		const obj = reactive({
			count: 0,
		});

		//--------- getter 함수
		// watch(function () {
		// 	return x.value + y.value;
		// }); // <<이런 getter함수를 아래와 같이 사용 가능.
		watch(
			() => x.value + y.value,
			(sum, oldValue) => {
				console.log('sum:', sum);
				console.log('oldValue:', oldValue);
			},
		);
		//--------- array
		watch([x, y], ([newX, newY]) => {
			console.log(newX, newY);
		});
		//--------- obj 반응형
		console.log(typeof obj.count); //이건 반응형함수가 아니다.
		watch(obj, (newValue, oldValue) => {
			console.log('newValue: ', newValue);
			console.log('oldValue: ', oldValue); //obj의 new,old는 같은 곳을 보기때문에 같은 값이 찍힘.
		});
		//obj의 속성을 하고 싶으면 getter함수를 사용
		// watch(
		// 	() => obj.count,
		// 	(newValue, oldValue) => {
		// 		console.log('newValue: ', newValue);
		// 		console.log('oldValue: ', oldValue);
		// 	},
		// );

		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		watch(person, newValue => {
			console.log('newValue: ', newValue);
		});
		watch(
			() => person.obj, //obj자체가 변경됐을때만 감지
			newValue => {
				console.log('newValue: ', newValue);
			},
		);
		return { x, y, obj, person };
	},
};
</script>

<style lang="scss" scoped></style>
