import React from "react";
import HIRO1 from "../../assets/img/hiro.png";
const Hiro = () => {
  return (
    <div className="bg-sky-100 py-10 max-sm:p-10">
      <div className=" mx-auto flex justify-between items-center mt-7 max-sm:flex-col">
        <div className="ml-96 max-sm:ml-0">
          <p className="mb-4 max-sm:mt-20">Man Collection</p>
          <h1 className="text-5xl w-[53%] font-medium max-sm:text-3xl max-sm:w-[90%]">
            A simple guide to Minimalist style.
          </h1>
          <a
            href=""
            className="uppercase bg-gray-900 text-white py-3 px-9 mt-11 inline-block rounded-sm font-medium max-sm:px-3 max-sm:py-3 max-sm:text-sm"
          >
            shop now
          </a>
        </div>
        <div className="w-[33%] max-sm:w-[90%] max-sm:mt-9">
          <img src={HIRO1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hiro;
