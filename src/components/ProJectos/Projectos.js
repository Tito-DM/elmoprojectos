import React, { Fragment } from "react";
import "./Projectos.scss";
const Projectos = ({ img, title, projecto }) => {
	return (
		<Fragment>
			<div className="container">
				<div className="col s12 m7">
					<div className="card horizontal medium">
						<div className="card-image">
							<img src={img} alt="card-img" />
						</div>
						<div className="card-stacked">
							<div className="card-content">
								<span className="card-title activator grey-text text-darken-4">
									{title}
								</span>
								<small>Tipologia: T3</small>
								<br />
								<small>Casa de Banhos: 3</small>
								<br />
								<small>Garagem: Sim</small>
							</div>
							<div className="card-action">
								<a href="!#">Interesado</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Projectos;
