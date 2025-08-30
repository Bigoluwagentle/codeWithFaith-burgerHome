import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Home.css";
import Img1 from "./img1.jpg";
import Img2 from "./img2.jpg";
import Img3 from "./img3.jpg";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to BurgerHouse 🍔</h1>
      <p>Delicious burgers, fries, and more delivered to your door!</p>
      <div className="container">
        <motion.img src={Img1} alt="" 
          initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 20, delay:0.5, type: "spring", stiffness: 300 }}
          whileHover={{
            scale: 1.1
          }}
        />
        <motion.img src={Img2} alt="" 
          initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 20, delay:0.5, type: "spring", stiffness: 300 }}
          whileHover={{
            scale: 1.1
          }}
        />
        <motion.img src={Img3} alt="" 
          initial={{ opacity: 0, y:100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 20, delay:0.5, type: "spring", stiffness: 300 }}
        />
      </div>
      <motion.button
        initial={{ x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 5, type: "spring", stiffness: 300 }}
        whileHover={{
          scale: 1.2
        }}
        onClick={() => {
          document.querySelector("#menu").click();
        }}
      >View Menu</motion.button>

      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 20, delay: 0.5, type: "spring", stiffness: 300 }}
          whileHover={{
            scale: 1.2
          }}
        >
          <i class="fa-solid fa-id-card"></i>
          <h4>Accept Card</h4>
          <p>Card accepted on delivery resturant for delivery.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 20, delay: 0.6, type: "spring", stiffness: 300 }}
          whileHover={{
            scale: 1.2
          }}
        >
          <i class="fa-solid fa-utensils"></i>
          <h4>Online Booking</h4>
          <p>We have space at the time we wish to book.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 20, delay: 0.7, type: "spring", stiffness: 300 }}
          whileHover={{
            scale: 1.2
          }}
        >
          <i class="fa-solid fa-car"></i>
          <h4>Home Delivery</h4>
          <p>You are welcome to feel a good coffe ever.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 20, delay: 0.6, type: "spring", stiffness: 300 }}
          whileHover={{
            scale: 1.2
          }}
        >
          <i class="fa-solid fa-location-dot"></i>
          <h4>Best Location</h4>
          <p>Using logical source we provide a healthy fast food.</p>
        </motion.div>
      </div>
      <Link to="/menu" id="menu"></Link>
    </div>
  );
}
