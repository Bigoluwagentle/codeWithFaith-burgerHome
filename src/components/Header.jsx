import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Header.css";

export default function Header() {
  const { cart } = useCart();
  return (
    <div id="header">
      <header className="header">
        <Link to="/" className="logo">🍔 BurgerHouse</Link>
        <nav>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
          {/* <Link to="/orders">Orders</Link> */}
        </nav>
      </header>
      <h1>Welcome to Burger House Where Every Bite is Happiness 🍔</h1>
    </div>
    
  );
}
