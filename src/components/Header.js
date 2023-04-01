import icon from "../images/ingredients.png";
import cart from "../images/shopping-cart.png";
import "../styles/header.scss";

const Header = ()=>{
  return (
    <div className="header">
      <div>
        <img src= {icon} alt="site icon"/>
        <h1>Ingrediento</h1>
      </div>
      <img src= {cart} alt="cart icon"/>
    </div>
  )
}

export default Header;