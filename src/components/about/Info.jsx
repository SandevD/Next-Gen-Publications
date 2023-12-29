import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/outline";

import { BsHandThumbsUp, BsPeaceFill } from "react-icons/bs";
import { HiCubeTransparent, HiOutlineUserGroup } from "react-icons/hi";
import { RiTeamLine } from "react-icons/ri";
import { FaLeaf, FaRegStar } from "react-icons/fa";


const actions = [
  {
    title: "Quality",
    desc: "We maintain our standards for all our work regardless of the magnitude of the job with excellent service.",
    href: "#",
    icon: BadgeCheckIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-100",
  },
  {
    title: "Modesty ",
    desc: "We will always strive to exceed the expectations of our authors and their readers.",
    href: "#",
    icon: FaRegStar,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-100",
  },
  {
    title: "Integrity",
    desc: "Our conduct is what manifests our honesty and ethical ways with everyone we do business with.",
    icon: HiCubeTransparent,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-100",
  },
  {
    title: "Team Spirit",
    desc: "Commitment and mutual respect and will bind us together in achieving our goals. ",
    href: "#",
    icon: RiTeamLine,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-100",
  },
  {
    title: "Freedom",
    desc: "Our team opens up the freedom for our clientele to express their ideas and expectations. Our products will always be a clear result of this freedom we offer.",
    icon: BsPeaceFill,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-100",
  },
  {
    title: "Trust",
    desc: "This is something we build through our continuous responsible actions.",
    icon: BsHandThumbsUp,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-100",
  },
  {
    title: "Diversity",
    desc: "We respect and consider diversity.  Our products cater for a wider range of customers based on their different backgrounds, languages, age or their special needs.",
    icon: HiOutlineUserGroup,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-100",
  },
  {
    title: "Sustainability ",
    desc: "We manage our business to protect the environment, for today and for future generations.",
    icon: FaLeaf,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-100",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Info() {
  return (
    <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
      {actions.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            action.iconBackground,
            actionIdx === 0
              ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
              : "",
            actionIdx === 1 ? "sm:rounded-tr-lg" : "",
            actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
            actionIdx === actions.length - 1
              ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
              : "",
            "relative group  p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                "rounded-lg inline-flex p-3 ring-4 ring-white"
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
              <a disabled className="focus:outline-none mx-3">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.title}
              </a>
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium"></h3>
            <p className="mt-2 text-md font-semibold text-gray-500">
              {action.desc}
            </p>
          </div>
          <span
            className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
            aria-hidden="true"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
  );
}
