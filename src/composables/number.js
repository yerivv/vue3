import { computed, unref } from 'vue';

export const useNumber = number => {
	const isOdd = computed(() => unref(number) % 2 === 1);
	const isEvent = computed(() => !isOdd.value);
	return {
		isOdd,
		isEvent,
	};
};
