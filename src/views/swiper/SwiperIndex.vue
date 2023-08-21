<template>
	<h2>swiper-vue</h2>
	<div class="group">
		<h3>ex 01.</h3>
		<AppSwiper
			:slidesPerView="2"
			:spaceBetween="30"
			:pagination="{ clickable: true }"
			swiperClass="swiper1"
		>
			<template #default>
				<swiper-slide>sodyd1</swiper-slide>
				<swiper-slide>sodyd2</swiper-slide>
				<swiper-slide>sodyd3</swiper-slide>
				<swiper-slide>sodyd5</swiper-slide>
				<swiper-slide>sodyd6</swiper-slide>
			</template>
		</AppSwiper>
	</div>
	<div class="group">
		<h3>ex 02.</h3>
		<AppSwiper
			:slidesPerView="'auto'"
			:pagination="pagination"
			:navigation="true"
			:spaceBetween="15"
			swiperClass="swiper2"
		>
			<template #default>
				<swiper-slide v-for="(slide, index) in slides" :key="index">
					{{ slide.title }}
					{{ slide.content }}
					<a
						v-if="slide.link"
						:href="`${slide.link}`"
						:target="`${slide.target}`"
					>
						<img :src="`${slide.image}`" :alt="`${slide.title}`" />
					</a>
					<img v-else :src="`${slide.image}`" :alt="`${slide.title}`" />
				</swiper-slide>
			</template>
		</AppSwiper>
	</div>
	<div class="group">
		<h3>ex 03.</h3>
		<AppSwiper
			:pagination="{
				type: 'progressbar',
			}"
			swiperClass="swiper3"
		></AppSwiper>
	</div>
	<div class="group">
		<h3>ex 04.</h3>
		<AppSwiper
			:pagination="{
				type: 'fraction',
			}"
			:loop="true"
			swiperClass="swiper4"
		></AppSwiper>
	</div>
</template>

<script setup>
import { SwiperSlide } from 'swiper/vue';
import { useAxios } from '@/hooks/useAxios';
import { ref } from 'vue';

const { data: slides } = useAxios('/slide');

const pagination = {
	clickable: true,
	renderBullet: function (index, className) {
		return '<span class="' + className + '">' + (index + 1) + '</span>';
	},
};
</script>

<style lang="scss" scoped>
.group {
	margin-bottom: 50px;
}
</style>
