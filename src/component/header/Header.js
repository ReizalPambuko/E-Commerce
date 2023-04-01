import React, { useState } from "react";
import { BiCart } from "react-icons/bi";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { GrFormClose } from "react-icons/gr";

const Header = () => {
  const { isEmpty, totalUniqueItems } = useCart();
  const [navs, setNavs] = useState(false);

  return (
    <div className="py-6 fixed w-full bg-white z-10 shadow-md shadow-gray-300 max-sm:p-4 max-sm:py-4">
      <div className="container flex mx-auto justify-between items-center">
        <h1 className="font-bold text-xl">
          <Link to="">4ILOGIC</Link>
        </h1>
        <ul
          className={`flex items-center font-semibold max-sm:flex-col max-sm:absolute max-sm:right-0 max-sm:top-20 max-sm:bg-white max-sm:shadow-xl max-sm:p-8 transition-all ${
            navs ? "max-sm:top-[4rem]" : "max-sm:top-[-400px]"
          }`}
        >
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li className="mx-6 max-sm:my-5">
            <Link to="/product">PRODUCT</Link>
          </li>
          <li className="mr-6 max-sm:mr-0">
            <Link to="/blog">BLOG</Link>
          </li>
          <li className="relative max-sm:mt-5">
            <Link to="/cart">
              <BiCart className="text-3xl pointer" />
              <span className="absolute top-0 right-0 bg-red-500 text-white w-4 h-4 rounded-full leading-4 text-center">
                {totalUniqueItems}
              </span>
            </Link>
          </li>
        </ul>
        <div
          onClick={() => setNavs(!navs)}
          className="hidden max-sm:block max-sm:text-2xl"
        >
          {navs ? <GrFormClose /> : <FiMenu />}
        </div>
      </div>
    </div>
  );
};

export default Header;
