import classes from "../styles/Product.module.css";

import { Heart, ShoppingCart } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function Product({ title, cancelled, price, img }) {
  return (
    <div className={classes.product}>
      <img className={classes.img} src={img} />
      <Heart className={classes.heart} size={18} />
      <div className={classes.cart}>
        <ShoppingCart size={18} className={classes.icon}/>
        <button className={classes.btn}>Add to cart</button>
      </div>
      <div className={classes.box}>
        <a href="#" className={classes.link}>
          {title}
        </a>
        <div>
          <p className={classes.price}>{cancelled}</p>
          <p className={classes.amount}>{price}</p>
        </div>
      </div>
    </div>
  );
}
