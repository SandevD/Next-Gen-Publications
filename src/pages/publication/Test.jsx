import { Link } from "react-router-dom";
import "./background.css";
import logo from "../../assets/img/logo2.png";
import launch from "../../assets/img/lbackground.png";
import book from "../../assets/img/book.gif";

const Test = () => {
	return (
		<div
			className="launchPage flex justify-center items-center flex-col h-screen bg-cover bg-center"
			style={{
				background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${launch})`,
				backgroundSize: `cover`,
			}}
		>
			<div className="title flex flex-col justify-center items-center">
				<img
					className="h-24 md:h-52 xl:h-64 mt-20"
					src={logo}
					alt="NEXTGEN Publications"
				/>
				<img className="h-52 mt-8" src={book} alt="NEXTGEN Publications" />
				<Link to="/">
					<button
						type="button"
						className="mt-5 inline-flex items-center px-12 py-6 border-2 border-indigo-100 rounded-md hover:bg-indigo-100 bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 text-4xl text-white transition-all duration-500 font-bold hover:text-blue-800 opacity-90"
					>
						LAUNCH
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Test;
