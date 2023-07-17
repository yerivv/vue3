<template>
	<div>
		<input type="text" @keyup="addTodo" />
		<input type="text" @keyup.enter="addTodo2" />
		<input type="text" @keyup.ctrl.enter="addTodo2" />
		<ul>
			<li v-for="(todo, index) in todoList" :key="index">
				{{ todo }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		const todoList = reactive([]);
		const addTodo = event => {
			console.log(event.key);
			if (event.key === 'Enter') {
				todoList.push(event.target.value);
				event.target.value = '';
				event.target.focus();
			}
		};
		const addTodo2 = event => {
			todoList.push(event.target.value);
			event.target.value = '';
			event.target.focus();
		};
		return { todoList, addTodo, addTodo2 };
	},
};
</script>

<style lang="scss" scoped></style>
