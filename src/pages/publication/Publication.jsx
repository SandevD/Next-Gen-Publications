import axios from "axios";
import React, { useEffect, useState } from "react";
import AnimatedPage from "../../components/AnimatedPage";
import BookComponent from "../../components/publication/Model";
import { Switch } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { menuItems } from "../../constants";
import New from "./New";
import Pagination from "react-js-pagination";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Publication = () => {
  const [allBooks, setAllBooks] = useState(true);
  const [books, setBooks] = useState([]);
  const [bookObject, setBookObject] = useState([]);
  const [state, setState] = useState("");

  useEffect(() => {
    FetchAllBooks();
  }, []);

  const FetchAllBooks = async (pageNumber = 1) => {
    const res = await axios.get(`/api/getbooks/?page=${pageNumber}`);
    setBookObject(res.data.links);
    setBooks(res.data.data);
    setState({ activePage: pageNumber });
  };


  const handleClickAllBooks = () => {
    setAllBooks((current) => !current);
    setActivityBook(false);
    setScience(false);
    setMaths(false);
    setLifeSkills(false);
    setCommunication(false);
    setSocialStudies(false);
    setICT(false);
    setCommerce(false);
    setSongBook(false);
    setSinhala(false);
    setFrench(false);
    setTamil(false);
    setOther(false);
  };
  const [showActivityBook, setActivityBook] = useState(false);
  const handleClickActivityBooks = () => {
    setActivityBook((current) => !current);
    setAllBooks(false);
  };
  const [showScience, setScience] = useState(false);
  const handleClickScience = () => {
    setScience((current) => !current);
    setAllBooks(false);
  };
  const [showMaths, setMaths] = useState(false);
  const handleClickMaths = () => {
    setMaths((current) => !current);
    setAllBooks(false);
  };
  const [showLifeSkills, setLifeSkills] = useState(false);
  const handleClickLifeSkills = () => {
    setLifeSkills((current) => !current);
    setAllBooks(false);
  };
  const [showCommunication, setCommunication] = useState(false);
  const handleClickCommunication = () => {
    setCommunication((current) => !current);
    setAllBooks(false);
  };
  const [showSocialStudies, setSocialStudies] = useState(false);
  const handleClickSocialStudies = () => {
    setSocialStudies((current) => !current);
    setAllBooks(false);
  };
  const [showICT, setICT] = useState(false);
  const handleClickICT = () => {
    setICT((current) => !current);
    setAllBooks(false);
  };
  const [showCommerce, setCommerce] = useState(false);
  const handleClickCommerce = () => {
    setCommerce((current) => !current);
    setAllBooks(false);
  };
  const [showSongBook, setSongBook] = useState(false);
  const handleClickSongBook = () => {
    setSongBook((current) => !current);
    setAllBooks(false);
  };
  const [showSinhala, setSinhala] = useState(false);
  const handleClickSinhala = () => {
    setSinhala((current) => !current);
    setAllBooks(false);
  };
  const [showFrench, setFrench] = useState(false);
  const handleClickFrench = () => {
    setFrench((current) => !current);
    setAllBooks(false);
  };
  const [showTamil, setTamil] = useState(false);
  const handleClickTamil = () => {
    setTamil((current) => !current);
    setAllBooks(false);
  };
  const [showOther, setOther] = useState(false);
  const handleClickOther = () => {
    setOther((current) => !current);
    setAllBooks(false);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const names = ["Sinhala1", "Sinhala2", "English2", "English2", "Other"];
  const [isShownOTH, setIsShownOTH] = useState(false);
  const [isShownENG, setIsShownENG] = useState(false);
  const [isShownSIN, setIsShownSIN] = useState(false);

  const handleClickOTH = () => {
    setIsShownOTH((current) => !current);
  };

  const handleClickENG = () => {
    setIsShownENG((current) => !current);
  };

  const handleClickSIN = () => {
    setIsShownSIN((current) => !current);
  };

  const [showModal, setShowModal] = React.useState(false);
  const [id, setId] = useState();

  // const handleClick = () => {
  //   setShowModal(true);
  // };

  return (
    <AnimatedPage>
      <div className="w-full mx-auto max-w-6xl pt-24">
        {/* <div className="relative mx-auto px-6 lg:px-0">
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to dive in?</span>
                  <span className="block text-red-900">
                    Start your free trial today.
                  </span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-orange-50">
                  Your granted an exclusive offer where we let you get a sneak
                  peek at all the available books in our diigital library.
                </p>
                <p className="mt-4 text-lg leading-6 text-orange-50">
                  Or you can also subsribe to our monthly subscription at a
                  SMALL FEE of $99.99 ... a small price to pay for satisfaction
                  !
                </p>
                <p className="mt-4 text-lg leading-6 text-orange-50">
                  But bear in mind we only have 65 books yet !
                </p>
                <a
                  href="#"
                  className="mt-8 bg-orange-100 border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base font-medium text-red-600 hover:text-red-500"
                >
                  Subscribe $99.99
                </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div> */}

        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide pt-12 px-6 lg:px-0">
          SELECT MULTIPLE CATEGORIES OF YOUR CHOICE AND SCROLL DOWN TO VIEW
        </h2>

        {/*Desktops,Tablets Menu*/}
        <div className="z-[2] hidden sm:block">
          <ul
            role="list"
            className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-2 px-6 lg:px-0"
          >
            <li className="col-span-1 flex shadow-sm rounded-md flex-col">
              <div className="flex w-full">
                <div
                  className={classNames(
                    "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-purple-600"
                  )}
                >
                  All
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <a
                      href="#"
                      className="text-gray-900 font-medium hover:text-gray-600"
                    >
                      All
                    </a>
                    <p className="text-gray-500">48 Books</p>
                  </div>
                  <div className="flex-shrink-0 pr-2">
                    <div onClick={handleClickAllBooks}>
                      <span className="sr-only">Open options</span>
                      <Switch
                        className={classNames(
                          allBooks ? "bg-indigo-600" : "bg-gray-200",
                          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            allBooks ? "translate-x-5" : "translate-x-0",
                            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                          )}
                        />
                      </Switch>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute pt-1 pl-20">
                {allBooks && (
                  <div>
                    <select
                      id="location"
                      name="location"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      defaultValue="Canada"
                    >
                      <option>UN</option>
                      <option>PG</option>
                      <option>Grade 1</option>
                    </select>
                  </div>
                )}
              </div>
            </li>

            <li className="col-span-1 flex shadow-sm rounded-md flex-col">
              <div className="flex w-full">
                <div
                  className={classNames(
                    "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-purple-600"
                  )}
                >
                  AB
                </div>
                <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                  <div className="flex-1 px-4 py-2 text-sm truncate">
                    <a
                      href="#"
                      className="text-gray-900 font-medium hover:text-gray-600"
                    >
                      Activity Books
                    </a>
                    <p className="text-gray-500">48 Books</p>
                  </div>
                  <div className="flex-shrink-0 pr-2">
                    <div onClick={handleClickActivityBooks}>
                      <span className="sr-only">Open options</span>
                      <Switch
                        className={classNames(
                          showActivityBook ? "bg-indigo-600" : "bg-gray-200",
                          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={classNames(
                            showActivityBook
                              ? "translate-x-5"
                              : "translate-x-0",
                            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                          )}
                        />
                      </Switch>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute pt-1 pl-20">
                {showActivityBook && (
                  <div>
                    <select
                      id="location"
                      name="location"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                      defaultValue="Canada"
                    >
                      <option>UN</option>
                      <option>PG</option>
                      <option>Grade 1</option>
                    </select>
                  </div>
                )}
              </div>
            </li>

            <li className="col-span-1 flex shadow-sm rounded-md">
              <div
                className={classNames(
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-teal-600"
                )}
              >
                Sc
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <a
                    href="#"
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    Science
                  </a>
                  <p className="text-gray-500">48 Books</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <div onClick={handleClickScience}>
                    <span className="sr-only">Open options</span>
                    <Switch
                      className={classNames(
                        showScience ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          showScience ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div
                className={classNames(
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-sky-600"
                )}
              >
                M
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <a
                    href="#"
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    Mathematics
                  </a>
                  <p className="text-gray-500">48 Books</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <div onClick={handleClickMaths}>
                    <span className="sr-only">Open options</span>
                    <Switch
                      className={classNames(
                        showMaths ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          showMaths ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div
                className={classNames(
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-fuchsia-600"
                )}
              >
                LS
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <a
                    href="#"
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    Life Skills
                  </a>
                  <p className="text-gray-500">48 Books</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <div onClick={handleClickLifeSkills}>
                    <span className="sr-only">Open options</span>
                    <Switch
                      className={classNames(
                        showLifeSkills ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          showLifeSkills ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div
                className={classNames(
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-emerald-600"
                )}
              >
                C
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <a
                    href="#"
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    Communication
                  </a>
                  <p className="text-gray-500">48 Books</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <div onClick={handleClickCommunication}>
                    <span className="sr-only">Open options</span>
                    <Switch
                      className={classNames(
                        showCommunication ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          showCommunication ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div
                className={classNames(
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-blue-600"
                )}
              >
                SS
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <a
                    href="#"
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    Social Studies
                  </a>
                  <p className="text-gray-500">48 Books</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <div onClick={handleClickSocialStudies}>
                    <span className="sr-only">Open options</span>
                    <Switch
                      className={classNames(
                        showSocialStudies ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          showSocialStudies ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div
                className={classNames(
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-yellow-600"
                )}
              >
                ICT
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <a
                    href="#"
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    ICT
                  </a>
                  <p className="text-gray-500">20 Books</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <span className="sr-only">Open options</span>
                  <div onClick={handleClickICT}>
                    <Switch
                      className={classNames(
                        showICT ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          showICT ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div
                className={classNames(
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-pink-600"
                )}
              >
                CBA
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <a
                    href="#"
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    Commerce,Business & Accounting
                  </a>
                  <p className="text-gray-500">12 Books</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <div onClick={handleClickCommerce}>
                    <Switch
                      className={classNames(
                        showCommerce ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          showCommerce ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div
                className={classNames(
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-indigo-600"
                )}
              >
                SB
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <a
                    href="#"
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    Song Books
                  </a>
                  <p className="text-gray-500">12 Books</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <div onClick={handleClickSongBook}>
                    <Switch
                      className={classNames(
                        showSongBook ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          showSongBook ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div
                className={classNames(
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-purple-600"
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
                    Sinhala
                  </a>
                  <p className="text-gray-500">12 Books</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <div onClick={handleClickSinhala}>
                    <Switch
                      className={classNames(
                        showSinhala ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          showSinhala ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div
                className={classNames(
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-pink-600"
                )}
              >
                F
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <a
                    href="#"
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    French
                  </a>
                  <p className="text-gray-500">12 Books</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <div onClick={handleClickFrench}>
                    <Switch
                      className={classNames(
                        showFrench ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          showFrench ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div
                className={classNames(
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-teal-600"
                )}
              >
                T
              </div>
              <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
                <div className="flex-1 px-4 py-2 text-sm truncate">
                  <a
                    href="#"
                    className="text-gray-900 font-medium hover:text-gray-600"
                  >
                    Tamil
                  </a>
                  <p className="text-gray-500">12 Books</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <div onClick={handleClickTamil}>
                    <Switch
                      className={classNames(
                        showTamil ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          showTamil ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-span-1 flex shadow-sm rounded-md">
              <div
                className={classNames(
                  "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md bg-yellow-600"
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
                    Other
                  </a>
                  <p className="text-gray-500">12 Books</p>
                </div>
                <div className="flex-shrink-0 pr-2">
                  <div onClick={handleClickOther}>
                    <Switch
                      className={classNames(
                        showOther ? "bg-indigo-600" : "bg-gray-200",
                        "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-4"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(
                          showOther ? "translate-x-5" : "translate-x-0",
                          "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                        )}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/*Mobile*/}
        <div className=" top-24 z-[2] block sm:hidden">
          <ul
            role="list"
            className="mt-3 grid grid-cols-2 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-2 px-6 lg:px-0"
          >
            <li
              className="col-span-1 flex shadow-sm rounded-md cursor-pointer"
              onClick={handleClickAllBooks}
            >
              <div
                className={classNames(
                  allBooks ? "bg-blue-300" : "bg-white",
                  "flex-shrink-0 flex py-2 items-center justify-center w-full text-white text-sm font-semibold rounded-md bg-purple-600"
                )}
              >
                All Books
              </div>
            </li>
            <li
              className="col-span-1 flex shadow-sm rounded-md"
              onClick={handleClickActivityBooks}
            >
              <div
                className={classNames(
                  showActivityBook ? "bg-blue-300" : "bg-white",
                  "flex-shrink-0 flex items-center justify-center w-full text-white text-sm font-semibold rounded-md bg-yellow-600"
                )}
              >
                Sinhala
              </div>
            </li>
            <li
              className="col-span-1 flex shadow-sm rounded-md"
              onClick={handleClickScience}
            >
              <div
                className={classNames(
                  showScience ? "bg-blue-300" : "bg-white",
                  "flex-shrink-0 flex items-center justify-center w-full py-2 text-white text-sm rounded-md bg-pink-600 font-semibold"
                )}
              >
                Science
              </div>
            </li>
            <li
              className="col-span-1 flex shadow-sm rounded-md"
              onClick={handleClickMaths}
            >
              <div
                className={classNames(
                  showMaths ? "bg-blue-300" : "bg-white",
                  "flex-shrink-0 flex items-center justify-center w-full text-white text-xs rounded-md bg-sky-600"
                )}
              >
                Mathematics
              </div>
            </li>
            <li
              className="col-span-1 flex shadow-sm rounded-md"
              onClick={handleClickLifeSkills}
            >
              <div
                className={classNames(
                  showLifeSkills ? "bg-blue-300" : "bg-white",
                  "flex-shrink-0 flex items-center justify-center w-full text-white text-sm rounded-md bg-fuchsia-600 font-semibold"
                )}
              >
                Life Skills
              </div>
            </li>
            <li
              className="col-span-1 flex shadow-sm rounded-md"
              onClick={handleClickCommunication}
            >
              <div
                className={classNames(
                  showCommunication ? "bg-blue-300" : "bg-white",
                  "flex-shrink-0 py-2 flex items-center justify-center w-full text-white text-sm rounded-md bg-pink-600 font-semibold"
                )}
              >
                Communication
              </div>
            </li>
            <li
              className="col-span-1 flex shadow-sm rounded-md"
              onClick={handleClickSocialStudies}
            >
              <div
                className={classNames(
                  showSocialStudies ? "bg-blue-300" : "bg-white",
                  "flex-shrink-0 py-2 flex items-center justify-center w-full text-white text-sm rounded-md bg-yellow-600 font-semibold"
                )}
              >
                Social Studies{" "}
              </div>
            </li>
            <li
              className="col-span-1 flex shadow-sm rounded-md"
              onClick={handleClickICT}
            >
              <div
                className={classNames(
                  showICT ? "bg-blue-300" : "bg-white",
                  "flex-shrink-0 py-2 flex items-center justify-center w-full text-white text-sm rounded-md bg-purple-600 font-semibold"
                )}
              >
                ICT{" "}
              </div>
            </li>
            <li
              className="col-span-1 flex shadow-sm rounded-md"
              onClick={handleClickCommerce}
            >
              <div
                className={classNames(
                  showCommerce ? "bg-blue-300" : "bg-white",
                  "flex-shrink-0 py-2 flex items-center justify-center w-full text-white text-sm rounded-md bg-pink-600 font-semibold"
                )}
              >
                Commerce
              </div>
            </li>
            <li
              className="col-span-1 flex shadow-sm rounded-md"
              onClick={handleClickSongBook}
            >
              <div
                className={classNames(
                  showSongBook ? "bg-blue-300" : "bg-white",
                  "flex-shrink-0 py-2 flex items-center justify-center w-full text-white text-sm rounded-md bg-sky-600 font-semibold"
                )}
              >
                Song Books
              </div>
            </li>
            <li
              className="col-span-1 flex shadow-sm rounded-md"
              onClick={handleClickSinhala}
            >
              <div
                className={classNames(
                  showSinhala ? "bg-blue-300" : "bg-white",
                  "flex-shrink-0 py-2 flex items-center justify-center w-full text-white text-sm rounded-md bg-purple-600 font-semibold"
                )}
              >
                Sinhala
              </div>
            </li>
            <li
              className="col-span-1 flex shadow-sm rounded-md"
              onClick={handleClickFrench}
            >
              <div
                className={classNames(
                  showFrench ? "bg-blue-300" : "bg-white",
                  "flex-shrink-0 py-2 flex items-center justify-center w-full text-white text-sm rounded-md bg-pink-600 font-semibold"
                )}
              >
                French
              </div>
            </li>
            <li
              className="col-span-1 flex shadow-sm rounded-md"
              onClick={handleClickTamil}
            >
              <div
                className={classNames(
                  showTamil ? "bg-blue-300" : "bg-white",
                  "flex-shrink-0 py-2 flex items-center justify-center w-full text-white text-sm rounded-md bg-teal-600 font-semibold"
                )}
              >
                Tamil
              </div>
            </li>
            <li
              className="col-span-1 flex shadow-sm rounded-md"
              onClick={handleClickOther}
            >
              <div
                className={classNames(
                  showOther ? "bg-blue-300" : "bg-white",
                  "flex-shrink-0 py-2 flex items-center justify-center w-full text-white text-sm rounded-md bg-gray-600 font-semibold"
                )}
              >
                Other
              </div>
            </li>
          </ul>
        </div>

        {/* Grade Selector */}
        {/* <div className="h-full max-w-6xl mx-auto z[1] cursor-pointer">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-12 lg:py-20 px-6 lg:px-0"></div>
        </div> */}

        {/* Displaying Publications */}
        <AnimatePresence>
          <div className="h-full max-w-6xl mx-auto z[1] cursor-pointer">
            <div className="columns-1 sm:columns-2 md:columns-3 space-y-5 py-8 lg:py-12 px-6 lg:px-0">
              {showActivityBook && <New uid={1} />}
              {showScience && <New uid={2} />}
              {showMaths && <New uid={3} />}
              {showLifeSkills && <New uid={4} />}
              {showCommunication && <New uid={5} />}
              {showSocialStudies && <New uid={6} />}
              {showICT && <New uid={7} />}
              {showCommerce && <New uid={8} />}
              {showSongBook && <New uid={9} />}
              {showSinhala && <New uid={10} />}
              {showFrench && <New uid={11} />}
              {showTamil && <New uid={12} />}
              {showOther && <New uid={13} />}
            </div>
            <div className="columns-1 sm:columns-2 md:columns-3 space-y-5 py-12 lg:py-12 px-6 lg:px-0">
              {allBooks &&
                books.map((item) => (
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
                        src={`http://localhost:8000${item.image}`}
                      />
                      <p className="absolute bottom-0 px-5 py-3 text-lg font-bold  bg-white opacity-90  w-full">
                        {item.title}
                      </p>
                      <p className="absolute top-0 text-right py-3 text-md opacity-70 w-full">
                        <span className="bg-gradient-to-r from-orange-400 to-pink-500 p-4 rounded-tr-2xl rounded-bl-md text-white">
                          Grade {item.grade}
                        </span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              {showModal && <BookComponent setOpen={setShowModal} id={id} />}
            </div>
            {allBooks && (
              <div className="flex items-center justify-center">
                <Pagination
                  activePage={state.activePage}
                  itemsCountPerPage={10}
                  totalItemsCount={450}
                  pageRangeDisplayed={3}
                  onChange={(pageNumber) => {
                    FetchAllBooks(pageNumber);
                  }}
                  itemClass=" z-10 bg-indigo-50 border-indigo-500 text-black relative flex inline-flex items-center justify-center rounded-md  px-4 py-2 border text-sm font-medium"
                  linkClass="flex item-center justify-center"
                  firstPageText="First Page"
                  lastPageText="Last Lage"
                  activeClass="bg-indigo-400"
                />
              </div>
            )}
          </div>
        </AnimatePresence>
      </div>

      {/* Test */}
      {/*<div>
				<p onClick={() => handleClickDisplay(setDisplayId(1))}>CLICK ME {displayId && <p>hi</p>}</p>
				{showDisplayBooks && <New setDisplay={setDisplayBooks} id={displayId} />}
									</div>*/}

      {/* Displaying Publications */}
      {/*<div className="h-full max-w-6xl mx-auto z[1] cursor-pointer">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-12 lg:py-20 px-6 lg:px-0">
					<AnimatePresence>
						{showActivityBook &&
							books
								.filter((book) => book.category_id == 1)
								.map((item) => (
									<motion.div
										style={{ overflow: "hidden" }}
										key={item.id}
										layout
										initial={{ transform: "scale(0)" }}
										animate={{ transform: "scale(1)" }}
										exit={{ transform: "scale(0)" }}
									>
										<div
											onClick={() => handleClick(setId(item.id))}
											className="relative"
										>
											<motion.img
												className="w-full aspect-video transition duration-500 hover:scale-95 hover:opacity-80 rounded-xl"
												src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
											/>
											<p className="absolute bottom-0 px-5 py-3 text-lg bg-white opacity-70 w-full">
												{item.title}
											</p>
										</div>
									</motion.div>
								))}
						{showScience &&
							books
								.filter((book) => book.category_id == 2)
								.map((item) => (
									<motion.div
										style={{ overflow: "hidden" }}
										key={item.id}
										layout
										initial={{ transform: "scale(0)" }}
										animate={{ transform: "scale(1)" }}
										exit={{ transform: "scale(0)" }}
									>
										<div
											onClick={() => handleClick(setId(item.id))}
											className="relative"
										>
											<motion.img
												className="w-full aspect-video transition duration-500 hover:scale-95 hover:opacity-80 rounded-xl"
												src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
											/>
											<p className="absolute bottom-0 px-5 py-3 text-lg bg-white opacity-70 w-full">
												{item.title}
											</p>
										</div>
									</motion.div>
								))}
						{showMaths &&
							books
								.filter((book) => book.category_id == 3)
								.map((item) => (
									<motion.div
										style={{ overflow: "hidden" }}
										key={item.id}
										layout
										initial={{ transform: "scale(0)" }}
										animate={{ transform: "scale(1)" }}
										exit={{ transform: "scale(0)" }}
									>
										<div
											onClick={() => handleClick(setId(item.id))}
											className="relative"
										>
											<motion.img
												className="w-full aspect-video transition duration-500 hover:scale-95 hover:opacity-80 rounded-xl"
												src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
											/>
											<p className="absolute bottom-0 px-5 py-3 text-xl font-poppins  ">
												{item.title}
											</p>
										</div>
									</motion.div>
								))}
						{showLifeSkills &&
							books
								.filter((book) => book.category_id == 4)
								.map((item) => (
									<motion.div
										style={{ overflow: "hidden" }}
										key={item.id}
										layout
										initial={{ transform: "scale(0)" }}
										animate={{ transform: "scale(1)" }}
										exit={{ transform: "scale(0)" }}
									>
										<div
											onClick={() => handleClick(setId(item.id))}
											className="relative"
										>
											<motion.img
												className="w-full aspect-video transition duration-500 hover:scale-95 hover:opacity-80 rounded-xl"
												src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
											/>
											<p className="absolute bottom-0 px-5 py-3 text-xl font-poppins  ">
												{item.title}
											</p>
										</div>
									</motion.div>
								))}
						{showCommunication &&
							books
								.filter((book) => book.category_id == 5)
								.map((item) => (
									<motion.div
										style={{ overflow: "hidden" }}
										key={item.id}
										layout
										initial={{ transform: "scale(0)" }}
										animate={{ transform: "scale(1)" }}
										exit={{ transform: "scale(0)" }}
									>
										<div
											onClick={() => handleClick(setId(item.id))}
											className="relative"
										>
											<motion.img
												className="w-full aspect-video transition duration-500 hover:scale-95 hover:opacity-80 rounded-xl"
												src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
											/>
											<p className="absolute bottom-0 px-5 py-3 text-xl font-poppins  ">
												{item.title}
											</p>
										</div>
									</motion.div>
								))}
						{showSocialStudies &&
							books
								.filter((book) => book.category_id == 6)
								.map((item) => (
									<motion.div
										style={{ overflow: "hidden" }}
										key={item.id}
										layout
										initial={{ transform: "scale(0)" }}
										animate={{ transform: "scale(1)" }}
										exit={{ transform: "scale(0)" }}
									>
										<div
											onClick={() => handleClick(setId(item.id))}
											className="relative"
										>
											<motion.img
												className="w-full aspect-video transition duration-500 hover:scale-95 hover:opacity-80 rounded-xl"
												src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
											/>
											<p className="absolute bottom-0 px-5 py-3 text-xl font-poppins  ">
												{item.title}
											</p>
										</div>
									</motion.div>
								))}
						{showICT &&
							books
								.filter((book) => book.category_id == 7)
								.map((item) => (
									<motion.div
										style={{ overflow: "hidden" }}
										key={item.id}
										layout
										initial={{ transform: "scale(0)" }}
										animate={{ transform: "scale(1)" }}
										exit={{ transform: "scale(0)" }}
									>
										<div
											onClick={() => handleClick(setId(item.id))}
											className="relative"
										>
											<motion.img
												className="w-full aspect-video transition duration-500 hover:scale-95 hover:opacity-80 rounded-xl"
												src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
											/>
											<p className="absolute bottom-0 px-5 py-3 text-xl font-poppins  ">
												{item.title}
											</p>
										</div>
									</motion.div>
								))}

						{showCommerce &&
							books
								.filter((book) => book.category_id == 8)
								.map((item) => (
									<motion.div
										style={{ overflow: "hidden" }}
										key={item.id}
										layout
										initial={{ transform: "scale(0)" }}
										animate={{ transform: "scale(1)" }}
										exit={{ transform: "scale(0)" }}
									>
										<div
											onClick={() => handleClick(setId(item.id))}
											className="relative"
										>
											<motion.img
												className="w-full aspect-video transition duration-500 hover:scale-95 hover:opacity-80 rounded-xl"
												src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
											/>
											<p className="absolute bottom-0 px-5 py-3 text-xl font-poppins  ">
												{item.title}
											</p>
										</div>
									</motion.div>
								))}
						{showSongBook &&
							books
								.filter((book) => book.category_id == 9)
								.map((item) => (
									<motion.div
										style={{ overflow: "hidden" }}
										key={item.id}
										layout
										initial={{ transform: "scale(0)" }}
										animate={{ transform: "scale(1)" }}
										exit={{ transform: "scale(0)" }}
									>
										<div
											onClick={() => handleClick(setId(item.id))}
											className="relative"
										>
											<motion.img
												className="w-full aspect-video transition duration-500 hover:scale-95 hover:opacity-80 rounded-xl"
												src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
											/>
											<p className="absolute bottom-0 px-5 py-3 text-xl font-poppins  ">
												{item.title}
											</p>
										</div>
									</motion.div>
								))}

						{showSinhala &&
							books
								.filter((book) => book.category_id == 10)
								.map((item) => (
									<motion.div
										style={{ overflow: "hidden" }}
										key={item.id}
										layout
										initial={{ transform: "scale(0)" }}
										animate={{ transform: "scale(1)" }}
										exit={{ transform: "scale(0)" }}
									>
										<div
											onClick={() => handleClick(setId(item.id))}
											className="relative"
										>
											<motion.img
												className="w-full aspect-video transition duration-500 hover:scale-95 hover:opacity-80 rounded-xl"
												src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
											/>
											<p className="absolute bottom-0 px-5 py-3 text-xl font-poppins  ">
												{item.title}
											</p>
										</div>
									</motion.div>
								))}

						{showFrench &&
							books
								.filter((book) => book.category_id == 11)
								.map((item) => (
									<motion.div
										style={{ overflow: "hidden" }}
										key={item.id}
										layout
										initial={{ transform: "scale(0)" }}
										animate={{ transform: "scale(1)" }}
										exit={{ transform: "scale(0)" }}
									>
										<div
											onClick={() => handleClick(setId(item.id))}
											className="relative"
										>
											<motion.img
												className="w-full aspect-video transition duration-500 hover:scale-95 hover:opacity-80 rounded-xl"
												src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
											/>
											<p className="absolute bottom-0 px-5 py-3 text-xl font-poppins  ">
												{item.title}
											</p>
										</div>
									</motion.div>
								))}

						{showTamil &&
							books
								.filter((book) => book.category_id == 12)
								.map((item) => (
									<motion.div
										style={{ overflow: "hidden" }}
										key={item.id}
										layout
										initial={{ transform: "scale(0)" }}
										animate={{ transform: "scale(1)" }}
										exit={{ transform: "scale(0)" }}
									>
										<div
											onClick={() => handleClick(setId(item.id))}
											className="relative"
										>
											<motion.img
												className="w-full aspect-video transition duration-500 hover:scale-95 hover:opacity-80 rounded-xl"
												src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
											/>
											<p className="absolute bottom-0 px-5 py-3 text-xl font-poppins  ">
												{item.title}
											</p>
										</div>
									</motion.div>
								))}

						{showOther &&
							books
								.filter((book) => book.category_id == 13)
								.map((item) => (
									<motion.div
										style={{ overflow: "hidden" }}
										key={item.id}
										layout
										initial={{ transform: "scale(0)" }}
										animate={{ transform: "scale(1)" }}
										exit={{ transform: "scale(0)" }}
									>
										<div
											onClick={() => handleClick(setId(item.id))}
											className="relative"
										>
											<motion.img
												className="w-full aspect-video transition duration-500 hover:scale-95 hover:opacity-80 rounded-xl"
												src="https://images.unsplash.com/photo-1668977309586-50c338c48cf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
											/>
											<p className="absolute bottom-0 px-5 py-3 text-xl font-poppins  ">
												{item.title}
											</p>
										</div>
									</motion.div>
								))}
					</AnimatePresence>
				</div>
				{showModal && <BookComponent setOpen={setShowModal} id={id} />}
			</div>*/}
    </AnimatedPage>
  );
};

export default Publication;
