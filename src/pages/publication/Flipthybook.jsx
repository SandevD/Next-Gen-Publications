import React, { useEffect, useState } from "react";
import axios from "axios";
import HTMLFlipBook from "react-pageflip";
import image1 from "../../image/bg-1.jpg";
import image2 from "../../image/bg-2.png";
import image3 from "../../image/bg-3.png";
import image4 from "../../image/bg-4.png";
import Pdf from "../../assets/2.pdf";

const Flipthybook = (props) => {
	const [file, setFile] = useState();
	const [loading, setLoading] = useState(true);

	const FetchBookFile = async () => {
		const res = await axios.get(window.host + `/api/getbookFile/${id}-1`);
		setFile(window.host + `/` + res.data);
		console.log(res.data);
		setLoading(false);
	};

	useEffect(() => {
		FetchBookFile();
	}, []);

	return (
		<HTMLFlipBook width={300} height={500}>
			<div className="demoPage">
				<img
					src={file}
					alt="Page 1"
				/>
			</div>
			<div className="demoPage">
				<img
					src="https://images.unsplash.com/photo-1682511366293-c34ecd291e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					alt="Page 2"
				/>
			</div>
			<div className="demoPage">
				<img
					src="https://plus.unsplash.com/premium_photo-1676409608965-665e89ba22a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					alt="Page 3"
				/>
			</div>
			<div className="demoPage">
				<img
					src="https://images.unsplash.com/photo-1643175836446-0d66848d9717?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					alt="Page 4"
				/>
			</div>
		</HTMLFlipBook>
	);
};

export default Flipthybook;
