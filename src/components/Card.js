// Importing necessary dependencies
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SetQuantity from "./SetQuantity";
import "../styles/card.scss";

// Card component definition
const Card = ({ setHeaderCart }) => {
  // State variables for the ingredient and its quantity
  const [ingredient, setIngredient] = useState({});
  const [quantity, setQuantity] = useState(1);

  // Extracting the ingredient name from the URL parameters
  const ingredientName = useParams().name;

  // useEffect hook to update the quantity state variable
  useEffect(() => {
    setQuantity(quantity);
  }, [quantity]);

  // Function to add the selected ingredient to the header cart
  const handleSubmit = () => {
    ingredient.quantity = quantity;
    const updatedObj = Object.assign({}, ingredient);
    setHeaderCart(updatedObj);
    setQuantity(1);
  };

  // useEffect hook to fetch data from the ingredients API and update the ingredient state variable
  useEffect(() => {
    fetch(
      "https://ahmed-seleem01.github.io/shopping-cart/ingredientsAPI.json",
      {
        mode: "cors",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const selectedIngredient = data.ingredients.find(
          (ingredient) => ingredient.name === ingredientName
        );
        setIngredient(selectedIngredient);
      })
      .catch((error) => console.error(error));
  }, [ingredientName]);

  // Card component rendering
  return (
    <div className="card">
      <h2>{ingredient.name}</h2>
      <img src={ingredient.image} alt={ingredient.name} />
      <p>{ingredient.description}</p>
      <p>price: ${ingredient.price}</p>
      <div>
        <SetQuantity quantity={quantity} setQuantity={setQuantity} />
        <button className="add-btn" onClick={handleSubmit}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

// Exporting the Card component as the default module
export default Card;
