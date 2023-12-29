import React from "react";
import {
  CalendarIcon,
  CheckIcon,
  PlusIcon,
  UsersIcon,
  ViewBoardsIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import Upcoming from "./Upcoming";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const features = [
  {
    name: "Textbooks",
    description:
      "Our vast collection of textbooks covers all three main curriculums; Edexcel, Cambridge and National.",
    icon: ViewListIcon,
  },
  {
    name: "Workbooks & Activity Books",
    description:
      "Our collection of specially designed workbooks and activity books cater to all age categories from pre-primary to upper school.",
    icon: ViewBoardsIcon,
  },
  {
    name: "Other Languages",
    description:
      "We promote other language education by publishing Sinhala, Tamil and French Reading Books for students.",
    icon: CalendarIcon,
  },
];

const checklist = [
  "Unlimited projects",
  "No per user fees",
  "Unlimited storage",
  "24/7 support",
  "Cancel any time",
  "14 days free",
];

const Hero = () => {
  return (
    // <div className="relative bg-white">
    //   <div className="absolute inset-0" aria-hidden="true">
    //     <div
    //       className="hidden md:flex absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-cyan-600 to-green-400 bg-cover rounded-3xl"
    //       style={{
    //         backgroundImage: `linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)), url(src/assets/img/last.jpg)`,
    //       }}
    //     />
    //   </div>
    //   <div className="relative mx-auto lg:grid lg:grid-cols-2 lg:px-8">
    //     <div className="bg-white py-16 px-4 sm:py-24 sm:px-6 lg:px-0 lg:pr-8 mx-auto">
    //       <div className="max-w-lg mx-auto lg:mx-0">
    //         <h2 className="text-base font-semibold text-center md:text-left tracking-wide text-cyan-600 uppercase">
    //           Our Publications
    //         </h2>
    //         <p className="mt-2 text-2xl text-center md:text-left font-extrabold text-gray-900 sm:text-3xl">
    //           What we provide...
    //         </p>
    //         <dl className="mt-12 space-y-10">
    //           {features.map((feature) => (
    //             <div key={feature.name} className="relative">
    //               <dt>
    //                 <div className="absolute h-12 w-12 bg-gradient-to-r from-cyan-600 to-green-400 rounded-md flex items-center justify-center">
    //                   <feature.icon
    //                     className="h-6 w-6 text-white"
    //                     aria-hidden="true"
    //                   />
    //                 </div>
    //                 <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
    //                   {feature.name}
    //                 </p>
    //               </dt>
    //               <dd className="mt-2 ml-16 text-base text-gray-500">
    //                 {feature.description}
    //               </dd>
    //             </div>
    //           ))}
    //         </dl>
    //       </div>
    //     </div>
    //     <div className="bg-gradient-to-r from-cyan-00 to-blue-400 py-16 px-4 sm:py-24 sm:px-6 lg:bg-none lg:flex lg:items-center lg:justify-end lg:px-0 lg:pl-8 mx-auto">
    //       <div className="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
    //         {/* <p className="text-uppercase mt-2 text-2xl font-extrabold text-gray-200 sm:text-3xl"> Upcoming Projects </p> */}
    //         {/* <Upcoming /> */}
    //         {/* <img className="rounded-xl" src="src/assets/img/last.jpg" alt="" /> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="bg-gray-50 overflow-hidden pb-10">
    //   <div className="relative max-w-xl mx-auto px-4 sm:px-6  lg:max-w-7xl">
    //     <svg
    //       className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
    //       width={404}
    //       height={784}
    //       fill="none"
    //       viewBox="0 0 404 784"
    //       aria-hidden="true"
    //     >
    //       <defs>
    //         <pattern
    //           id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
    //           x={0}
    //           y={0}
    //           width={20}
    //           height={20}
    //           patternUnits="userSpaceOnUse"
    //         >
    //           <rect
    //             x={0}
    //             y={0}
    //             width={4}
    //             height={4}
    //             className="text-gray-200"
    //             fill="currentColor"
    //           />
    //         </pattern>
    //       </defs>
    //       <rect
    //         width={404}
    //         height={784}
    //         fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
    //         className="shadow-2xl"
    //       />
    //     </svg>

    //     <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
    //       <div className="relative">
    //         <h2 className="text-lg py-2 font-semibold text-center md:text-left tracking-wide text-cyan-600 uppercase">
    //           OUR PUBLICATIONS
    //         </h2>{" "}
    //         <p className="mt-1 mb-2 text-2xl text-center md:text-left font-extrabold text-gray-900 sm:text-3xl">
    //           What we provide...{" "}
    //         </p>
    //         <div
    //           className="bg-white py-8 px-5 rounded-2xl shadow-2xl bg-cover"
    //           style={{
    //             backgroundImage: `linear-gradient(rgba(0,0,0,0.05),rgba(0,0,0,0.05)), url(src/assets/img/animatesvg.svg)`,
    //           }}
    //         >
    //           <h3 className="text-xl font-bold text-gray-900 tracking-tight sm:text-xl font-poppins">
    //             <span className="text-teal-600">THE MISSION</span>
    //           </h3>
    //           <h2 className="mt-4 text-xl font-bold ">Textbooks</h2>
    //           <p className="mt-2 text-sm text-gray-500 font-semibold uppercase">
    //             Our vast collection of textbooks covers all three main
    //             curriculums; Edexcel, Cambridge and National.
    //           </p>

    //           <h2 className="mt-6 text-xl font-bold ">
    //             Workbooks & Activity Books
    //           </h2>
    //           <p className="mt-2 text-sm text-gray-500 font-semibold uppercase">
    //             Our collection of specially designed workbooks and activity
    //             books cater to all age categories from pre-primary to upper
    //             school.
    //           </p>

    //           <h2 className="mt-6 text-xl font-bold ">Other Languages</h2>
    //           <p className="mt-2 text-sm text-gray-500 font-semibold uppercase">
    //             We promote other language education by publishing Sinhala, Tamil
    //             and French Reading Books for students.
    //           </p>
    //         </div>
    //       </div>

    //       <div
    //         className="mt-10 flex items-center justify-center -mx-4 relative pt-16 lg:mt-0"
    //         aria-hidden="true"
    //       >
    //         <svg
    //           className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
    //           width={784}
    //           height={404}
    //           fill="none"
    //           viewBox="0 0 784 404"
    //         >
    //           <defs>
    //             <pattern
    //               id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
    //               x={0}
    //               y={0}
    //               width={20}
    //               height={20}
    //               patternUnits="userSpaceOnUse"
    //             >
    //               <rect
    //                 x={0}
    //                 y={0}
    //                 width={4}
    //                 height={4}
    //                 className="text-gray-200"
    //                 fill="currentColor"
    //               />
    //             </pattern>
    //           </defs>
    //           <rect
    //             width={784}
    //             height={404}
    //             fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
    //           />
    //         </svg>
    //         <img
    //           className="flex relative items-center justify-center mx-auto shadow-2xl rounded-xl"
    //           width={600}
    //           src="src/assets/img/last.jpg"
    //           alt=""
    //         />
    //       </div>
    //     </div>

    //     <svg
    //       className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
    //       width={404}
    //       height={784}
    //       fill="none"
    //       viewBox="0 0 404 784"
    //       aria-hidden="true"
    //     >
    //       <defs>
    //         <pattern
    //           id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
    //           x={0}
    //           y={0}
    //           width={20}
    //           height={20}
    //           patternUnits="userSpaceOnUse"
    //         >
    //           <rect
    //             x={0}
    //             y={0}
    //             width={4}
    //             height={4}
    //             className="text-gray-200"
    //             fill="currentColor"
    //           />
    //         </pattern>
    //       </defs>
    //       <rect
    //         width={404}
    //         height={784}
    //         fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
    //       />
    //     </svg>
    //   </div>
    // </div>
    <div className="">
      <div
        className="bg-white   mx-2 sm:mx-12 lg:mx-auto "
        style={{
          backgroundImage: `url(src/assets/img/animatesvg.svg)`,
        }}
      >
        <div className="max-w-7xl mx-auto py-16 px-10 sm:py-116 sm:px-6 lg:px-8 lg:flex lg:flex-row lg:justify-between">
          <div className="max-w-xl mx-auto bg-white px-5 rounded-xl opacity-75 py-8 shadow-2xl">
            {/* <p className="mt-5 mb-3 text-sm text-slate-800 font-bold uppercase">
              <span className="bg-fuchsia-300 p-2 rounded-md shadow-2xl text-fuchsia-900">
                OUR PUBLICATIONS.
              </span>
            </p>
            <h2 className="sm:text-3xl md:text-2xl font-bold text-slate-800 sm:tracking-tight uppercase">
              What we provide...
            </h2>
            <div className="flex flex-col mt-5">
              <div className="flex">
                <h2 className="flex my-3 font-bold text-lg uppercase">
                  Textbooks
                </h2>
              </div>

              <p className=" text-sm sm:text-md  md:text-md text-sky-800 font-bold uppercase ">
                Our vast collection of textbooks covers all three main
                curriculums; Edexcel, Cambridge and National.
              </p>
              <h2 className="my-3 font-bold text-lg uppercase">
                Workbooks & Activity Books
              </h2>
              <p className=" text-sm sm:text-md md:text-md text-sky-800 font-bold uppercase">
                Our collection of specially designed workbooks and activity
                books cater to all age categories from pre-primary to upper
                school.
              </p>
              <h2 className="my-3 font-bold text-lg uppercase">
                Other Languages
              </h2>
              <p className=" text-sm sm:text-md md:text-md text-sky-800 font-bold uppercase">
                We promote other language education by publishing Sinhala, Tamil
                and French Reading Books for students.
              </p>
            </div> */}
            <div className="bg-white sm:px-6 lg:px-0 lg:pr-8">
              <div className="max-w-lg mx-auto lg:mx-0">
                <h2 className="text-base font-semibold tracking-wide text-teal-600 uppercase">
                  Our Publication
                </h2>
                <p className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl ">
                  WHAT WE PROVIDE....
                </p>
                <dl className="mt-12 space-y-10">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt>
                        <div className="absolute h-8 lg:h-12 w-8 lg:w-12 flex items-center justify-center bg-gradient-to-r from-cyan-600 to-green-400 rounded-md">
                          <feature.icon
                            className="h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>
                        <p className="ml-16 text-md lg:text-lg leading-6 font-medium text-gray-900">
                          {feature.name}
                        </p>
                      </dt>
                      <dd className="mt-2 ml-16 text-sm lg:text-base text-gray-500">
                        {feature.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          <div className="max-w-xl mx-auto bg-transparent rounded-xl opacity-90 mt-5 lg:mt-0 shadow-2xl">
            <img
              className="flex relative items-center justify-center mx-auto shadow-2xl rounded-xl w-full h-full"
              src="src/assets/img/last.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
