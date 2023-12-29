import React, { useEffect } from "react";
import { useState } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Combobox } from "@headlessui/react";
import AnimatedPage from "../../components/AnimatedPage";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import BookComponent from "../../components/publication/Model";
import Pagination from "react-js-pagination";
import { FaSadCry } from "react-icons/fa";

const Publication2 = () => {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [categories, setCategories] = useState([]);
	const [grades, setGrades] = useState([]);
	const [id, setId] = useState();
	const [searchTitle, setSearchTitle] = useState("");
	const [searchCategory, setSearchCategory] = useState("");
	const [searchGrade, setSearchGrade] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [state, setState] = useState("");
	const [totalPage, settotalPage] = useState(0);

	useEffect(() => {
		FetchBooks();
		fetchCategories();
		fetchGrades();
	}, []);

	const FetchBooks = async () => {
		const res = await axios.get(window.host + `/api/getbooks/`);
		setBooks(res.data.data);
		setLoading(false);
	};

	const fetchCategories = async () => {
		setLoading(true);
		const res = await axios.get(window.host + `/api/categories`);
		setCategories(res.data);
		setLoading(false);
	};

	const fetchGrades = async () => {
		setLoading(true);
		const res = await axios.get(window.host + `/api/grades`);
		setGrades(res.data);
		setLoading(false);
	};

	const reFetchBooks = async (pageNumber = 1) => {
		const formData = new FormData();
		formData.append("title", searchTitle);
		formData.append("category", searchCategory);
		formData.append("grade", searchGrade);

		await axios
			.post(window.host + `/api/searchBooks/?page=${pageNumber}`, formData)
			.then((data) => {
				setBooks(data.data.data);
				settotalPage(data.data.total);
				setState({ activePage: pageNumber });
			});
	};

	useEffect(() => {
		reFetchBooks();
	}, [searchCategory, searchGrade]);

	const handleClick = () => {
		setShowModal(true);
	};

	return (
		<AnimatedPage>
			<div className="w-full mx-auto max-w-6xl pt-28 md:pt-36">
				<div className="  sm:gap-4 sm:items-start  sm:pt-5">
					<div className="flex items-center justify-center flex-col gap-4 xs:flex-row md:gap-8 mx-5 ">
						<div className="w-full">
							<div className="w-full">
								<input
									type="text"
									name="name"
									id="name"
									className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full md:text-lg sm:text-md border-gray-300 rounded-md"
									placeholder="Enter Book Title"
									onChange={(e) => reFetchBooks(setSearchTitle(e.target.value))}
								/>
							</div>
						</div>
						<div className="mt-1 w-full sm:mt-0 sm:col-span-2">
							<select
								id="category"
								name="category"
								onChange={(e) => {
									setSearchCategory(e.target.value);
								}}
								value={searchCategory}
								autoComplete="category-name"
								className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm md:text-lg sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
							>
								<option value="">All Categories</option>
								{categories.map((item) => (
									<option value={item.id} key={item.id}>
										{item.name}
									</option>
								))}
							</select>
						</div>
						<div className="mt-1 sm:mt-0 sm:col-span-2 w-full">
							<select
								id="country"
								name="country"
								autoComplete="country-name"
								onChange={(e) => {
									setSearchGrade(e.target.value);
								}}
								value={searchGrade}
								className="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full md:text-lg shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
							>
								<option value="">All Grades</option>
								{grades.map((item) => (
									<option value={item.id} key={item.id}>
										{item.name}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<AnimatePresence>
					{loading ? (
						<div className="space-y-5 py-12 lg:py-12 px-6 lg:px-0 flex flex-col justify-center">
							<ul
								role="list"
								className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
							>
								<li></li>
								<li className="col-span-1 flex shadow-sm rounded-md">
									<div className="flex-shrink-0 flex items-center justify-center w-16 bg-orange-500 text-white text-2xl font-medium rounded-l-md">
										<FaSadCry />
									</div>
									<div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
										<div className="flex-1 px-4 py-2 text-sm truncate">
											<a
												href="#"
												className="text-gray-900 font-medium hover:text-gray-600"
											>
												No Books Available
											</a>
											<p className="text-gray-500">
												Checking For New Updates...
											</p>
										</div>
										<div className="flex-shrink-0 pr-2">
											<button
												type="button"
												className="w-9 h-9 mt-1 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
											>
												<span className="sr-only">Open options</span>
												<svg
													aria-hidden="true"
													className="inline w-9 h-9 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600"
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
											</button>
										</div>
									</div>
								</li>
								<li></li>
							</ul>
						</div>
					) : (
						<div className="h-full max-w-6xl mx-auto z[1] cursor-pointer">
							{books.length > 0 ? (
								<div className="columns-1 sm:columns-2 md:columns-4 space-y-5 py-12 lg:py-12 px-6 lg:px-0">
									{books.map((item) => (
										<motion.div
											style={{ overflow: "hidden" }}
											layout
											className="w-full"
											key={item.id}
											initial={{ transform: "scale(0)" }}
											animate={{ transform: "scale(1)" }}
											exit={{ transform: "scale(0)" }}
										>
											<div
												onClick={() => handleClick(setId(item.id))}
												className="relative transition duration-500 hover:scale-95"
											>
												<motion.img
													className="w-full aspect-video transition duration-500 hover:opacity-80 rounded-xl"
													src={window.host + `${item.image}`}
												/>
												<p className="bottom-0 px-5 py-3 text-md font-semibold text-center bg-white opacity-90  w-full">
													{item.title}
												</p>
												<p className="absolute top-0 text-right py-3 text-md opacity-70 w-full">
													<span className="bg-gradient-to-r from-orange-400 to-pink-500 p-4 rounded-tr-2xl rounded-bl-md text-white">
														{item.grades.name}
													</span>
												</p>
											</div>
										</motion.div>
									))}
									{showModal && (
										<BookComponent setOpen={setShowModal} id={id} />
									)}
								</div>
							) : (
								<div className="space-y-5 py-12 lg:py-12 px-6 lg:px-0 flex flex-col justify-center">
									<ul
										role="list"
										className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
									>
										<li></li>
										<li className="col-span-1 flex shadow-sm rounded-md">
											<div className="flex-shrink-0 flex items-center justify-center w-16 bg-orange-500 text-white text-2xl font-medium rounded-l-md">
												<FaSadCry />
											</div>
											<div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
												<div className="flex-1 px-4 py-2 text-sm truncate">
													<a
														href="#"
														className="text-gray-900 font-medium hover:text-gray-600"
													>
														No Books Available
													</a>
													<p className="text-gray-500">
														Checking For New Updates...
													</p>
												</div>
												<div className="flex-shrink-0 pr-2">
													<button
														type="button"
														className="w-9 h-9 mt-1 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
													>
														<span className="sr-only">Open options</span>
														<svg
															aria-hidden="true"
															className="inline w-9 h-9 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-orange-600"
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
													</button>
												</div>
											</div>
										</li>
										<li></li>
									</ul>
								</div>
							)}
						</div>
					)}
				</AnimatePresence>
				<div className="flex items-center justify-center">
					<Pagination
						activePage={state.activePage}
						itemsCountPerPage={10}
						totalItemsCount={totalPage}
						pageRangeDisplayed={3}
						onChange={(pageNumber) => {
							reFetchBooks(pageNumber);
						}}
						itemClass=" z-10 bg-orange-50 border-orange-500 text-black relative flex inline-flex items-center justify-center rounded-md  px-4 py-2 border text-sm font-medium mx-1"
						linkClass="flex item-center justify-center"
						firstPageText="First Page"
						lastPageText="Last Lage"
						activeClass="bg-indigo-400"
					/>
				</div>
			</div>
		</AnimatedPage>
	);
};

export default Publication2;
