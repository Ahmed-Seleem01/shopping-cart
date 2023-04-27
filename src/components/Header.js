// import image for site icon
import icon from "../images/ingredients.png";
// import image for shopping cart icon
import cart from "../images/shopping-cart.png";
// import header styles
import "../styles/header.scss";
// import Link component from React Router
import { Link } from "react-router-dom";
// import useEffect and useState hooks from React
import { useEffect, useState } from "react";
// import Cart component
import Cart from "./Cart";

// declare functional component with props
const Header = ({ headerCart }) => {
  // state hook to hold cart items
  const [cartItems, setCartItems] = useState([]);
  // state hook to hold count of cart items
  const [cartItemsCount, setCartItemsCount] = useState(0);
  // state hook to toggle visibility of cart
  const [showCart, setShowCart] = useState("cart-container");

  // useEffect hook to update cart item count whenever cartItems array changes
  useEffect(() => {
    setCartItemsCount(cartItems.length);
  }, [cartItems]);

  // function to toggle visibility of cart
  const handleToggle = () => {
    setShowCart("cart-container toggle-cart");
  };
  // function to hide cart
  const hide = () => {
    setShowCart("cart-container");
  };

  return (
    // main header container
    <nav className="header">
      {/* container for left section of header */}
      <div className="header-left">
        {/* site icon */}
        <img src={icon} alt="site icon" />
        {/* link to homepage */}
        <Link to="/">
          {/* site name */}
          <h1>Ingrediento</h1>
        </Link>
      </div>
      {/* container for right section of header */}
      <div className="header-right">
        {/* container for global links */}
        <div className="global-links">
          {/* link to homepage */}
          <Link to="/">
            {/* global link title */}
            <h2>Homepage</h2>
          </Link>
          {/* link to shopping page */}
          <Link to="/shopping">
            {/* global link title */}
            <h2>Shopping</h2>
          </Link>
        </div>
        {/* container for cart icon */}
        <div className="cart" onClick={handleToggle}>
          {/* cart item count */}
          <sup>{cartItemsCount}</sup>
          {/* shopping cart icon */}
          <img src={cart} alt="cart icon" />
        </div>
      </div>
      {/* Cart component to display shopping cart */}
      <Cart
        hide={hide}
        showCart={showCart}
        headerCart={headerCart}
        setCartItems={setCartItemsCount}
        items={cartItems}
        setItems={setCartItems}
      />
    </nav>
  );
};

// export Header component
export default Header;
