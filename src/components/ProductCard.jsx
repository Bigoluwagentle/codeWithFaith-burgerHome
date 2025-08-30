import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <motion.div className="card"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 20, type: "spring", stiffness: 300 }}
  
    >
      <motion.img src={product.image} alt={product.name}
        transition={{ duration: 5, type: "spring", stiffness: 300 }}
        whileHover={{
          scale: 1.2
        }}
      />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <motion.button onClick={() => addToCart(product)}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 5, type: "spring", stiffness: 300 }}
        whileHover={{
          scale: 1.2
        }}
        >Add to Cart</motion.button>
    </motion.div>
    
  );
}
