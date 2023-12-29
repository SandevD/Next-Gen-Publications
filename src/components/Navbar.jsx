/* This example requires Tailwind CSS v2.0+ */

import { Popover, Transition, Menu } from "@headlessui/react";
import React, { useState, useEffect, Fragment } from "react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

const mainnav = [
  {
    name: "Vission",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Mission",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Values",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Upcoming Projects",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Publications",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];
const callsToAction = [
  { name: "Facebook", href: "#", icon: PlayIcon },
  { name: "Contact Us", href: "#", icon: PhoneIcon },
];

const mobilenav = [
  {
    name: "Home",
    description:
      "Get a better understanding of where your traffic is coming from.",
    to: "/",
    icon: ViewGridIcon,
  },
  {
    name: "About Us",
    description:
      "Get a better understanding of where your traffic is coming from.",
    to: "/about",
    icon: ChartBarIcon,
  },
  {
    name: "Our Publications",
    description: "Speak directly to your customers in a more meaningful way.",
    to: "publication",
    icon: CursorClickIcon,
  },
  {
    name: "Contact Us",
    description: "Your customers' data will be safe and secure.",
    to: "contact",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <Popover
      className={`fixed w-full top-0 z-40 transition duration-300 ease-in-out ${
        !top && "opacity-80 bg-white shadow-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-4">
        <div className="flex justify-between items-center border-b-2 border-none py-3 md:justify-start md:space-x-3">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <img
                className="h-12 w-auto sm:h-14"
                src={Logo}
                alt="NEXTGEN PUBLICATION LOGO"
              />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Link
                    to="/"
                    className="text-lg font-medium text-gray-500 hover:text-gray-900"
                  >
                    Home
                  </Link>
                </>
              )}
            </Popover>
            <Link
              to="/about"
              className="text-lg font-medium text-gray-500 hover:text-gray-900"
            >
              About Us
            </Link>
            <Link
              to="/publication"
              className="text-lg font-medium text-gray-500 hover:text-gray-900"
            >
              Our Publications
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium text-gray-500 hover:text-gray-900"
            >
              Contact Us
            </Link>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="https://api.nextgen.pub/login"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <button
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span>Log In</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src={Logo} alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {mobilenav.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="https://api.nextgen.pub/login"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Log In
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
