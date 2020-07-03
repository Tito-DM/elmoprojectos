import React, { useState, Fragment } from "react";
import HomeCard2 from "./HomeCard2";
import imgCondominio from "../../asset/img/Cards/Condominio.jpg";
import imgeresort from "../../asset/img/Cards/resort.jpg";
import imgcomercio from "../../asset/img/Cards/comercio.jpg";
const HomeCardList2 = () => {
	const [card] = useState([
		
		{
			id: "4D",
			img: imgCondominio,
			title: "Condomínio",
			description: "Notice the use of %PUBLIC_URL% in the tags above It will be replaced with the URL of the `public` folder during the build."
        },
        
		{
			id: "5E",
			img: imgeresort,
			title: "Resort",
			description:"Notice the use of %PUBLIC_URL% in the tags above It will be replaced with the URL of the `public` folder during the build."
		},
		{
			id: "6F",
			img: imgcomercio,
			title: "Projetos Comerciais",
			description: "Notice the use of %PUBLIC_URL% in the tags above It will be replaced with the URL of the `public` folder during the build."
		}
	]);

	return (
		<Fragment>
			<div className="home-cards">
				{card.map((card) => (
					<HomeCard2
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

export default HomeCardList2;
