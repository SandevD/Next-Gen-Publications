import axios from "axios";
import { useEffect, useState } from "react";
import books from "../../assets/img/books.png";
import parse from "html-react-parser";
export default function Business(data) {
  return (
    <>
      <div className="relative mt-20">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={books}
                  alt="Logo"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-rose-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600 via-fuchsia-600 opacity-90" />
                <div className="relative px-8">
                  <div>
                    <p className="font-bold text-rose-200 text-3xl">
                      Why Choose Us ?
                    </p>
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <p className="relative">
                        {parse(`${data.data.aboutUs_why_choose_us}`)}
                      </p>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                ABOUT US
              </h2>
              <div className="mt-6 text-gray-500 space-y-8">
                <div className="space-y-2 mt-12">
                  <p className="text-xl text-slate-900"> Who we are? </p>
                  {/* <p className="text-lg">{info.aboutUs_who_we_are}</p> */}
                  <p className="text-lg">
                    {parse(`${data.data.aboutUs_who_we_are}`)}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xl text-slate-900">
                    Year of Establishment
                  </p>
                  <p className="text-lg">
                    {parse(`${data.data.aboutUs_establishment}`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
