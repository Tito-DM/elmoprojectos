import React, { useEffect, useState, Fragment,useRef} from "react";
import "./SlideShow.scss";

const SlideShow = ({ auto }) => {
	let slides;
	const [SlideShow] = useState([
		{
			id: 1,
			title: "Projectando um Futuro Melhor e saudavel",
			subTitle: "Para Ti e a Sua Familia",
			clss: "current"
		},
		{
			id: 2,
			title: "Projectos Residências",
			subTitle: "	Segurança & Bem-Estar"
		},
		{
			id: 3,
			title: "Design Interno",
			subTitle: "Para Ti e a Sua Familia"
		},
		{
			id: 4,
			title: "Projectos Comerciais",
			subTitle: "Lazer & Bem-Estar"
		}
	]);

	const nextSlide = () => {
		const current = document.querySelector(".current");
		current.classList.remove("current");

		if (current.nextElementSibling) {
			current.nextElementSibling.classList.add("current");
		} else {
			slides[0].classList.add("current");
		}
		setTimeout(() => current.classList.remove("current"));
	};

	const prevSlide = () => {
		const current = document.querySelector(".current");
		current.classList.remove("current");
		if (current.previousElementSibling) {
			current.previousElementSibling.classList.add("current");
		} else {
			slides[slides.length - 1].classList.add("current");
		}
		setTimeout(() => current.classList.remove("current"));
	};

	useEffect(() => {
		slides = document.querySelectorAll(".slide");
		const interval = 5000;
		if (auto) {
			const timeout = setInterval(nextSlide, interval);
			return () => {
				clearTimeout(timeout);
			};
		}
		 // eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			<div className="slider">
				{SlideShow.map((slide) => (
					<div className={`slide ${slide.clss}`} key={slide.id}>
						<div className={`content${slide.id}`}>
							<h3 className="light grey-text text-lighten-3 slide-text">
								{slide.title}
							</h3>
							<h5 className="light grey-text text-lighten-3 slide-text">
								{slide.subTitle}
							</h5>
						</div>
					</div>
				))}
			</div>

			<div className="button">
				<button id="prev" onClick={prevSlide}>
					<i className="fas fa-arrow-left"></i>
				</button>

				<button id="next" onClick={nextSlide}>
					<i className="fas fa-arrow-right"></i>
				</button>
			</div>
		</Fragment>
	);
};

export default SlideShow;
