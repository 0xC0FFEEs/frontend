import { Component } from "solid-js";
import style from '../css/Calculate.module.css'

const CoffeeWrap: Component = () => {
    return (
        <div class={style.list}>
    <div class={style.item}>
        <div class={style.img}></div>
        <div class={style.description}>
            <div class={style.name}>아메리카노</div>
            <div class={style.coffee}>180mg</div>
        </div>
        <div class={style.pmDiv}>
            <ul class={style.pm}>
                <li>+</li>
                <li>-</li>
            </ul>
        </div>
</div></div>);
};

export default CoffeeWrap;
