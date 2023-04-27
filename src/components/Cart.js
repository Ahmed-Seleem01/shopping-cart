/* eslint-disable react-hooks/exhaustive-deps */
// Import the required modules and components
import { useEffect } from "react";
import "../styles/cart.scss";
import "../styles/card.scss";
import SetQuantity from "./SetQuantity";

// Define the Cart component
//  This component takes the following props: hide,
// showCart, headerCart, setCartItems, items, and setItems.
const Cart = ({
  hide,
  showCart,
  headerCart,
  setCartItems,
  items,
  setItems,
}) => {
  // Define a function to close the popup
  const closePopup = () => {
    hide();
  };

  // Define an effect hook that updates the cart items when the header cart changes
  /*
    This effect runs whenever headerCart changes. If headerCart is not empty 
    and the cart already contains an item with the same name, the quantity of that 
    item is increased. Otherwise, the new item is added to the cart. The
    setCartItems function is also called to update the number of items in the cart.
   */
  useEffect(() => {
    if (headerCart.id) {
      if (items.some((item) => item.name === headerCart.name)) {
        const arr = items.map((item) => {
          if (item.name === headerCart.name) {
            item.quantity += headerCart.quantity;
          }
          return item;
        });
        setItems(arr);
      } else {
        setItems([...items, headerCart]);
      }
      setCartItems(items.length);
    }
  }, [headerCart]);

  // Define a function to handle quantity changes
  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...items];
    updatedItems[index].quantity = newQuantity;
    setItems(updatedItems);
  };

  // Define a function to delete an item from the cart
  const deleteItem = (e) => {
    console.log(e.target.id);
    const updatedItems = items
      .slice(0, e.target.id)
      .concat(items.slice(Number(e.target.id) + 1));
    setItems(updatedItems);
    setCartItems(updatedItems.length);
  };
  // Return the cart UI
  /*
    This component displays the cart items, their quantity, and their total price.
    It also provides a way to update the quantity or delete the item. 
    If there are no items in the cart, a message is displayed instead.
  */
  return (
    <div className={showCart}>
      <button className="close-cart" onClick={closePopup}>
        X
      </button>
      {items.length > 0
        ? items.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name}</span>
              <img src={item.image} alt={item.name} />
              <span>
                <SetQuantity
                  quantity={item.quantity}
                  setQuantity={(newQuantity) =>
                    handleQuantityChange(index, newQuantity)
                  }
                />
              </span>
              <span>{(item.quantity * item.price).toFixed(2)}$</span>
              <div className="cart-buttons">
                <button>Checkout</button>
                <button id={index} onClick={deleteItem}>
                  Delete
                </button>
              </div>
            </div>
          ))
        : "No items"}
    </div>
  );
};

export default Cart;
