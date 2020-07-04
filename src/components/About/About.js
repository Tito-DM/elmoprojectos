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
				
			
				<div className="container">
					
				<div className="card card-size">
				<figure className="contact_shape">
			     	<img className="contact_img" src={img} alt="Nelson tito" />
				</figure>
				<h6 className="hearder-text l-spacing">ArquiProjectista</h6>
				<p>
					<h5 className="l-spacing">Nelson Tito Nunu:</h5>
					Mergunhado no mundo da arte e da arquitectura Urbana. Bebendo das correntezas 
					para alcance das suas fases modulares no meio social.<br/>
					Os meus Projecos descrevem à personalidade do cliente ou do meio a projectar em cada compartinmento
					no meio à projectar, dando um destaque principal que é conforto e boa organização (a funcionalidade).
				</p>

				<p>
					Fundado em 2014, dedicado ao Projecto, consultoria em Arquitectura e Engeharia, à fiscalização de 
					obras e à inspecão de edifícios constribuimos na organização do nosso meio urbano e rural do nosso Pais. com
					uma Aquitectura popular (Nacional) e internacional com um conceito local a desenvolver, em linhas 
					personalizadas, com um propósito de alcançar os desejos dos nossos clientes.
				
				</p>
				<hgroup className="heading">
				<h6  >CRESCER No BEM FAZER, PARA DAR UM BEM ESTAR</h6><br/>
				&amp;
					<h6>BEM VIVER  AOS NOSSOS CLIENTES.</h6>
				</hgroup>
				
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
