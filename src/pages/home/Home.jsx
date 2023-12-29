import React from "react";
import AnimatedPageTwo from "../../components/AnimatedPageTwo";
import Main from "../../components/home/Main";
import MobileSlider from "../../components/home/MobileSlider";
import MobileSliderTwo from "../../components/home/MobileSliderTwo";
import Slider from "../../components/home/Slider";
import SliderTwo from "../../components/home/SliderTwo";
import Background from "./../../components/home/Background";
import Text from "./../../components/home/Text";

const Home = () => {
	return (
		<div className="bg-white">
			<AnimatedPageTwo>
				{/* <Background /> */}
				<div className="hidden sm:inline ">
					{/* <Slider /> */}
					<SliderTwo />
				</div>
				<div className=" sm:hidden z-50">
					<MobileSliderTwo />
				</div>
				<Main />
			</AnimatedPageTwo>
		</div>
	);
};

export default Home;
