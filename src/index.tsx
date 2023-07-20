import { render } from "solid-js/web";
import { Router, Route, Routes } from "@solidjs/router";
import "./global.css";
import Main from "./pages/Main";
import Statistic from "./pages/Statistic";
import Calculate from "./pages/Calculate";
import Startup from "./pages/Startup";
import Grapher from "./pages/Grapher";

render(
	() => (
		<Router>
			<Routes>
				<Route path="/" component={Main} />
				<Route path="/statistic" component={Statistic} />
				<Route path="/calculate" component={Calculate} />
				<Route path="/startup" component={Startup} />
				<Route path="/grapher" component={Grapher} />
			</Routes>
		</Router>
	),
	document.getElementById("root") as HTMLElement
);
