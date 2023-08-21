<template>
	<h2>vue-chartjs</h2>
	<div class="my-4">
		<h3>setting</h3>
		<div class="row g-2">
			<div class="col-12 card">
				<div class="card-body">참고 : https://vue-chartjs.org/</div>
			</div>
			<div class="col-12 card">
				<div class="card-body">npm i vue-chartjs chart.js</div>
			</div>
		</div>
	</div>
	<div class="my-4">
		<h3>ex : Bar</h3>
		<div style="height: 200px">
			<Bar id="chartBar" :data="data" :options="options" />
		</div>
	</div>
	<div class="my-4">
		<h3>ex : Doughnut</h3>
		<div style="height: 200px">
			<Doughnut id="chartDoughnut" :data="dataDoughnut" :options="options" />
		</div>
	</div>
	<div class="my-4">
		<h3>ex : Line</h3>
		<div style="height: 200px">
			<Line id="chartLine" :data="dataLine" :options="options" />
		</div>
	</div>
	<div class="my-4">
		<h3>ex : PolarArea</h3>
		<div style="height: 200px">
			<PolarArea :data="dataPolar" :options="options" />
		</div>
	</div>
	<div class="my-4">
		<h3>ex : Radar</h3>
		<div style="height: 200px">
			<Radar :data="dataRadar" :options="options" />
		</div>
	</div>
</template>

<script setup>
import {
	Chart as ChartJS,
	ArcElement,
	Title,
	Filler,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	RadialLinearScale,
} from 'chart.js';
import { Bar, Doughnut, Line, PolarArea, Radar } from 'vue-chartjs';
//import * as chartConfig from '@/api/chart';
import {
	data,
	dataDoughnut,
	dataLine,
	dataPolar,
	dataRadar,
	options,
	optionsBar,
} from '@/api/chart';

ChartJS.register(
	CategoryScale,
	ArcElement,
	LinearScale,
	BarElement,
	PointElement,
	LineElement,
	RadialLinearScale,
	Title,
	Filler,
	Tooltip,
	Legend,
);
</script>

<style lang="scss" scoped></style>
