import React, { useState, useEffect } from "react";
import { useParallax } from "react-scroll-parallax";
import bubble from "../../image/pngwing.com.png";
import Heart from "../../image/Heart.png";
import Like from "../../image/Like.png";
import Emoji from "../../image/Emoji.png";
import EmojiOne from "../../image/Emoji_One.png";
import EmojiTwo from "../../image/Emoji_Two.png";

const Likes = () => {
	const MoveOne = useParallax({
		easing: "easeOutQuad",
		translateX: [0, 100],
	});
	const MoveTwo = useParallax({
		easing: "easeOutQuad",
		translateX: [0, -100],
	});
	const MoveThree = useParallax({
		easing: "easeOutQuad",
		translateX: [0, 100],
	});
	const MoveFour = useParallax({
		easing: "easeOutQuad",
		translateX: [0, -100],
	});
	const MoveFive = useParallax({
		easing: "easeOutQuad",
		translateX: [0, -100],
	});
	const MoveSix = useParallax({
		easing: "easeOutQuad",
		translateX: [0, 100],
	});
	const MoveSeven = useParallax({
		easing: "easeOutQuad",
		translateX: [0, -100],
	});
	const MoveEight = useParallax({
		easing: "easeOutQuad",
		translateX: [0, 100],
	});
	const RotateOne = useParallax({
		rotate: [0, 360],
	});
	const RotateTwo = useParallax({
		rotate: [0, 360],
	});
	const RotateThree = useParallax({
		rotate: [0, -360],
	});
	const RotateFour = useParallax({
		rotate: [0, -360],
	});
	const RotateFive = useParallax({
		rotate: [0, -360],
	});
	const RotateSix = useParallax({
		rotate: [0, 360],
	});
	return (
		<div>
			<div className="px-20 lg:px-48">
				<div className="grid grid-cols-6 grid-rows-2 gap-4 text-center px-48">
					<div className="mx-auto" ref={MoveOne.ref}>
						<img src={Heart} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
					<div className="mx-auto"></div>
					<div className="mx-auto"></div>
					<div className="mx-auto"></div>
					<div className="mx-auto"></div>
					<div className="mx-auto" ref={MoveTwo.ref}>
						<img src={Like} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
				</div>
				<div className="grid grid-cols-6 grid-rows-2 gap-4 text-center px-48">
					<div className="mx-auto"></div>
					<div className="mx-auto" ref={RotateThree.ref}>
						<img src={Heart} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
					<div className="mx-auto"></div>
					<div className="mx-auto"></div>
					<div className="mx-auto" ref={RotateTwo.ref}>
						<img src={Like} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
					<div className="mx-auto"></div>
				</div>
				<div className="grid grid-cols-6 grid-rows-2 gap-4 text-center px-48">
					<div className="mx-auto" ref={MoveFive.ref}>
						<img src={Heart} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
					<div className="mx-auto"></div>
					<div className="mx-auto"></div>
					<div className="mx-auto"></div>
					<div className="mx-auto"></div>
					<div className="mx-auto" ref={MoveSix.ref}>
						<img src={Like} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
				</div>
				<div className="grid grid-cols-6 grid-rows-2 gap-4 text-center px-48">
					<div className="mx-auto"></div>
					<div className="mx-auto" ref={RotateOne.ref}>
						<img src={Heart} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
					<div className="mx-auto"></div>
					<div className="mx-auto"></div>
					<div className="mx-auto" ref={RotateFour.ref}>
						<img src={Like} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
					<div className="mx-auto"></div>
				</div>
				<div className="grid grid-cols-6 grid-rows-2 gap-4 text-center px-48">
					<div className="mx-auto" ref={MoveThree.ref}>
						<img src={Heart} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
					<div className="mx-auto"></div>
					<div className="mx-auto"></div>
					<div className="mx-auto"></div>
					<div className="mx-auto"></div>
					<div className="mx-auto" ref={MoveFour.ref}>
						<img src={Like} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
				</div>
				<div className="grid grid-cols-6 grid-rows-2 gap-4 text-center px-48">
					<div className="mx-auto"></div>
					<div className="mx-auto" ref={RotateFive.ref}>
						<img src={Heart} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
					<div className="mx-auto"></div>
					<div className="mx-auto"></div>
					<div className="mx-auto" ref={RotateSix.ref}>
						<img src={Like} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
					<div className="mx-auto"></div>
				</div>
				<div className="grid grid-cols-6 grid-rows-2 gap-4 text-center px-48">
					<div className="mx-auto" ref={MoveSeven.ref}>
						<img src={Heart} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
					<div className="mx-auto"></div>
					<div className="mx-auto"></div>
					<div className="mx-auto"></div>
					<div className="mx-auto"></div>
					<div className="mx-auto" ref={MoveEight.ref}>
						<img src={Like} alt="bubble" className="w-[50px] h-[50px] " />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Likes;
