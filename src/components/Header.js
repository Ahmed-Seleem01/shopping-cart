import icon from "../images/ingredients.png";
import cart from "../images/shopping-cart.png";
import "../styles/header.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Cart from "./Cart";

const Header = ({ headerCart }) => {
  const [quantity=0] = headerCart;
  const [cartItems, setCartItems] = useState(0);
  const [showCart, setShowCart] = useState("cart-container");
  console.log(cartItems);

  useEffect(() => {
    setCartItems(Number(cartItems) + 1);
  }, [headerCart]);

  const handleToggle = ()=>{
    setShowCart("cart-container toggle-cart")
  }
  const hide = ()=>{
    setShowCart("cart-container")
  }
  return (
    <nav className="header">
      <div className="header-left">
        <img src={icon} alt="site icon" />
        <Link to="/">
          <h1>Ingrediento</h1>
        </Link>
      </div>
      <div className="header-right">
        <div className="global-links">
          <Link to="/">
            <h2>Homepage</h2>
          </Link>
          <Link to="/shopping">
            <h2>Shopping</h2>
          </Link>
        </div>
        <div className="cart" onClick={handleToggle}>
          <sup>{cartItems -1}</sup>
          <img src={cart} alt="cart icon" />
        </div>
      </div>
      <Cart hide={hide} showCart= {showCart} headerCart={headerCart}/>
    </nav>
  );
};

export default Header;
