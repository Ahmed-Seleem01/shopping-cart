// Importing useEffect and useState hooks from React library
import { useEffect, useState } from "react";
// Importing Link component from React Router
import { Link } from "react-router-dom";
// Importing CSS file for the Shopping component
import "../styles/shopping.scss";

// Declaration of the Shopping component
const Shopping = () => {
  // Initializing state for ingredients as an empty array
  const [ingredients, setIngredients] = useState([]);

  // Only running the effect once, when the component mounts
  useEffect(() => {
    // Fetching data from an external API
    // Setting mode to 'cors' for cross-origin resource sharing
    fetch(
      "https://ahmed-seleem01.github.io/shopping-cart/ingredientsAPI.json",
      {
        mode: "cors",
      }
    )
      // Parsing the response as JSON
      .then((response) => response.json())
      // Updating the state with the data received from the API
      .then((data) => setIngredients(data.ingredients))
      // Handling errors if any
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <div>
        <p>Choose from various ingredients</p>
        {/* Displaying a message to choose from ingredients */}
      </div>

      <div className="ingredients-cards">
        {ingredients.map((ingredient) => (
          // Mapping over the ingredients array and creating a Link component for each ingredient
          <Link key={ingredient.id} to={`/shopping/${ingredient.name}`}>
            {/* Creating a link to the specific ingredient's detail page */}
            <div key={ingredient.id} className="ingredient-card">
              <h2>{ingredient.name}</h2>
              {/* Displaying the ingredient name */}
              <img src={ingredient.image} alt={ingredient.name} />
              {/* Displaying the ingredient image */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
