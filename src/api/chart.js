export const data = {
	labels: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	],
	datasets: [
		{
			label: 'Data One',
			backgroundColor: '#f87979',
			data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
		},
	],
};

export const dataDoughnut = {
	labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
	datasets: [
		{
			backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
			data: [40, 20, 80, 10],
		},
	],
};

export const dataLine = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'Data One',
			backgroundColor: '#f87979',
			data: [40, 39, 10, 40, 39, 80, 40],
		},
	],
};

export const dataPolar = {
	labels: [
		'Eating',
		'Drinking',
		'Sleeping',
		'Designing',
		'Coding',
		'Cycling',
		'Running',
	],
	datasets: [
		{
			label: 'My First dataset',
			backgroundColor: 'rgba(179,181,198,0.2)',
			pointBackgroundColor: 'rgba(179,181,198,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(179,181,198,1)',
			data: [65, 59, 90, 81, 56, 55, 40],
		},
		{
			label: 'My Second dataset',
			backgroundColor: 'rgba(255,99,132,0.2)',
			pointBackgroundColor: 'rgba(255,99,132,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(255,99,132,1)',
			data: [28, 48, 40, 19, 96, 27, 100],
		},
	],
};

export const dataRadar = {
	labels: [
		'Eating',
		'Drinking',
		'Sleeping',
		'Designing',
		'Coding',
		'Cycling',
		'Running',
	],
	datasets: [
		{
			label: 'My First dataset',
			backgroundColor: 'rgba(179,181,198,0.2)',
			borderColor: 'rgba(179,181,198,1)',
			pointBackgroundColor: 'rgba(179,181,198,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(179,181,198,1)',
			data: [65, 59, 90, 81, 56, 55, 40],
		},
		{
			label: 'My Second dataset',
			backgroundColor: 'rgba(255,99,132,0.2)',
			borderColor: 'rgba(255,99,132,1)',
			pointBackgroundColor: 'rgba(255,99,132,1)',
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: 'rgba(255,99,132,1)',
			data: [28, 48, 40, 19, 96, 27, 100],
		},
	],
};

export const options = {
	responsive: true,
	maintainAspectRatio: false,
};

function getRandomInt() {
	return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
}
export const randomData = () => ({
	labels: [
		'January' + getRandomInt(),
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	],
	datasets: [
		{
			label: 'Data One',
			backgroundColor: '#f87979',
			data: [
				getRandomInt(),
				getRandomInt(),
				getRandomInt(),
				getRandomInt(),
				getRandomInt(),
				getRandomInt(),
				getRandomInt(),
				getRandomInt(),
				getRandomInt(),
				getRandomInt(),
				getRandomInt(),
				getRandomInt(),
			],
		},
	],
});

export const optionsBar = {
	responsive: true,
	maintainAspectRatio: false,
};
