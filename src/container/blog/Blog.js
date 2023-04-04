import React from "react";
import { Link } from "react-router-dom";
import IMG1 from "../../assets/img/html.png";

const Blog = () => {
  return (
    <div className="py-[7rem] max-sm:p-9 max-sm:py-[6rem]">
      <div className="container mx-auto">
        <h1 className="text-3xl font-medium">Baca blog kami</h1>
        <p className="mt-5">
          saya kali ini akan membagikan tutorial HTML, CSS, dan Javascript simak
          ya
        </p>
        <div>
          <div className="mt-10 flex max-sm:flex-col">
            <div className="">
              <img src={IMG1} alt="" className="w-[100%]" />
              <h3 className="font-medium text-xl mt-4">Belajar ngoding HTML</h3>
              <button className="underline underline-offset-1 mt-4">
                <Link to="/belajarhtml">Baca Selengkapnya</Link>
              </button>
            </div>

            <div className="max-sm:my-10 mx-3">
              <img src={IMG1} alt="" className="w-[100%]" />
              <h3 className="font-medium text-xl mt-4">Belajar ngoding CSS</h3>
              <button className="underline underline-offset-1 mt-4">
                <Link to="/belajarcss">Baca Selengkapnya</Link>
              </button>
            </div>

            <div className="">
              <img src={IMG1} alt="" className="w-[100%]" />
              <h3 className="font-medium text-xl mt-4">
                Belajar ngoding Javascript
              </h3>
              <button className="underline underline-offset-1 mt-4">
                <Link to="/belajarjs">Baca Selengkapnya</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
