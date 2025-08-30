import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./CartPage.css";
import { div } from "framer-motion/client";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart, total } = useCart();
  return (
    <div id="cartpage">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div id="carts">
          <section>
          {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
                <div>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
          ))}
          </section>
          <article>
            <h2>Total: ${total.toFixed(2)}</h2>
            <Link to="/checkout" className="btn">Proceed to Checkout</Link>
          </article>
          
        </div>
      )}
    </div>
  );
}
