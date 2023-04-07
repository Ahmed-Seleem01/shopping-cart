import { BrowserRouter,HashRouter, Routes, Route } from "react-router-dom";
import Card from "./Card";
import Cart from "./Cart";
import Header from "./Header";
import Homepage from "./Homepage";
import Shopping from "./Shopping";
import "normalize.css";
import { useState } from "react";

const SwitchRoutes = () => {
  const [headerCart, setHeaderCart] = useState([]);
  return (
    <HashRouter>
      <Header  headerCart = {headerCart}/>
      {/* <Cart /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/shopping/:name" element={<Card setHeaderCart = {setHeaderCart}/>}/>
      </Routes>
    </HashRouter>
  );
};

export default SwitchRoutes;
