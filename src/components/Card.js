import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/card.scss";

const Card = ({setHeaderCart}) => {
  const [ingredient, setIngredient] = useState({});
  const [quantity, setQuantity] = useState(1);
  const ingredientName = useParams().name;

  const handleChange = (e)=>{
    setQuantity(e.target.value)
  }

  const handleSubmit = ()=>{
    setHeaderCart([quantity, ingredient.price, ingredient.name]);
    setQuantity(1);
  }

  const increment = ()=>{
    setQuantity(+quantity + 1)
  }

  const decrement = ()=>{
    if(quantity > 1){
      setQuantity(quantity - 1)
    }
  }
  useEffect(() => {
    fetch('https://ahmed-seleem01.github.io/test-cart/ingredientsAPI.json', {
      mode: 'cors'
    })
      .then(response => response.json())
      .then(data => {
        const selectedIngredient = data.ingredients.find(ingredient => ingredient.name === ingredientName);
        setIngredient(selectedIngredient);
      })
      .catch(error => console.error(error));
  }, [ingredientName]);

  return (
    <div className = "card">
      <h2>{ingredient.name}</h2>
      <img src={ingredient.image} alt={ingredient.name} />
      <p>{ingredient.description}</p>
      <p>price: ${ingredient.price}</p>
      <div>
        <div>
          <button onClick={decrement}>-</button>
          <input type= "number" min = "1" id="quantity" name="quantity" value={quantity} onChange={handleChange} />
          <button onClick={increment}>+</button>
        </div>
        <button className="add-btn" onClick={handleSubmit} >Add to cart</button>
      </div>
    </div>
  );
}

export default Card;
