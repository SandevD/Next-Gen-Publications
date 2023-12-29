import React from "react";
import { motion } from "framer-motion";

const animationstwo = {
	initial: { opacity: 0, y: 100 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -100 },
};

const AnimatedPageTwo = ({children}) => {
	return (
		<motion.div
			variants={animationstwo}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			{children}
		</motion.div>
	);
};

export default AnimatedPageTwo;
