import type { Component } from "solid-js";
import style from "../css/Main.module.css";
import LeftArrow from "../components/LeftArrow";
import Logo from "../icon.svg";
import rPtks from "../assets/images/rPtks.svg";
import xhdrP from "../assets/images/xhdrP.svg";
import ckxm from "../assets/images/ckxm.svg";
import wjdqh from "../assets/images/wjdqh.svg";

const Main: Component = () => {
	return (
		<div id={style.app}>
			<LeftArrow />
			<div class={style.wrap}>
				<div class={style.title}>
					<p>오늘 카페인 몇잔?</p>
				</div>

				<img class={style.img} alt="" src={Logo} />

				<div class={style.subtitle}>
					<p>과도한 카페인 섭취 멈춰봐요</p>
				</div>
			</div>

			<div class={style.grid}>
				<a href="/calculate">
					<div class={style.item}>
						<div class={style.left}>
							<span>계산</span>
							<span> &gt;</span>
						</div>
						<div class={style.right}>
							<img src={rPtks} alt="" />
						</div>
					</div>
				</a>
				<a href="/statistic">
					<div class={style.item}>
						<div class={style.left}>
							<span>오늘의 통계</span>
							<span> &gt;</span>
						</div>
						<div class={style.right}>
							<img src={xhdrP} alt="" />
						</div>
					</div>
				</a>
				<a href="/grapher">
					<div class={style.item}>
						<div class={style.left}>
							<span>차트</span>
							<span> &gt;</span>
						</div>
						<div class={style.right}>
							<img src={ckxm} alt="" />
						</div>
					</div>
				</a>
				<a href="/info">
					<div class={style.item}>
						<div class={style.left}>
							<span>정보</span>
							<span> &gt;</span>
						</div>
						<div class={style.right}>
							<img src={wjdqh} alt="" />
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Main;
