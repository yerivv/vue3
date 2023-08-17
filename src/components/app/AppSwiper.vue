<template>
	<swiper :modules="modules" :class="swiperClass">
		<slot> </slot>
	</swiper>
</template>

<script setup>
import { Swiper } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
defineProps({
	swiperClass: String,
});
const modules = [Pagination, Navigation];
</script>

<style>
.swiper1 .swiper-slide {
	width: 100%;
	height: 200px;
	text-align: center;
	vertical-align: middle;
	background-color: #eee;
	line-height: 100%;
}
</style>
