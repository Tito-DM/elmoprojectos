import React, { Fragment } from "react";
import "./About.scss";
import img from "../../asset/img/About/pic.jpg";
import NavBar from "../NavBar/NavBar";
import FloatB from "../FloatButtom/FloatButtom";
import Footer from "../Footer/Footer";
const AboutUs = () => {
	return (
		<Fragment>
			<div className="section-contact">
				<NavBar />

				<div className="container"></div>
				<div className="row">
					<div className="contact">
						<figure className="contact_shape">
							<img className="contact_img" src={img} alt="Nelson tito" />
							<figcaption className="contact_caption center white-text lighten-3">
								Nelson Tito
							</figcaption>
						</figure>

						<div className="contact_text">
							<p>
								Formado em Arquitecura na Universidade Agostinho net, realizou
								varios projecto para differentes categorias nomiada mente de
								casa, estapocos de lazer e outros
							</p>
						</div>
						<hr />
						<div></div>
					</div>
				</div>
				<div className="espaco"></div>
				<div className="div-space"></div>
				<FloatB />
				<Footer />
			</div>
		</Fragment>
	);
};

export default AboutUs;
