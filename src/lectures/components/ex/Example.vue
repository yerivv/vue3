<template>
	<main>
		<div class="container py-4">
			<MyButton
				class="my-button"
				id="my-button"
				@say-hello="sayHello"
			></MyButton>

			<FancyButton> click! <span style="color: red">###</span> </FancyButton>
			<FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
			<FancyButton>
				<template v-slot="{ fancyMessage }">{{ fancyMessage }}</template>
			</FancyButton>
			<hr class="my-4" />
			<AppCard>
				<!-- v-slot의 단축 # -->
				<!-- <template #[slotArgs]>제목입니다</template> -->
				<!-- <template #default>내용입니다</template> -->
				<!-- 암시적으로 Default 슬롯입니다!
				<template #footer>푸터입니다</template> -->
				<!-- <template #default="slopProps">
					{{ slopProps.childMessage }}
					디폴트입니다. {{ message }}
				</template> -->
				<!-- 구조분해할당 -->
				<template #header="{ headerMessage }">
					{{ headerMessage }}
				</template>
				<template #default="{ childMessage, helloMessage }">
					디폴트입니다. {{ message }} <br />{{ childMessage }} <br />{{
						helloMessage
					}}
				</template>
				<template #footer="{ footerMessage }">
					{{ footerMessage }}
				</template>
			</AppCard>

			<hr class="my-4" />
			<!-- 헤더와 푸터를 쓰지 않을때-->
			<AppCard>내용입니다</AppCard>
		</div>
	</main>
</template>

<script>
import { ref } from 'vue';
import MyButton from './MyButton.vue';
import FancyButton from './FancyButton.vue';
import AppCard from '@/components/AppCard.vue';
export default {
	components: {
		MyButton,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert('안녕하세요!');
		};

		const slotArgs = ref('header');
		const message = ref('안녕하세요!');
		return { sayHello, slotArgs, message };
	},
};
</script>

<style lang="scss" scoped></style>
