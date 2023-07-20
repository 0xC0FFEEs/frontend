import type { Component } from "solid-js";
import style from "../css/Startup.module.css";
import signupImage from "../assets/images/signup_image.svg";
import LeftArrow from "../components/LeftArrow";

const Startup: Component = () => {
	return (
		<div id={style.app}>
			<div class={style.wrap}>
				<div class={style.title}>
					<p>당신은 하루에 카페인을</p>
					<p>얼마나 마시나요?</p>
				</div>
				<div class={style.subtitle}>
					<p>과도한 카페인 섭취</p>
					<p>당신의 수명을 줄입니다</p>
				</div>
			</div>
			<img class={style.img} alt="" src={signupImage} />
			<button class={style.btn}>
				<a href="/" class={style.novisit} style="color:white; text-decoration: none">
					시작하기
				</a>
			</button>
		</div>
	);
};

export default Startup;
