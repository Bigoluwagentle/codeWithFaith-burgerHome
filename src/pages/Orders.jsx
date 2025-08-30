import { div } from "framer-motion/client";
import "./Order.css";
export default function Orders() {
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");

  return (
    <div id="order">
      <h1>My Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) :
       (
        orders.map((order) => (
          <div key={order.id} className="order">
            <h3>Order #{order.id}</h3>
            <p>Name: {order.customer.name}</p>
            <p>Phone: {order.customer.phone}</p>
            <p>Address: {order.customer.address}</p>
            {order.items.map((item) => (
              <p key={item.id}>
                {item.name} x {item.qty}
              </p>
            ))}
            <h4>Total: ${order.total.toFixed(2)}</h4>
          </div>
        ))
      )}
    </div>
  );
}
