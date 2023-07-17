<template>
	<div>
		<h1>양방향 바인딩(속성, 이벤트)</h1>
		<div>
			<h2>input value (:value, @input)</h2>
			<input type="text" v-model="inputValue" />
			<!--
				:value="inputValue"
				@input="event => (inputValue = event.target.value)"
			-->
			<!-- lazy는 포커스가 아웃, change가 되었을때 동기화-->
			<!-- <input type="text" v-model.lazy="inputValue" /> -->
			<!-- number는 값이 숫자가 될때 타입을 number로 자동변경-->
			<!-- <input type="text" v-model.number="inputValue" /> -->
			<!-- trim은 공백제거 -->
			<!-- <input type="text" v-model.trim="inputValue" /> -->
			<div>{{ inputValue }}</div>
			<div>{{ typeof inputValue }}</div>
		</div>

		<div>
			<h2>textarea value (:value, @input)</h2>
			<textarea v-model="textareaValue"></textarea>
			<!--
				:value="textareaValue"
				@input="event => (textareaValue = event.target.value)"
			-->
			<div>{{ textareaValue }}</div>
		</div>

		<div>
			<h2>checkbox value (:checked, @change)</h2>
			<input
				type="checkbox"
				name="checkbox"
				id="checkbox"
				v-model="checkboxValue"
				true-value="YES"
				false-value="NO"
			/>
			<!--
				:checked="checkboxValue"
				@change="event => (checkboxValue = event.target.checked)"
			-->
			<label for="checkbox">{{ checkboxValue }}</label>
			<div>{{ checkboxValue }}</div>
		</div>

		<div>
			<h2>checkboxS value (:checked, @change)</h2>
			<label>
				<input
					type="checkbox"
					name="fruit"
					value="사과"
					v-model="checkboxValues"
				/>
				사과
			</label>
			<label>
				<input
					type="checkbox"
					name="fruit"
					value="배"
					v-model="checkboxValues"
				/>
				배
			</label>
			<label>
				<input
					type="checkbox"
					name="fruit"
					value="메론"
					v-model="checkboxValues"
				/>
				메론
			</label>
			<div>{{ checkboxValues }}</div>
		</div>

		<div>
			<h2>radio value (:checked, @change)</h2>
			<label>
				<input type="radio" name="radio" value="O" v-model="radioValue" />
				<!--
					:checked="radioValue === 'O'"
					@change="event => (radioValue = event.target.value)"-->
				O형
			</label>
			<label>
				<input type="radio" name="radio" value="AB" v-model="radioValue" />
				<!--
					:checked="radioValue === 'AB'"
					@change="event => (radioValue = event.target.value)"-->
				AB형
			</label>
			<div>{{ radioValue }}형</div>
		</div>

		<div>
			<h2>select value (:value, @change)</h2>
			<select name="select" v-model="selectValue">
				<option value="html">html 선택</option>
				<option value="css">css 선택</option>
				<option value="javascript">javascript 선택</option>
			</select>
			<!--:value="selectValue"
				@change="event => (selectValue = event.target.value)"-->
			<div>{{ selectValue }}</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref('');
		const textareaValue = ref('');
		const checkboxValue = ref('YES');
		const checkboxValues = ref([]);
		const radioValue = ref('O');
		const selectValue = ref('html');
		return {
			inputValue,
			textareaValue,
			checkboxValue,
			checkboxValues,
			radioValue,
			selectValue,
		};
	},
};
</script>

<style lang="scss" scoped>
* {
	font-size: 14px;
}
h1 {
	font-size: 20px;
	background-color: black;
	color: white;
}
h2 {
	font-size: 16px;
	background-color: antiquewhite;
}
</style>
