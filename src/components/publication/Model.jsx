import axios from "axios";
// import { parse } from "postcss";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookPng from "../../assets/img/pngbook.png";
import parse from "html-react-parser";

const BookComponent = ({ setOpen, id }) => {
  //   console.log(id);
  const [book, setBook] = useState([]);
  const [flipBook, setFlipBook] = useState(false);
  const [slug, setSlug] = useState();

  useEffect(() => {
    fetchSingleBook();
  }, []);
  const fetchSingleBook = async () => {
    const res = await axios.get(window.host + `/api/getbooks/${id}`);
    setBook(res.data);
  };

  //   const navigate = useNavigate();

  //   const handleClick = () => {
  //     navigate(`/publication/${id}`, "_blank");
  //   };

  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div
          className={`relative w-auto my-6 mx-auto max-w-3xl px-8 pt-48 sm:pt-16`}
        >
          {/*content*/}
          {book.map((item) => (
            <div
              className="border-0 rounded-lg shadow-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none"
              key={item.id}
            >
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-md lg:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-poppins px-6 sm:px-14 shine">
                  {item.title}
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-red-500 opacity-80 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <span className="bg-transparent text-red-500 opacity-80 h-6 w-6 text-2xl block outline-none focus:outline-none hithere">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div
                className={`relative p-6 flex flex-col sm:flex-row items-center justify-between ${
                  flipBook && "hidden"
                }`}
              >
                <div className="px-10 bounce2">
                  <img
                    src={window.host + `${item.image}`}
                    alt="Logo"
                    className="w-[100px] sm:w-[1000px]"
                  />
                </div>
                <div>
                  <p className="my-4 text-slate-500 text-sm pl-5">
                    <span className="font-bold">Description : </span>
                  </p>
                  <p className="my-4 text-slate-500 text-sm pl-5">
                    {parse(`${item.desc}`)}
                    {/* {item.desc} */}
                  </p>
                </div>
              </div>
              <div className={`visible ${!flipBook && "invisible"}`}></div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <a href={`${item.link}`}
                  className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 shine"
                >
                  ORDER NOW
                </a>
                <button
                  className="bg-gradient-to-r from-orange-400 to-pink-500 text-white active:bg-emerald-600 font-semibold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bounce"
                  type="button"
                  onClick={() => window.open(`/publication/${id}`, "_blank")}
                >
                  Open Book
                </button>
                {/* <button
                  className="bg-gradient-to-r from-orange-400 to-pink-500 text-white active:bg-emerald-600 font-semibold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bounce"
                  type="button"
                  onClick={() => setFlipBook(true)}
                >
                  Sneak Peek
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default BookComponent;
