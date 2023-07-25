<template>
	<div class="p-3 bg-danger">
		<!--v-bind="$attrs"-->
		<button class="btn btn-primary" type="button" @click="sayHello">
			My Button
		</button>
		<!-- {{ $attrs }} -->
	</div>
</template>

<script>
export default {
	//inheritAttrs: false, //속성 상속 안함
	emits: ['click'],
	setup(props, { emit }) {
		// console.log(context.attrs);
		// console.log(context.attrs.class);
		// console.log(context.attrs.id);
		// console.log(context.attrs.onClick);
		// context.attrs.onClick();
		const sayHello = () => {
			emit('sayHello');
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
