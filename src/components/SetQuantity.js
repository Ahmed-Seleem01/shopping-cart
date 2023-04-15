import { useEffect, useState } from "react";
import "../styles/set-quantity.scss";

const SetQuantity = ({setQuantity=null, quantity}) => {
  const [ownQuantity, setOwnQuantity] = useState(quantity);


  useEffect(()=>{
    if(quantity === 1){
      setOwnQuantity(quantity)
    }
  }, [quantity])
  const handleChange = (e) => {
    setOwnQuantity(e.target.value);
    setQuantity(e.target.value);
  };

  const increment = () => {
    setOwnQuantity(+ownQuantity + 1);
    setQuantity(+ownQuantity + 1);
  };

  const decrement = () => {
    if (ownQuantity > 1) {
      setOwnQuantity(ownQuantity - 1);
      setQuantity(ownQuantity - 1);
    }
  };

  return (
    <div className="set-quantity">
      <button onClick={decrement}>-</button>
      <input
        type="number"
        min="1"
        id="quantity"
        name="quantity"
        value={ownQuantity}
        onChange={handleChange}
      />
      <button onClick={increment}>+</button>
    </div>
  );
};

export default SetQuantity;
