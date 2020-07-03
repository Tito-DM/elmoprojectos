import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SeuProjecto from "./components/SeuProjecto/SeuProjecto";
import AboutUs from "./components/About/About";
import ProjectoList from "./components/ProJectos/ProjectoList";
import "./App.scss";
import Home from "../src/components/Home/Home";

function App(props) {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/seuprojecto">
					<SeuProjecto />
				</Route>
				<Route path="/about">
					<AboutUs />
				</Route>
				<Route path="/projectolist/:id" children={<ProjectoList />} />
			</Switch>
		</Router>
	);
}

export default App;
