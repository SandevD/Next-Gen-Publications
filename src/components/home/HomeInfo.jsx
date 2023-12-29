import React from "react";
import book from "../../assets/img/pngbook.png";

const HomeInfo = () => {
  return (
    <div>
      <div className="px-20 lg:px-48">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 px-48">
          <div className="mx-auto text-left"><h1 className="text-gradient-blue text-3xl">BEST SELLERS</h1></div>
          <div className="mx-auto"></div>
        </div>
        <div className="grid grid-cols-6 gap-4 text-left px-48"></div>
        <div className="grid grid-cols-6 gap-4 text-center px-48">
          <div className="mx-auto">
            {" "}
            <img src={book} alt="" />
          </div>
          <div className="mx-auto">
            {" "}
            <img src={book} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
