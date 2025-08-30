import { products } from "../data";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <button id="view" onClick={() => {
        document.querySelector("#go").click();
      }}>View Cart</button>
      <Link to="/cart" id="go"/>
    </div>
  );
}
