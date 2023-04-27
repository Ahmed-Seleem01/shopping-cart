// Import the 'Link' component from the 'react-router-dom' library and the 'homepage.scss' stylesheet
import { Link } from "react-router-dom";
import "../styles/homepage.scss";

// Define a functional component called 'Homepage'
const Homepage = () => {
  return (
    // Render a div element with the class name 'homepage'
    <div className="homepage">
      {/* Render a div element with the class name 'description' to hold information */}
      <div className="description">
        <h2>Ingrediento</h2>
        <p>Great taste starts here.</p>
        {/* Render a Link component that points to the '/shopping' route, when the button is clicked */}
        <Link to="/shopping">
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

// Export the 'Homepage' component as a default export
export default Homepage;
