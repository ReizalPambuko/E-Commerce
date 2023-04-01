import React from "react";
import Header from "../src/component/header/Header";
import { CartProvider } from "react-use-cart";
import Home from "./container/home/Home";
import Product2 from "./container/product2/Product2";
import Blog from "./container/blog/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./container/cart/Cart";
import BelajarHtml from "./container/blog/belajarHtml/BelajarHtml";
import BelajarCss from "./container/blog/belajarCss/BelajarCss";
import BelajarJs from "./container/blog/belajarJs/BelajarJs";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product2 />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/belajarhtml" element={<BelajarHtml />} />
              <Route path="/belajarcss" element={<BelajarCss />} />
              <Route path="/belajarjs" element={<BelajarJs />} />
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
