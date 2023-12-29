/* This example requires Tailwind CSS v2.0+ */
import { DotsVerticalIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Switch } from "@headlessui/react";

const projects = [
	{
		name: "All Publications",
		initials: "ALL",
		href: "#",
		members: 68,
		bgColor: "bg-pink-600",
	},
	{
		name: "English Publications",
		initials: "ENG",
		href: "#",
		members: 48,
		bgColor: "bg-purple-600",
	},
	{
		name: "Sinhala Publications",
		initials: "SIN",
		href: "#",
		members: 20,
		bgColor: "bg-yellow-500",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function IsotopeReact() {
	const names = ["Sinhala1", "Sinhala2", "English2", "English2", "Other"];
	const [isShownOTH, setIsShownOTH] = useState(false);
	const [isShownENG, setIsShownENG] = useState(false);
	const [isShownSIN, setIsShownSIN] = useState(false);

	const handleClickAll = () => {
		setIsShownOTH((current) => !current);
	};

	const handleClickENG = () => {
		setIsShownENG((current) => !current);
	};

	const handleClickSIN = () => {
		setIsShownSIN((current) => !current);
	};

	return (
		<div className="w-full">
			<h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
				CATEGORIES
			</h2>

			<ul
				role="list"
				className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
			>
				<li className="col-span-1 flex shadow-sm rounded-md">
					<div
						className={classNames(
							"flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-purple-600"
						)}
					>
						ENG
					</div>
					<div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
						<div className="flex-1 px-4 py-2 text-sm truncate">
							<a
								href="#"
								className="text-gray-900 font-medium hover:text-gray-600"
							>
								English Publications
							</a>
							<p className="text-gray-500">48 Books</p>
						</div>
						<div className="flex-shrink-0 pr-2">
							<button
								type="button"
								className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								<span className="sr-only">Open options</span>
								<Switch
									onClick={handleClickENG}
									className={classNames(
										isShownENG ? "bg-indigo-600" : "bg-gray-200",
										"relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
									)}
								>
									<span
										aria-hidden="true"
										className={classNames(
											isShownENG ? "translate-x-5" : "translate-x-0",
											"pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
										)}
									/>
								</Switch>
							</button>
						</div>
					</div>
				</li>
				<li className="col-span-1 flex shadow-sm rounded-md">
					<div
						className={classNames(
							"flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-yellow-600"
						)}
					>
						SIN
					</div>
					<div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
						<div className="flex-1 px-4 py-2 text-sm truncate">
							<a
								href="#"
								className="text-gray-900 font-medium hover:text-gray-600"
							>
								Sinhala Publications
							</a>
							<p className="text-gray-500">20 Books</p>
						</div>
						<div className="flex-shrink-0 pr-2">
							<button
								type="button"
								className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								<span className="sr-only">Open options</span>
								<Switch
									onClick={handleClickSIN}
									className={classNames(
										isShownSIN ? "bg-indigo-600" : "bg-gray-200",
										"relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
									)}
								>
									<span
										aria-hidden="true"
										className={classNames(
											isShownSIN ? "translate-x-5" : "translate-x-0",
											"pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
										)}
									/>
								</Switch>
							</button>
						</div>
					</div>
				</li>
				<li className="col-span-1 flex shadow-sm rounded-md">
					<div
						className={classNames(
							"flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-pink-600"
						)}
					>
						OTH
					</div>
					<div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
						<div className="flex-1 px-4 py-2 text-sm truncate">
							<a
								href="#"
								className="text-gray-900 font-medium hover:text-gray-600"
							>
								Other Publications
							</a>
							<p className="text-gray-500">12 Books</p>
						</div>
						<div className="flex-shrink-0 pr-2">
							<button
								type="button"
								className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								<span className="sr-only">Open options</span>
								<Switch
									onClick={handleClickAll}
									className={classNames(
										isShownOTH ? "bg-indigo-600" : "bg-gray-200",
										"relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
									)}
								>
									<span
										aria-hidden="true"
										className={classNames(
											isShownOTH ? "translate-x-5" : "translate-x-0",
											"pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
										)}
									/>
								</Switch>
							</button>
						</div>
					</div>
				</li>
			</ul>
			<div>
				{isShownENG &&
					names
						.filter((name) => name.includes("English"))
						.map((filteredName) => <li>{filteredName}</li>)}
				{isShownSIN &&
					names
						.filter((name) => name.includes("Sinhala"))
						.map((filteredName) => <li>{filteredName}</li>)}
				{isShownOTH &&
					names
						.filter((name) => name.includes("Other"))
						.map((filteredName) => <li>{filteredName}</li>)}
			</div>
		</div>
	);
}
