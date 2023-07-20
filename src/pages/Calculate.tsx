import type { Component } from "solid-js";
import style from "../css/Calculate.module.css";
import Button from '../components/Button';
import LeftArrow from '../components/LeftArrow';

const Calculate: Component = () => {
	return (
		<div id={style.app}>
			<LeftArrow/>
			<section id={style.coffeeList}>
				<div class={style.wrap}>
					<div class={style.title}>
						<p>오늘 마신 카페인 음료</p>
					</div>
					<div class={style.subtitle}>
						<p>오늘 카페인 몇잔?</p>
					</div>
					<Button></Button>
					<div class={style.list}>
						<div class={style.item}>
							<div class={style.img}></div>
							<div class={style.description}>
								<div class={style.name}>아메리카노</div>
								<div class={style.coffee}>6974mg</div>
							</div>
							<div class={style.pmDiv}>
								<ul class={style.pm}>
									<li>+</li>
									<li>-</li>
								</ul>
							</div>
						</div>
					</div>
					<div class={style.list}>
						<div class={style.item}>
							<div class={style.img}></div>
							<div class={style.description}>
								<div class={style.name}>아메리카노</div>
								<div class={style.coffee}>6974mg</div>
							</div>
							<div class={style.pmDiv}>
								<ul class={style.pm}>
									<li>+</li>
									<li>-</li>
								</ul>
							</div>
						</div>
					</div>
					<div class={style.list}>
						<div class={style.item}>
							<div class={style.img}></div>
							<div class={style.description}>
								<div class={style.name}>아메리카노</div>
								<div class={style.coffee}>6974mg</div>
							</div>
							<div class={style.pmDiv}>
								<ul class={style.pm}>
									<li>+</li>
									<li>-</li>
								</ul>
							</div>
						</div>
					</div>
					<div class={style.list}>
						<div class={style.item}>
							<div class={style.img}></div>
							<div class={style.description}>
								<div class={style.name}>아메리카노</div>
								<div class={style.coffee}>6974mg</div>
							</div>
							<div class={style.pmDiv}>
								<ul class={style.pm}>
									<li>+</li>
									<li>-</li>
								</ul>
							</div>
						</div>
					</div>
					<div class={style.list}>
						<div class={style.item}>
							<div class={style.img}></div>
							<div class={style.description}>
								<div class={style.name}>아메리카노</div>
								<div class={style.coffee}>6974mg</div>
							</div>
							<div class={style.pmDiv}>
								<ul class={style.pm}>
									<li>+</li>
									<li>-</li>
								</ul>
							</div>
						</div>
					</div>
					<div class={style.list}>
						<div class={style.item}>
							<div class={style.img}></div>
							<div class={style.description}>
								<div class={style.name}>아메리카노</div>
								<div class={style.coffee}>6974mg</div>
							</div>
							<div class={style.pmDiv}>
								<ul class={style.pm}>
									<li>+</li>
									<li>-</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div class={style.todayCoffee}>
				<h2>카페인</h2>
				<h1>200mg</h1>
				<button class={style.btn}>시작하기</button>
			</div>
		</div>
	);
};

export default Calculate;
