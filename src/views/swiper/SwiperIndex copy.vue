<template>
	<h2>Swiper EX</h2>

	<h3>01.</h3>
	<swiper
		:slidesPerView="1.5"
		:spaceBetween="30"
		:pagination="pagination"
		:modules="modules"
		class="swiper1"
	>
		<swiper-slide>slide 1</swiper-slide>
		<swiper-slide>slide 2</swiper-slide>
		<swiper-slide>slide 3</swiper-slide>
	</swiper>

	<h3>02.</h3>
	<swiper class="swiper2">
		<swiper-slide>Slide 1</swiper-slide>
		<swiper-slide>Slide 2</swiper-slide>
		<template v-slot:container-start><span>Container start</span></template>
		<template v-slot:container-end><span>Container end</span></template>
		<template v-slot:wrapper-start><span>Wrapper start</span></template>
		<template v-slot:wrapper-end><span>Wrapper end</span></template>
	</swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
const modules = [Pagination];
const pagination = {
	clickable: true,
	renderBullet: function (index, className) {
		return '<span class="' + className + '">' + (index + 1) + '</span>';
	},
};
</script>

<style>
.swiper-slide {
	width: 100%;
	height: 400px;
	text-align: center;
	vertical-align: middle;
	background-color: #eee;
	line-height: 100%;
}
.swiper-pagination {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0 5px;
	margin-top: 20px;
}
.swiper-pagination-bullet {
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: #eee;
	line-height: 20px;
	text-align: center;
	cursor: pointer;
}
.swiper-pagination-bullet-active {
	background-color: #000;
	color: #fff;
}
</style>
