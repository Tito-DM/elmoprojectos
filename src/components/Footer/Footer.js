import React, { Fragment } from "react";
import "./Footer.scss";
const Footer = () => {
	return (
		<Fragment>
			<footer className="page-footer cyan darken-3 footer-fix">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							<h5 className="white-text contact-text">Contactos</h5>
							<div className="row">
								<div className="col s1">
									<i className=" material-icons icon">email</i>
								</div>
								<div className="col s1"> Nelsontito@gmail.com</div>
							</div>
							<div className="row">
								<div className="col s1">
									<i className=" material-icons icon">local_phone</i>
								</div>
								<div className="col s1"> 22200000</div>
							</div>

							<p className="grey-text text-lighten-4">
								Nao esite em contactar para saber mais......
							</p>
						</div>
						<div className="col l4 offset-l2 s12">
							<ul>
								<li>
									<a className="grey-text text-lighten-3" href="#!">
										Home
									</a>
								</li>
								<li>
									<a className="grey-text text-lighten-3" href="#!">
										Seu Projecto
									</a>
								</li>
								<li>
									<a className="grey-text text-lighten-3" href="#!">
										Sobre nos
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">devP© 2020 Copyright </div>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
