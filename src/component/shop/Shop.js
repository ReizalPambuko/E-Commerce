import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import "./shop.css";

const Shop = () => {
  return (
    <div>
      <div className="flex justify-between m-5 relative max-sm:flex-col">
        <div className="spring rounded-lg">
          <div className="absolute bottom-10 left-10 max-sm:left-10 max-sm:top-10">
            <h3 className="mb-3 text-xl font-medium">Spring Collection</h3>
            <button href="" className="font-light">
              <span className="flex items-center">
                <AiOutlineLine className="text-2xl mr-4" />
                SHOP NOW
              </span>
            </button>
          </div>
        </div>
        <div className="minimalis mx-4 relative rounded-lg max-sm:my-10 max-sm:mx-0">
          <div className="absolute bottom-10 left-10">
            <h3 className="mb-3 text-xl font-medium">Basic Minimalis</h3>
            <button href="" className="font-light">
              <span className="flex items-center">
                <AiOutlineLine className="text-2xl mr-4" />
                SHOP NOW
              </span>
            </button>
          </div>
        </div>
        <div className="kacamata relative rounded-lg">
          <div className="absolute bottom-10 left-10">
            <h3 className="mb-3 text-xl font-medium">Accessories</h3>

            <button href="" className="font-light inline-block">
              <span className="flex items-center">
                <AiOutlineLine className="text-2xl mr-4" />
                SHOP NOW
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
