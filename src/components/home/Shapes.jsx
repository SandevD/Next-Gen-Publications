import React, { useState, useEffect } from "react";
import img1 from "../../image/worm-1.png";
import img2 from "../../image/worm-2.png";
import img3 from "../../image/worm-3.png";
import img4 from "../../image/worm-4.png";
import img5 from "../../image/worm-5.png";
import img6 from "../../image/worm-6.png";
import Like from "../../image/Like.png";

const Shapes = () => {
	return (
		<div className="min-h-screen">
			<div className="grid grid-cols-6 grid-rows-2 gap-4 text-center px-48 absolute w-full mx-auto">
				<div className="mx-auto">
					<img src={img1} alt="bubble" className="w-[50px] h-[50px] " />
				</div>
				<div className="mx-auto">
					<img src={img1} alt="bubble" className="w-[50px] h-[50px] " />
				</div>
				<div className="mx-auto">
					<img src={img1} alt="bubble" className="w-[50px] h-[50px] " />
				</div>
				<div className="mx-auto">
					<img src={img1} alt="bubble" className="w-[50px] h-[50px] " />
				</div>
				<div className="mx-auto">
					<img src={img1} alt="bubble" className="w-[50px] h-[50px] " />
				</div>
				<div className="mx-auto">
					<img src={img1} alt="bubble" className="w-[50px] h-[50px] " />
				</div>
			</div>
		</div>
	);
};

export default Shapes;
