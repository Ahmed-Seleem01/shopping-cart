import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Card";
import Header from "./Header";
import Homepage from "./Homepage";
import Shopping from "./Shopping";

const SwitchRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/shopping/:id" element={<Card/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default SwitchRoutes;
