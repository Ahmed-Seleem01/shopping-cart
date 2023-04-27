// Import necessary modules and components
import { HashRouter, Routes, Route } from "react-router-dom";
import Card from "./Card";
import Header from "./Header";
import Homepage from "./Homepage";
import Shopping from "./Shopping";
import { useState } from "react";
import "normalize.css";
import "../styles/global-styles.scss";

// Define SwitchRoutes component which acts as a router for our application
const SwitchRoutes = () => {
  // Define state for the cart in header component
  const [headerCart, setHeaderCart] = useState({});

  return (
    // Set up HashRouter as the root of our routing structure
    <HashRouter>
      {/* Render Header component to be fixed in all pages, passing in headerCart state as a prop */}
      <Header headerCart={headerCart} />
      {/* Define our route configuration using Routes component */}
      <Routes>
        {/* Define route for homepage */}
        <Route path="/" element={<Homepage />} />
        {/* Define route for shopping page */}
        <Route path="/shopping" element={<Shopping />} />
        {/* Define route for individual item page, passing in setHeaderCart */}
        function as a prop to Card component
        <Route
          path="/shopping/:name"
          element={<Card setHeaderCart={setHeaderCart} />}
        />
      </Routes>
    </HashRouter>
  );
};

// Export SwitchRoutes component as default
export default SwitchRoutes;
