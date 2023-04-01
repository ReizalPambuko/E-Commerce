import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <p className="py-32 text-center text-2xl font-semibold">
        Your cart is empty
      </p>
    );

  return (
    <div className="container mx-auto py-24 max-sm:p-5">
      <table className="w-full m-6 max-sm:mx-auto max-sm:w-[100%] max-sm:p-5 max-sm:overflow-x-scroll max-sm:flex max-sm:items-center">
        <tbody>
          {items.map((item) => {
            return (
              <tr className="text-center font-semibold max-sm:flex max-sm:items-center">
                <td className="w-48 border-none p-6 max-sm:w-58">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-lg max-sm:w-full w-[90%] h-[30vh] object-contain max-sm:h-[2rem]"
                  />
                </td>
                <td className="border-none p-6">
                  <h3> {item.title.substring(0, 12)}</h3>
                </td>
                <td className="border-none p-6">$ {item.price}</td>
                <td className="border-none p-6 max-sm:flex">
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                    className="border border-gray-700 px-3 bg-gray-900 text-white py-1 max-sm:px-3 max-sm:py-2"
                  >
                    +
                  </button>
                  <span className="border border-gray-700 w-5 py-2 px-2 max-sm:w-10">
                    {item.quantity} x
                  </span>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                    className="border border-gray-700 px-3 py-1 bg-gray-200 max-sm:px-3 max-sm:py-2"
                  >
                    -
                  </button>
                </td>
                <td className="border-none ">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="border border-gray-700 py-1 px-3"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-end items-center gap-5 max-sm:flex-col">
        <h1 className="font-semibold text-xl">Cart Total:$ {cartTotal}</h1>
        <button
          onClick={() => emptyCart()}
          className="bg-red-500 text-white py-2 px-6 hover:bg-700 rounded-md"
        >
          Clear Cart
        </button>
        <button className="bg-sky-500 text-white py-2 px-6 hover:bg-sky-700 rounded-md">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
