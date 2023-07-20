import { Component } from "solid-js";
import Graph from "../components/Graph";
import style from "../css/Chart.module.css";
import LeftArrow from "../components/LeftArrow";
import request from "sync-request";

const Button: Component = () => {
  let data = [];
  let data2: Array<number> = [];
  for (let i = 16; i <= 22; i++) {
    // @ts-ignore
    data.push(
      Number(request("GET", `http://localhost:50005/data/${i - 15}`).body)
    );
  }
  for (let i = 8; i <= 14; i++) {
    // @ts-ignore
    data2.push(Number(request("GET", `http://localhost:50005/data/${i}`).body));
  }
  let sum: number = data.reduce((a, b) => a + b, 0);
  console.log(data2);
  console.log("Asd");
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
      <div class={style.asdfhelpme}>
        <p style="margin-left: 10%; margin-top: 12%">
          일주일 동안 총 {sum}mg을 섭취하였습니다.
        </p>
        <p style="margin-left: 10%">
          일주일 동안 총 평균 {Math.round(sum / 7)}mg을 섭취하였습니다.
        </p>
        <p style="margin-left: 10%">
          지난 주 대비 {data2.reduce((a, b) => a + b, 0) - sum}mg 마셨습니다.
        </p>
        <p style="margin-left: 10%">
          하루 권장량 대비 {data[6] - 150}mg 더 마셨습니다.
        </p>
      </div>
    </div>
  );
};

export default Button;
