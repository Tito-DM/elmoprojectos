import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./NavBar.scss";
import M from "materialize-css";
import { Link } from "react-router-dom";
const NavBar = () => {
	useEffect(() => {
		var elems = document.querySelectorAll(".sidenav");
		M.Sidenav.init(elems);
	}, []);
	return (
		<div className="navbar-fixed">
			<nav>
				<div className="nav-wrapper cyan darken-3 ">
					<a href="#!" className="brand-logo">
						Logo
					</a>
					<a href="!#" data-target="slide-out" className="sidenav-trigger">
						<i className="material-icons">menu</i>
					</a>
					<ul className="right hide-on-med-and-down">
						<li>
							<Link to="/" className="amber darken-2">
								Home
							</Link>
						</li>
						<li>
							<Link to="/seuprojecto">Seu Projecto</Link>
						</li>
						<li>
							<Link to="/about">Sobre Nos</Link>
						</li>
						
					</ul>
				</div>
			</nav>
			
			<ul id="slide-out" className="sidenav">
			<a href="https://lookmovie.ag/">test</a>
				
			
			</ul>
			
		</div>
	);
};

export default NavBar;
