import { Component, createSignal } from "solid-js";
import style from "../css/Calculate.module.css";
import LeftArrow from "../components/LeftArrow";
import style2 from "../css/Button.module.css";
import request from "sync-request";

const [getPage, modifyPage] = createSignal(true);
const [getp, modp] = createSignal(0);
const [getp2, modp2] = createSignal(0);
const monster = {
	몬스터: 100,
	핫식스: 60,
	레드불: 80,
	박카스: 30,
};
const monsar = ["몬스터", "핫식스", "레드불", "박카스"];
const coffee = ["카페모카", "에스프레소", "콜드브루", "카푸치노", "아메리카노", "믹스커피"];

function getAmount(x: number) {
	if (x == 1) {
		return 180;
	} else if (x == 2) {
		return 100;
	} else if (x == 3) {
		return 60;
	} else if (x == 4) {
		return 80;
	} else if (x == 5) {
		return 30;
	} else {
		return 0;
	}
}

function minus(x: number) {
	if (x != 0) {
		modp2(getp2() - getAmount(x));
	}
	let a = getp() - getAmount(x);
	if (a > 0) {
		modp(a);
	} else {
		modp(0);
	}
}

function plus(x: number) {
	if (x != 1) {
		modp2(getp2() + getAmount(x));
	}
	modp(getp() + getAmount(x));
}

function onClickPer(a: boolean) {
	if (a) {
		return style2.sele;
	} else {
		return style2.pl;
	}
}

function onClickBack() {
	return "background-color: #D3D3D3;";
}

function* asddf(monster: boolean) {
	let a = 0;
	if (!monster) {
		yield (
			<div class={style.list}>
				<div class={style.item}>
					<div class={style.img}></div>
					<div class={style.description}>
						<div class={style.name}>{coffee[0]}</div>
						<div class={style.coffee}>180mg</div>
					</div>
					<div class={style.pmDiv}>
						<ul class={style.pm}>
							<li>+</li>
							<li>-</li>
						</ul>
					</div>
				</div>
			</div>
		);
		a++;
	} else {
		yield (
			<div class={style.list}>
				<div class={style.item}>
					<div class={style.img}></div>
					<div class={style.description}>
						<div class={style.name}>{monster[monsar[a]]}</div>
						<div class={style.coffee}>180mg</div>
					</div>
					<div class={style.pmDiv}>
						<ul class={style.pm}>
							<li>+</li>
							<li>-</li>
						</ul>
					</div>
				</div>
			</div>
		);
		a++;
	}
}

function wrapper() {
	modifyPage(!getPage());
	document.getElementById("coffeel")!!.classList.toggle(style.hidden);
	document.getElementById("monsterl")!!.classList.toggle(style.hidden);
	return undefined;
}

