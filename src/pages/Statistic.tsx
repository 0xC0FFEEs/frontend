import type { Component } from "solid-js";
import { onMount } from "solid-js";
import style from "../css/Statistics.module.css";
import { Chart } from "chart.js";
import { Doughnut } from "solid-chartjs";
import LeftArrow from "../components/LeftArrow";
import request from "sync-request";

const Statistic: Component = () => {
	let todayCoffee = request("GET", "https://sunrinthon.ny64.kr/data/7").body;
	let coffee = request("GET", "https://sunrinthon.ny64.kr/data/7/coffee").body;
	let monstar = request("GET", "https://sunrinthon.ny64.kr/data/7/monster").body;

	onMount(() => {
		Chart.register();
	});
	const chartData = {
		labels: ["January", "February"],
		datasets: [
			{
				label: "Sales",
				data: [todayCoffee, 150 - todayCoffee > 0 ? 150 - todayCoffee : 0],
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
			<LeftArrow />
			<section id={style.coffeeIntake}>
				<div class={style.wrap}>
					<div class={style.title}>
						<p>오늘의 카페인 섭취량</p>
						<p class={style.coffee_text}>{todayCoffee}mg</p>
					</div>
				</div>
				<div class={style.chart_div}>
					<Doughnut data={chartData} options={chartOptions} width={400} height={400} />
				</div>
			</section>

			<div class={style.progress}>
				<div class={style.des}>
					<div>커피</div>
					<div>{JSON.parse(coffee)[0].data}mg</div>
				</div>
				<progress value={JSON.parse(coffee)[0].data} max="300"></progress>
			</div>

			<div class={style.progress}>
				<div class={style.des}>
					<div>몬스터</div>
					<div>{JSON.parse(monstar)[0].data}mg</div>
				</div>
				<progress value={JSON.parse(monstar)[0].data} max="300"></progress>
			</div>

			<button class={style.btn}>
				<a style="color: white;text-decoration:none" href="/calculate">
					카페인 계산하기
				</a>
			</button>
		</div>
	);
};

export default Statistic;
