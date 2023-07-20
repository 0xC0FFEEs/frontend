import type { Component } from "solid-js";
import { onMount } from "solid-js";
import style from "../css/Statistics.module.css";
import { Chart } from "chart.js";
import { Doughnut } from "solid-chartjs";
import LeftArrow from '../components/LeftArrow';

const Statistic: Component = () => {
	onMount(() => {
		Chart.register();
	});
	const chartData = {
		labels: ["January", "February"],
		datasets: [
			{
				label: "Sales",
				data: [50, 60],
				backgroundColor: ["#0B666A", "#D3D3D3"],
			},
		],
	};
	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		borderWidth: 0,
		cutout: 150,
		radius: 170,
	};

	return (
		<div id={style.app}>
			<LeftArrow/>
			<section id={style.coffeeIntake}>
				<div class={style.wrap}>
					<div class={style.title}>
						<p>오늘의 카페인 섭취량</p>
						<p class={style.coffee_text}>200mg</p>
					</div>
				</div>
				<div class={style.chart_div}>
					<Doughnut data={chartData} options={chartOptions} width={400} height={400} />
				</div>
			</section>

			<div class={style.progress}>
				<div class={style.des}>
					<div>커피</div>
					<div>00mg</div>
				</div>
				<progress value="40" max="100"></progress>
			</div>

			<div class={style.progress}>
				<div class={style.des}>
					<div>커피</div>
					<div>00mg</div>
				</div>
				<progress value="40" max="100"></progress>
			</div>

			<button class={style.btn}>카페인 계산하기</button>
		</div>
	);
};

export default Statistic;
