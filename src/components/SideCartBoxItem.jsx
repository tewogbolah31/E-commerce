import { useContext } from "react";
import classes from "../styles/SideCartBoxItem.module.css";
import IncrementInput from "./UI/IncrementInput";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../Utils/formatting";

export default function CartBoxItem({ img, title, price, quantity, id }) {
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);
  return (
    <li className={classes.list}>
      <img src={img} alt="testing" className={classes.img} />
      <div className={classes.center}>
        <a>{title}</a>
        <div className={classes.pack}>
          <p className={classes.p1}>1</p> x{" "}
          <p className={classes.p2}>{currencyFormatter.format(price)}</p>
        </div>
        <IncrementInput
          quantity={quantity}
          handleDecrease={() => decreaseQuantity(id)}
          handleIncrease={() => increaseQuantity(id)}
        />
      </div>
      <button className={classes.x} onClick={() => removeFromCart(id)}>
        X
      </button>
    </li>
  );
}
