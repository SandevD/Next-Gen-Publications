/* This example requires Tailwind CSS v2.0+ */
import { DotsVerticalIcon } from "@heroicons/react/solid";
import whatsapp from "../../assets/svg/whatsapp.svg";
import instagram from "../../assets/svg/instagram.svg";
import facebook from "../../assets/svg/facebook.svg";
import contact from "../../assets/svg/phone.svg";

const projects = [
	{
		name: "Instagram",
		initials: `${instagram}`,
		href: "https://www.instagram.com/nextgenpublications/?igshid=YmMyMTA2M2Y",
		members: "NextGenPublications",
		bgColor: "bg-pink-600",
	},
	{
		name: "Facebook",
		initials: `${facebook}`,
		href: "https://www.facebook.com/nextgenpublications/",
		members: "@NextGenPublications",
		bgColor: "bg-sky-600",
	},
	{
		name: "Hotline",
		initials: `${contact}`,
		href: "tel:+94 76 045 1504",
		members: "+94 76 045 1504",
		bgColor: "bg-yellow-500",
	},
	{
		name: "Whatsapp",
		initials: `${whatsapp}`,
		href: "//wa.me/+94765400777",
		members: "+94 76 045 1504",
		bgColor: "bg-green-500",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function ContactGrid() {
	return (
		<div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
			<ul
				role="list"
				className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
			>
				{projects.map((project) => (
					<li
						key={project.name}
						className="col-span-1 flex shadow-sm rounded-md"
					>
						<div
							className={classNames(
								project.bgColor,
								"flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
							)}
						>
							<a href={project.href} target="_blank">
								<img src={`${project.initials}`} className="text-white" />
							</a>
						</div>
						<div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
							<div className="flex-1 px-4 py-2 text-sm truncate">
								<a
									href={project.href}
									target="_blank"
									className="text-gray-900 font-medium hover:text-gray-600"
								>
									{project.name}
								</a>
								<p className="text-gray-500 text-sm">{project.members}</p>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
