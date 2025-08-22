import classes from "../styles/Product.module.css";

import { Heart, ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../Utils/formatting";

// eslint-disable-next-line react/prop-types
export default function Product({ title, cancelled, price, img, id }) {
  const { handleAddToCart } = useContext(CartContext);
  return (
    <motion.div
      className={classes.product}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "springc", stiffness: 500 }}
    >
      <img className={classes.img} src={img} />
      <Heart className={classes.heart} size={18} />
      <div className={classes.cart}>
        <ShoppingCart size={18} className={classes.icon} />
        <button className={classes.btn} onClick={() => handleAddToCart(id)}>
          Add to cart
        </button>
      </div>
      <div className={classes.box}>
        <a href="#" className={classes.link}>
          {title}
        </a>
        <div>
          <p className={classes.price}>{cancelled}</p>
          <p className={classes.amount}>{currencyFormatter.format(price)}</p>
        </div>
      </div>
    </motion.div>
  );
}
