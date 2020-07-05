import React, { useEffect,Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./NavBar.scss";
import M from "materialize-css";
import logo from "../../asset/img/logo.jpg";
import { Link } from "react-router-dom";
const NavBar = () => {
	useEffect(() => {
		var elems = document.querySelectorAll(".sidenav");
		M.Sidenav.init(elems);
	}, []);
	return (
		
		<Fragment>
		<div className="navbar-fixed">
			<nav>
				<div className="nav-wrapper cyan darken-3 ">
					<Link to ="/" className="brand-logo ">
						<img src={logo} alt="LOGO" style={{width:"120px", height:"120px" ,borderRadius:"50%"}} className="logo"/>
					</Link>
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
		</div>
		
		<ul id="slide-out" className="sidenav ambar">
			<li>
			<Link to="/" className="amber darken-2 fix-margin">
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
		</Fragment>
	);
};

export default NavBar;
