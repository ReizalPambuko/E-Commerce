import React, { useEffect, useState } from "react";
import "./products.css";
import { useCart } from "react-use-cart";

const Product = () => {
  const [store, setStore] = useState([]);

  const { addItem } = useCart();

  const fake = async () => {
    const product = await fetch("https://fakestoreapi.com/products");
    const allProduct = await product.json();
    const output = allProduct;
    return setStore(output);
  };

  useEffect(() => {
    fake();
  }, []);

  return (
    <div className="py-20">
      <h2 className="text-center mb-20 text-2xl font-semibold">
        Product Popular
      </h2>
      {store.map((products) => {
        return (
          <div className="container mx-auto">
            <div className="float-right w-[21%] m-7 shadow-lg shadow-gray-500 text-center p-7 rounded-md hover:bg-slate-50 transition-all max-sm:w-full max-sm:mx-auto max-sm:shadow-gray-300">
              <img
                src={products.image}
                alt=""
                className="w-[50%] h-[20vh] object-contain mx-auto max-sm:h-[20vh]"
              />
              <h2 className="w-[90%] text-center mx-auto text-md mt-5 font-semibold">
                {products.title.substring(0, 12)}
              </h2>
              <p className="mt-4">$ {products.price}</p>
              <button
                className="bg-gray-900 text-white py-3 px-4 mt-6 mx-auto rounded-lg"
                onClick={() => addItem(products)}
              >
                Add Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
