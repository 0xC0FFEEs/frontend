import LeftArrowImage from '../assets/images/leftarrow.svg';
import { Component } from 'solid-js';

const LeftArrow: Component = () => {
	return (
        <a href="/" style="margin: 1rem"><img src={LeftArrowImage}></img></a>
	);
};

export default LeftArrow;
