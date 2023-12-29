import Phone from "../../assets/img/screen.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import Likes from "./Likes";
import book from "../../assets/img/pngbook.png";
import Mission from "../about/Mission";

const MainRep = () => {
	const [phoneTop, phoneSetTop] = useState(true);
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 900 ? phoneSetTop(false) : phoneSetTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [phoneTop]);

	const [bottom, setBottom] = useState(true);
	useEffect(() => {
		const scrollHandler = (e) => {
			const scrollable =
				document.documentElement.scrollHeight - window.innerHeight;
			const scrolled = window.scrollY;
			let scrolledRounded = Math.round(scrolled);

			if (scrolledRounded === scrollable) {
				setBottom(false);
			} else {
				setBottom(true);
			}
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [bottom]);
	return (
		<div className="pb-12 mainView" id="phoneView">
			<div className="pt-24 mx-auto max-w-7xl px-4  sm:px-6 flex flex-col justify-center items-center">
				<div className="text-center">
					<span className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
					</span>
				</div>
			</div>
		</div>
	);
};

export default MainRep;
