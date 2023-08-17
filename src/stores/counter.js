import { defineStore } from 'pinia';

//use시작하는 네이밍이 관례
//'counter' 고유한 아이디

export const useCounterStore = defineStore('counter', {
	state: () => ({
		counter: 1,
	}), //객체를 반환하는 함수
	getters: {
		doubleCount: state => state.counter * 2,
		doubleCountPlusOne() {
			return this.doubleCount + 1;
		},
	},
	actions: {
		increment() {
			this.counter++;
		},
	},
});
