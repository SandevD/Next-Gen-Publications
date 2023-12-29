import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import { useLocation } from "react-router-dom";
import Pdf from "../../assets/2.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

let config = {
	headers: {
		"Content-Type": "Authorization, X-Requested-With",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
	},
};
let headers = new Headers();

const width = 550;
const height = 725;

const Page = React.forwardRef(({ pageNumber }, ref) => {
	return (
		<div ref={ref}>
			<ReactPdfPage pageNumber={pageNumber} width={width} />
		</div>
	);
});

const FlipBook = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [file, setFile] = useState();
	const [fileTwo, setFileTwo] = useState();
	const [fileThree, setFileThree] = useState();
	const [fileFour, setFileFour] = useState();
	const [loading, setLoading] = useState(true);

	const FetchBookFile = async () => {
		const res = await axios.get(window.host + `/api/getbookFile/${id}`);
		setFile(window.host +  res.data + `-1.jpg`);
		setFileTwo(window.host +  res.data + `-2.jpg`);
		setFileThree(window.host +  res.data + `-3.jpg`);
		setFileFour(window.host +  res.data + `-4.jpg`);
		setLoading(false);
	};
	useEffect(() => {
		FetchBookFile();
	}, []);
	return (
		<div className="flex items-center justify-center mx-auto pb-0 md:pb-0 pt-24 md:pt-32 min-w-screen">
			{loading ? (
				<div role="status">
					<svg
						aria-hidden="true"
						className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
						viewBox="0 0 100 101"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
					<span className="sr-only">Loading...</span>

					{/* <div>
						<img
							src={"http://localhost:8000/assets/images/book/main/1.jpg"}
							alt=""
						/>
					</div> */}
				</div>
			) : (
				<div className="">
					<div className="mx-8 md:mx-24 px-2 py-2 text-center bg-orange-400 opacity-80 text-white rounded-md min-w-screen">
						<p className="">
							Please click on the right and left sides of the document to move back
							and forth.
						</p>
					</div>
					<div className="flex items-center justify-center mx-auto pt-8 min-w-screen">
						{/* <Document file={file}>
							<HTMLFlipBook width={width} height={height}>
								<Page pageNumber={1} />
								<Page pageNumber={2} />
								<Page pageNumber={3} />
								<Page pageNumber={4} />
							</HTMLFlipBook>
						</Document> */}
						<HTMLFlipBook width={350} height={495} maxShadowOpacity={0.25} size={"stretch"}>
							<div className="demoPage">
								<img src={file} alt="Page 1" height="100%" width="100%"/>
							</div>
							<div className="demoPage">
								<img
									src={fileTwo}
									alt="Page 2"
									height="100%"
									width="100%"
								/>
							</div>
							<div className="demoPage">
								<img
									src={fileThree}
									alt="Page 3"
									height="100%"
									width="100%"
								/>
							</div>
							<div className="demoPage">
								<img
									src={fileFour}
									alt="Page 4"
									height="100%"
									width="100%"
								/>
							</div>
						</HTMLFlipBook>
					</div>
				</div>
			)}
		</div>
	);
};

export default FlipBook;
