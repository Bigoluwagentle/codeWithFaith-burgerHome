export default function OrderSummary({ items, total }) {
  return (
    <div className="summary">
      <h2>Order Summary</h2>
      {items.map((item) => (
        <p key={item.id}>
          {item.name} x {item.qty} = ${(item.price * item.qty).toFixed(2)}
        </p>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
