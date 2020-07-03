import React from "react";
import "./Pagination.scss";
const Pagination = () => {
	return (
        <ul className="pagination pg cyan darken-3">
        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
        <li className="active amber"><a href="#!">1</a></li>
        <li className="waves-effect"><a href="#!">2</a></li>
        <li className="waves-effect"><a href="#!">3</a></li>
        <li className="waves-effect"><a href="#!">4</a></li>
        <li className="waves-effect"><a href="#!">5</a></li>
        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
      </ul>
	);
};

export default Pagination;
