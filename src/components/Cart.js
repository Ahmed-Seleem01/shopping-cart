import { useEffect, useState } from "react";
import "../styles/cart.scss";
const Cart = ({ showCart, headerCart }) => {
  const [items, setItems] = useState([]);  

  useEffect(()=>{
    if(headerCart.length>0){
      setItems([...items, headerCart])
    }
  }, [headerCart])
  // console.log(items)
  return (
    <div className={showCart}>
      <div>
        <span>Name</span>
        <span>Quantity</span>
        <span>Price $</span>
        <span>Total $</span>
        <span>Status</span>
      </div>
      {items.map((item) => (
        <div>
          <span>{item[2]}</span>
          <span>{item[0]}</span>
          <span>{item[1]}</span>
          <span>{(item[1] * item[0]).toFixed(2)}</span>
          <button>Checkout</button>
        </div>
      ))} 
    </div>
  );
};

export default Cart;
