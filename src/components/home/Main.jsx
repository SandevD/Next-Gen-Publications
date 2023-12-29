import Phone from "../../assets/img/screen.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import Likes from "./Likes";
import book from "../../assets/img/pngbook.png";
import cs from "../../assets/img/cs.png";
import Mission from "../about/Mission";
import Hero from "./Hero";
import $ from "jquery";

const files = [
	{
		id: 1,
		title: "IMG_4985.HEIC",
		size: "3.9 MB",
		source:
			"https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 2,
		title: "IMG_4985.HEIC",
		size: "3.9 MB",
		source:
			"https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 3,
		title: "IMG_4985.HEIC",
		size: "3.9 MB",
		source:
			"https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 4,
		title: "IMG_4985.HEIC",
		size: "3.9 MB",
		source:
			"https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 5,
		title: "IMG_4985.HEIC",
		size: "3.9 MB",
		source:
			"https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
	{
		id: 6,
		title: "IMG_4985.HEIC",
		size: "3.9 MB",
		source:
			"https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
	},
];

const Main = () => {
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
			const scrollableSticky =
				document.documentElement.scrollHeight - window.innerHeight - 200;
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
	const scrolled = window.scrollY;
	const [middle, setMiddle] = useState(true);
	const [mobileMiddle, setMobileMiddle] = useState(true);
	useEffect(() => {
		const scrollHandler = (e) => {
			const scrollable =
				document.documentElement.scrollHeight - window.innerHeight - 200;
			const scrolled = window.scrollY;
			const scrollableSticky =
				document.documentElement.scrollHeight - window.innerHeight - 200;
			// console.log("a" + window.scrollY);
			let scrolledRounded = Math.round(scrollableSticky);

			if (scrolled > 1800) {
				setMiddle(true);
			} else {
				setMiddle(false);
			}
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [middle]);

	//mobileMiddle

	useEffect(() => {
		const scrollHandler = (e) => {
			const scrollable =
				document.documentElement.scrollHeight - window.innerHeight - 200;
			const scrolled = window.scrollY;
			const scrollableSticky =
				document.documentElement.scrollHeight - window.innerHeight - 200;
			// console.log("a" + window.scrollY);
			let scrolledRounded = Math.round(scrollableSticky);

			if (scrolled > 1200) {
				setMobileMiddle(true);
			} else {
				setMobileMiddle(false);
			}
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [middle]);

	return (
		<div className="pb-12 mainView" id="phoneView">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col justify-center items-center">
				<div className="text-center">
					<span className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
						{/* <h2 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 tracking-wide uppercase">
              Nextgen Publications Presents
            </h2> */}
						<span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 shine pb-3 pt-12">
							The Next Generation of Reading
						</span>
						{/* <span className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2 shine">
              DIGITAL LIBRARY
            </span> */}
					</span>
					<p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl px-5"></p>
				</div>
			</div>
			<div
				className={`w-full mx-auto sticky mt-5 
        ${mobileMiddle && "opacity-0 transition-all duration-500 ease-in-out"}
        ${
					!mobileMiddle && "opacity-100 transition-all duration-500 ease-in-out"
				} 
        ${middle && "md:opacity-0 transition-all duration-500 ease-in-out"}
        ${!middle && "md:opacity-100 transition-all duration-500 ease-in-out"}
          top-24 flex justify-center items center z-[1]`}
			>
				<div className="absolute mt-2 lg:mt-10">
					<img
						src={Phone}
						alt="Logo"
						className={`w-[250px] transition-width duration-500 ease-in-out ${
							!phoneTop && "w-[450px]"
						} ${!bottom && "w-[300px]"}`}
					/>
				</div>
				<div className="w-full flex justify-center align-center">
					<div className="absolute  mt-2 lg:mt-10">
						<div className="flex flex-col">
							<span className="pt-12">
								<img
									src={book}
									alt="book"
									className={`w-[150px] h-[200px] transition duration-500 ${
										!phoneTop && "opacity-0"
									}`}
								/>
							</span>
						</div>
					</div>

					<div
						className={`absolute max-w-sm  px-24 sm:px-20 flex justify-center items-center pt-20 sm:pt-24 transition duration-500 ease-in-out ${
							phoneTop
								? "opacity-0"
								: "opacity-100" && bottom
								? "opacity-100"
								: "opacity-0"
						} `}
					>
						<div id="scrollBox" className="h-80 sm:h-96 lg:mt-5">
							<div className="mt-8 gap-2">
								<p className="font-poppins mb-2">
									“It is not enough to simply teach children to read; we have to
									give them something worth reading. Something that will stretch
									their imaginations- something that will help them make sense
									of their own lives and encourage them to reach out toward
									people whose lives are quite different from their own.”
								</p>
								<div>
									{" "}
									<span className="flex items-center justify-center font-bold">
										{" "}
										― Katherine Paterson
									</span>
								</div>
							</div>
						</div>
					</div>
					<div
						className={`absolute p-12 transition duration-500 opacity-0 mt-2 lg:mt-10 ${
							!bottom && "opacity-100 lg:mt-10"
						}`}
					>
						<Link to="/publication">
							<div className="flex justify-center items-center w-[110px] h-[110px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] cursor-pointer gelatine mt-10">
								<div className="flex justify-center items-center flex-col bg-white w-[100%] h-[100%] rounded-full ">
									<div className="flex justify-center items-start flex-row font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
										<p className="font-poppins font-medium text-[18px] leading-[23.4px] mr-2 flex justify-between">
											<span className="">Get&nbsp;&#x27B9;</span>
										</p>
									</div>
									<div className="flex justify-center items-start flex-row font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
										<p className="font-poppins font-medium text-[18px] leading-[23.4px]">
											<span className="">Started</span>
										</p>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center w-full pt-12"></div>
			<div className="pt-24">
				<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
					<Link to="/publication">
						<div className="text-center bounce2">
							<h2
								className={`text-base font-semibold text-indigo-600 tracking-wide uppercase ${
									!phoneTop && "hidden"
								}`}
							>
								&darr;
							</h2>
							<p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"></p>
							<p className="max-w-xl mt-5 mx-auto text-xl text-gray-500"></p>
						</div>
					</Link>
				</div>
			</div>
			<div className="h-96"></div>
			<div className="hidden md:inline">
				<Likes />
			</div>
			<Hero />
		</div>
	);
};

export default Main;
