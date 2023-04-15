import { useEffect, useState } from "react";
import "../styles/cart.scss";
import "../styles/card.scss";
import SetQuantity from "./SetQuantity";

const Cart = ({ hide, showCart, headerCart }) => {
  const [items, setItems] = useState([]);

  const closePopup = ()=>{
    hide();
  }

  useEffect(()=>{
    if(headerCart.length>0){
      setItems([...items, headerCart])
    }
  }, [headerCart])

  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...items];
    updatedItems[index][0] = newQuantity;
    setItems(updatedItems);
  }

  return (
    <div className={showCart}>
      <button className="close-cart" onClick={closePopup}>X</button>
      {items.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item[2]}</span>
          <span><SetQuantity quantity={item[0]} setQuantity={(newQuantity) => handleQuantityChange(index, newQuantity)} /></span>
          <span>{(item[1] * item[0]).toFixed(2)}$</span>
          <button>Checkout</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
