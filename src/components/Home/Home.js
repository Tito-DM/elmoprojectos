import React, { Fragment } from "react";
import NavBar from "../NavBar/NavBar";
import SlideShow from "../SlideShow/SlideShow";
import FloatButtom from "../FloatButtom/FloatButtom";
import HomeCardList1 from "../HomeCard/HomeCardList1";
import HomeCardList2 from "../HomeCard/HomeCardList2";
import ImageGallery from "../ImageGallery/ImageGallery";
import Footer from "../Footer/Footer";
import "./Home.scss";

const Home = () => {
	return (
		<Fragment>
			<NavBar />
			<div className="slide-container">
				<SlideShow auto={true} />
			</div>

			<div className="container">
				<HomeCardList1 />
				<ImageGallery />
				<HomeCardList2 />
			</div>
			<FloatButtom />
			<Footer />
		</Fragment>
	);
};

export default Home;
