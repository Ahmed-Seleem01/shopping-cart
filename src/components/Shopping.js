import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/shopping.scss";

const Shopping = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch("https://ahmed-seleem01.github.io/test-cart/ingredientsAPI.json", {
      mode: 'cors'
    })
      .then((response) => response.json())
      .then((data) => setIngredients(data.ingredients))
      .catch((error) => console.error(error));
  }, []);

  // console.log(ingredients);
  return (
    <div className="container">
      <div>
        <p>Choose from various gredients</p>
      </div>

      <div className="ingredients-cards">
        {ingredients.map((ingredient) => (
          <Link to={`/shopping/${ingredient.name}`}>
            <div key={ingredient.id} className="ingredient-card">
              <h2>{ingredient.name}</h2>
              <img src={ingredient.image} alt={ingredient.name} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
