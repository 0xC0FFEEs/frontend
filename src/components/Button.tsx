import { Component, createSignal } from "solid-js";
import style from "../css/Button.module.css";

const [getPage, modifyPage] = createSignal(true);

function onClickPer(a: boolean) {
	if (a) {
		return style.sele;
	} else {
		return style.pl;
	}
}

function onClickBack() {
	return "background-color: #D3D3D3;"
}

function wrapper() {
	modifyPage(!getPage());
	return undefined;
}

const Button: Component = () => {
	return (
		<ul class={style.ul} style={onClickBack()}>
			<li class={onClickPer(getPage())} onClick={()=>wrapper()}>커피</li>
			<li class={onClickPer(!getPage())} onClick={()=>wrapper()}>에너지</li>
		</ul>
	);
};

export default Button;
