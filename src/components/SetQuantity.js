// Importing style for the component
import "../styles/set-quantity.scss";

const SetQuantity = ({ setQuantity = null, quantity }) => {
  // Function to handle input change
  const handleChange = (e) => {
    // Update quantity state with input value
    setQuantity(e.target.value);
  };

  // Function to increment quantity
  const increment = () => {
    setQuantity(+quantity + 1);
  };

  // Function to decrement quantity
  const decrement = () => {
    // Check if quantity is greater than 1 as quantity must be positive
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Render the quantity input field and buttons
  return (
    <div className="set-quantity">
      <button onClick={decrement}>-</button>
      <input
        type="number"
        min="1"
        id="quantity"
        name="quantity"
        value={quantity}
        onChange={handleChange}
      />
      <button onClick={increment}>+</button>
    </div>
  );
};

// Export the SetQuantity component for usage
export default SetQuantity; 
