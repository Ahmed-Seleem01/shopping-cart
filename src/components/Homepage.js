import "../styles/homepage.scss";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="description">
        <h2>Ingrediento</h2>
        <p>Great taste starts here.</p>
        <button><Link to="/shopping">Shop Now</Link></button>
      </div>
    </div>
  );
};

export default Homepage;
