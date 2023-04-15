import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SetQuantity from "./SetQuantity";
import "../styles/card.scss";

const Card = ({setHeaderCart}) => {
  const [ingredient, setIngredient] = useState({});
  const [quantity, setQuantity] = useState(1);
  const ingredientName = useParams().name;

  // const handleChange = (e)=>{
  //   console.log("e.target")
  //   setQuantity(5)
  // }
;
  useEffect(()=>{
    setQuantity(quantity)
  },[quantity])

  const handleSubmit = ()=>{
    setHeaderCart([quantity, ingredient.price, ingredient.name]);
    setQuantity(1);
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
        <SetQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button className="add-btn" onClick={handleSubmit} >Add to cart</button>
      </div>
    </div>
  );
}

export default Card;
