export default function ChartModule() {
	if (document.getElementById('js-order-chart')) {
		const ctx = document.getElementById('js-order-chart');
		const dataChart = JSON.parse(ctx.getAttribute('data-chart-date'));
		const dateList = dataChart.map((d) => d.date);
		const valueList = dataChart.map((d) => d.value);
		const myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: dateList,
				datasets: [
					{
						label: '% đặt hàng',
						data: valueList,
						borderColor: '#1AAC55',
						borderWidth: 2,
						backgroundColor: '#fff',
					},
				],
			},
			options: {
				plugins: {
					legend: {
						display: false,
					},
				},
				scales: {
					y: {
						beginAtZero: true,
					},
				},
				responsive: true,
			},
		});
	}
	if (document.getElementById('js-status-chart')) {
		const ctx = document.getElementById('js-status-chart');
		const dataChart = JSON.parse(ctx.getAttribute('data-chart-date'));
		const titleList = dataChart.map((d) => d.title);
		const bgList = dataChart.map((d) => d.bgColor);
		const valueList = dataChart.map((d) => d.value);
		const myStatusChart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: titleList,
				datasets: [
					{
						data: valueList,
						backgroundColor: bgList,
						borderColor: 'transparent',
					},
				],
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						display: false,
					},
				},
			},
		});
	}
}
