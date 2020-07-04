import React, { Fragment, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import M from "materialize-css/dist/js/materialize.min.js";
import FloatB from "../FloatButtom/FloatButtom";
import Footer from "../Footer/Footer";
import "./SeuProjecto.scss";
const SeuProjecto = () => {
	useEffect(() => {
		M.AutoInit();
	}, []);

	return (
		<Fragment>
			<NavBar />
			<div className="container">
				<div className="selector">
					<form className="col s12" id="form_projecto ">
						<div className="row">
							<div className="input-field col s12">
								<select>
									<option value="">Escolhe o seu Projecto</option>
									<option value="1">Casa</option>
									<option value="2">Condomino</option>
									<option value="3">Escritorio</option>
								</select>
								<label>Seu Projecto</label>
							</div>

							<div className="input-field col s6">
								<input id="first_name" type="text" className="validate" />
								<label htmlFor="first_name">Nome</label>
							</div>
							<div className="input-field col s6">
								<input id="last_name" type="text" className="validate" />
								<label htmlFor="last_name">Apelido</label>
							</div>

							<div className="input-field col s12">
								<input id="email" type="email" className="validate" />
								<label htmlFor="email">Email</label>
							</div>
						</div>
						<div className="input-field col s12">
							<textarea
								id="textarea1"
								className="materialize-textarea"
							></textarea>
							<label htmlFor="textarea1">Detalhes</label>
						</div>
						<button className="btn btm-m">Enviar</button>
					</form>
				</div>
			</div>
			<div className="espaco"></div>
			<FloatB />
			<div className="separador"></div>
			<Footer />
		</Fragment>
	);
};

export default SeuProjecto;
