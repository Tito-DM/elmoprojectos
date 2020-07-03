import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./NavBar.scss";
import M from "materialize-css";
import Logo from "../../asset/img/logo.jpg";
import capa from "../../asset/img/slideImg.jpg";
import pic from "../../asset/img/About/pic.jpg";
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
					<a href="#" data-target="slide-out" className="sidenav-trigger">
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
				<li>
					<div className="user-view">
						<div className="background">
							<img src={capa} alt="backar" style={{ width: "300px" }} />
						</div>
						<a href="#user">
							<img className="circle" alt="avatar" src={pic} />
						</a>
						<a href="#name">
							<span className="white-text name">John Doe</span>
						</a>
						<a href="#email">
							<span className="white-text email">jdandturk@gmail.com</span>
						</a>
					</div>
				</li>
				<li>
					<Link to="/" className="amber white-text darken-2">
						Home
					</Link>
				</li>
				<div className="divider"></div>
				<li>
					<Link to="/seuprojecto">Seu Projecto</Link>
				</li>
				<div className="divider"></div>
				<li>
					<Link to="/about">Sobre Nos</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavBar;
