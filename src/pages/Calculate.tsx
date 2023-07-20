import type { Component } from "solid-js";
import style from "../css/Calculate.module.css";
import Button from './Button';

const Calculate: Component = () => {
	return (
		<div id={style.app}>
			<Button></Button>
			<section id={style.coffeeList}>
				<div class={style.wrap}>
					<div class={style.title}>
						<p>오늘 마신 카페인 음료</p>
					</div>
					<div class="frame-parent">
						<div class="frame-child"></div>
						<div class="div2">커피</div>
						<div class="div3">에너지</div>
					</div>
					<div class={style.list}>
						<div class={style.item}>
							<div class={style.img}></div>
							<div class={style.description}>
								<div class={style.name}>아메리카노</div>
								<div class={style.coffee}>6974mg</div>
							</div>
						</div>
						<div class={style.item}>
							<div class={style.img}></div>
							<div class={style.description}>
								<div class={style.name}>아메리카노</div>
								<div class={style.coffee}>6974mg</div>
							</div>
						</div>
						<div class={style.item}>
							<div class={style.img}></div>
							<div class={style.description}>
								<div class={style.name}>아메리카노</div>
								<div class={style.coffee}>6974mg</div>
							</div>
						</div>
						<div class={style.item}>
							<div class={style.img}></div>
							<div class={style.description}>
								<div class={style.name}>아메리카노</div>
								<div class={style.coffee}>6974mg</div>
							</div>
						</div>
						<div class={style.item}>
							<div class={style.img}></div>
							<div class={style.description}>
								<div class={style.name}>아메리카노</div>
								<div class={style.coffee}>6974mg</div>
							</div>
						</div>
						<div class={style.item}>
							<div class={style.img}></div>
							<div class={style.description}>
								<div class={style.name}>아메리카노</div>
								<div class={style.coffee}>6974mg</div>
							</div>
						</div>
						<div class={style.item}>
							<div class={style.img}></div>
							<div class={style.description}>
								<div class={style.name}>아메리카노</div>
								<div class={style.coffee}>6974mg</div>
							</div>
						</div>
						<div class={style.item}>
							<div class={style.img}></div>
							<div class={style.description}>
								<div class={style.name}>아메리카노</div>
								<div class={style.coffee}>6974mg</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Calculate;