const Calculate: Component = () => {
	return (
		<div id={style.app}>
			<LeftArrow />
			<section id={style.coffeeList}>
				<div class={style.wrap}>
					<div class={style.title}>
						<p>오늘 마신 카페인 음료</p>
					</div>
					<div class={style.subtitle}>
						<p>오늘 카페인 몇잔?</p>
					</div>
					<ul class={style2.ul} style={onClickBack()}>
						<li class={onClickPer(getPage())} onClick={() => wrapper()}>
							커피
						</li>
						<li class={onClickPer(!getPage())} onClick={() => wrapper()}>
							에너지
						</li>
					</ul>
					<div id="coffeel">
						<div class={style.list}>
							<div class={style.item}>
								<div class={style.img}></div>
								<div class={style.description}>
									<div class={style.name}>{coffee[0]}</div>
									<div class={style.coffee}>180mg</div>
								</div>
								<div class={style.pmDiv}>
									<ul class={style.pm}>
										<li onClick={() => plus(1)}>+</li>
										<li onClick={() => minus(1)}>-</li>
									</ul>
								</div>
							</div>
						</div>
						<div class={style.list}>
							<div class={style.item}>
								<div class={style.img}></div>
								<div class={style.description}>
									<div class={style.name}>{coffee[1]}</div>
									<div class={style.coffee}>180mg</div>
								</div>
								<div class={style.pmDiv}>
									<ul class={style.pm}>
										<li onClick={() => plus(1)}>+</li>
										<li onClick={() => minus(1)}>-</li>
									</ul>
								</div>
							</div>
						</div>
						<div class={style.list}>
							<div class={style.item}>
								<div class={style.img}></div>
								<div class={style.description}>
									<div class={style.name}>{coffee[2]}</div>
									<div class={style.coffee}>180mg</div>
								</div>
								<div class={style.pmDiv}>
									<ul class={style.pm}>
										<li onClick={() => plus(1)}>+</li>
										<li onClick={() => minus(1)}>-</li>
									</ul>
								</div>
							</div>
						</div>
						<div class={style.list}>
							<div class={style.item}>
								<div class={style.img}></div>
								<div class={style.description}>
									<div class={style.name}>{coffee[3]}</div>
									<div class={style.coffee}>180mg</div>
								</div>
								<div class={style.pmDiv}>
									<ul class={style.pm}>
										<li onClick={() => plus(1)}>+</li>
										<li onClick={() => minus(1)}>-</li>
									</ul>
								</div>
							</div>
						</div>
						<div class={style.list}>
							<div class={style.item}>
								<div class={style.img}></div>
								<div class={style.description}>
									<div class={style.name}>{coffee[4]}</div>
									<div class={style.coffee}>180mg</div>
								</div>
								<div class={style.pmDiv}>
									<ul class={style.pm}>
										<li onClick={() => plus(1)}>+</li>
										<li onClick={() => minus(1)}>-</li>
									</ul>
								</div>
							</div>
						</div>
						<div class={style.list}>
							<div class={style.item}>
								<div class={style.img}></div>
								<div class={style.description}>
									<div class={style.name}>{coffee[5]}</div>
									<div class={style.coffee}>180mg</div>
								</div>
								<div class={style.pmDiv}>
									<ul class={style.pm}>
										<li onClick={() => plus(1)}>+</li>
										<li onClick={() => minus(1)}>-</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div id="monsterl" class={style.hidden}>
						<div class={style.list}>
							<div class={style.item}>
								<div class={style.img}></div>
								<div class={style.description}>
									<div class={style.name}>몬스터</div>
									<div class={style.coffee}>100mg</div>
								</div>
								<div class={style.pmDiv}>
									<ul class={style.pm}>
										<li onClick={() => plus(2)}>+</li>
										<li onClick={() => minus(2)}>-</li>
									</ul>
								</div>
							</div>
						</div>
						<div class={style.list}>
							<div class={style.item}>
								<div class={style.img}></div>
								<div class={style.description}>
									<div class={style.name}>핫식스</div>
									<div class={style.coffee}>60mg</div>
								</div>
								<div class={style.pmDiv}>
									<ul class={style.pm}>
										<li onClick={() => plus(3)}>+</li>
										<li onClick={() => minus(3)}>-</li>
									</ul>
								</div>
							</div>
						</div>
						<div class={style.list}>
							<div class={style.item}>
								<div class={style.img}></div>
								<div class={style.description}>
									<div class={style.name}>레드불</div>
									<div class={style.coffee}>80mg</div>
								</div>
								<div class={style.pmDiv}>
									<ul class={style.pm}>
										<li onClick={() => plus(4)}>+</li>
										<li onClick={() => minus(4)}>-</li>
									</ul>
								</div>
							</div>
							<div class={style.list}>
								<div class={style.item}>
									<div class={style.img}></div>
									<div class={style.description}>
										<div class={style.name}>박카스</div>
										<div class={style.coffee}>30mg</div>
									</div>
									<div class={style.pmDiv}>
										<ul class={style.pm}>
											<li onClick={() => plus(5)}>+</li>
											<li onClick={() => minus(5)}>-</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div class={style.todayCoffee}>
				<h2>카페인</h2>
				<h1>{getp()}mg</h1>
				<button
					class={style.btn}
					onClick={() => {
						request("POST", "https://sunrinthon.ny64.kr/data/7/coffee", {
							headers: {
								data: (getp() - getp2()).toString(),
							},
						});
						request("POST", "https://sunrinthon.ny64.kr/data/7/monster", {
							headers: {
								data: getp2().toString(),
							},
						});
					}}
				>
					<a style="color: white; text-decoration:none" href="/statistic">
						카페인 추가하기
					</a>
				</button>
			</div>
		</div>
	);
};

export default Calculate;
