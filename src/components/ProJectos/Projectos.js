import React, { Fragment } from "react";
import "./Projectos.scss";
const Projectos = ({ img, title, projecto }) => {
	return (
		<Fragment>
			<div className="container">
				<h6 className="text-slide cyan-text">Projectos a Venda</h6>
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
								Tipologia: T3
								<br />
								Modelo:
								<br />
								Garagem:
							</div>
							<div className="card-action">
								<a href="!#">This is a link</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Projectos;
