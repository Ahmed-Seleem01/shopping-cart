import { useEffect, useState } from "react";
import "../styles/cart.scss";
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

  return (
    <div className={showCart}>
      <button className="close-cart" onClick={closePopup}>X</button>
      {items.map((item) => (
        <div>
          <span>{item[2]}</span>
          <span>{item[0]}</span>
          {/* <span>{item[1]}$</span> */}
          <span>{(item[1] * item[0]).toFixed(2)}$</span>
          <button>Checkout</button>
        </div>
      ))} 
    </div>
  );
};

export default Cart;
