import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Projectos from "./Projectos";
import Img3 from "../../asset/img/House1.jpg";
import NavBar from "../NavBar/NavBar";
import FlootB from "../FloatButtom/FloatButtom";
import Footer from "../Footer/Footer";
import Pagination from "../Pagination/Pagination";

const ProjectoList = () => {
	let { id } = useParams();
	let proj;

	const [cards] = useState([
		{
			title: "Casa",
			id: "1",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		},

		{
			title: "Restourante",
			id: "2",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		},

		{
			title: "Casa",
			id: "3",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		},
		{
			title: "Card Title",
			id: "4",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		},
		{
			title: "Card Title",
			id: "5",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		},
		{
			title: "Card Title",
			id: "6",
			img: Img3,
			description:
				"I am a very simple card I am good at containing small bits of information. I am convenient because I require  little markup to use effectively"
		}
	]);

	if (id === "Casas") {
		proj = cards.map((card) => (
			<Projectos key={card.id} title={card.title} img={card.img} pro={id} />
		));
	} else if (id === "Escritório") {
		proj = cards.map((card) => (
			<Projectos title="Escritorio" img={card.img} pro={id} />
		));
	} else if (id === "Decoração") {
		proj = cards.map((card) => (
			<Projectos title="decoracao" img={card.img} pro={id} />
		));
	} else {
		proj = <div>ROUTE NOT FOUND</div>;
	}

	return (
		<div className="backg">
			<NavBar />
			{proj}
			<div className="container">
			<Pagination />
			</div>
			<FlootB />
			<Footer />
		</div>
	);
};

export default ProjectoList;
