import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";

const FloatButtom = () => {
	useEffect(() => {
		var elems = document.querySelectorAll(".fixed-action-btn");
		M.FloatingActionButton.init(elems);
	}, []);

	return (
		<div className="fixed-action-btn ">
			<Link to='#' className="btn-floating btn-large red pulse">
				<i className="large material-icons">add</i>
			</Link>
			<ul>
				<li>
					<Link to='https://react-cn.github.io/react/tips/if-else-in-JSX.html' className="btn-floating green">
						<i className="material-icons">location_on</i>
					</Link>
				</li>
				<li>
					<Link to='https://react-cn.github.io/react/tips/if-else-in-JSX.html' className="btn-floating red">
						<i className="fab fa-youtube"></i>
					</Link>
				</li>
				<li>
					<a href='https://www.facebook.com/elmoprojectos.arqdesign' className="btn-floating blue"  target="_blank">
						<i className="fab fa-facebook-f"></i>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default FloatButtom;
