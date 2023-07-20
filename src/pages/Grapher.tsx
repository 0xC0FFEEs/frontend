import { Component } from "solid-js";
import Graph from '../components/Graph';
import style from '../css/Chart.module.css';
import LeftArrow from "../components/LeftArrow";
const Button: Component = () => {
	return (
        <div id={style.app}>
            <LeftArrow />
            <div style="margin-left: 20px; margin-top: 20px;">
                <div class={style.title}>
                    <p>일주일 카페인 섭취량</p>
                </div>
                <div class={style.subtitle}>
                    <p>이번 주 카페인 몇 잔?</p>
                </div>
            </div>
            <Graph></Graph>
            <div style="width: 90%; height: 20%; border-radius: 10%; background-color: #D3D3D3; margin-left: 5%;">
                <p>일</p>
            </div>
        </div>
	);
};

export default Button;
