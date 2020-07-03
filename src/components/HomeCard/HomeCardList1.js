import React, { useState, Fragment } from "react";
import HomeCard1 from "./HomeCard1";
import imgCasa from "../../asset/img/Cards/casa.jpg";
import imgeScritorio from "../../asset/img/Cards/escritorio.PNG";
import imgDecoracao from "../../asset/img/Cards/decoracao.jpg";
const HomeCardList1 = () => {
	const [card] = useState([
		{
			id: "1A",
			img: imgCasa,
			title: "Casas",
			description:
				"Notice the use of %PUBLIC_URL% in the tags above It will be replaced with the URL of the `public` folder during the build."
		},
		{
			id: "2B",
			img: imgeScritorio,
			title: "Escritório",
			description:
				"Notice the use of %PUBLIC_URL% in the tags above It will be replaced with the URL of the `public` folder during the build."
		},
		{
			id: "3C",
			img: imgDecoracao,
			title: "Decoração",
			description:
				"Notice the use of %PUBLIC_URL% in the tags above It will be replaced with the URL of the `public` folder during the build."
		}
	]);

	return (
		<Fragment>
			<div className="home-cards">
				{card.map((card) => (
					<HomeCard1
						key={card.id}
						img={card.img}
						title={card.title}
						description={card.description}
					/>
				))}
			</div>
		</Fragment>
	);
};

export default HomeCardList1;
