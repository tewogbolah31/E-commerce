import { CircleX } from "lucide-react";
import classes from "../styles/CartItem.module.css";
import IncrementInput from "./UI/IncrementInput";
import { currencyFormatter } from "../Utils/formatting";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function CartItem({ img, title, price, quantity, id, subtotal }) {
  const { decreaseQuantity, increaseQuantity, removeFromCart} =
    useContext(CartContext);

  return (
    <li className={classes.item}>
      <div className={classes.one}>
        <img src={img} className={classes.img} />
      </div>
      <p className={classes.two}>{title}</p>
      <p className={classes.three}>{currencyFormatter.format(price)}</p>
      <div className={classes.four}>
        <div className={classes.adjust}>
          <IncrementInput
            quantity={quantity}
            handleDecrease={() => decreaseQuantity(id)}
            handleIncrease={() => increaseQuantity(id)}
          />
        </div>
      </div>
      <p className={classes.five}>{currencyFormatter.format(subtotal)}</p>
      <div className={classes.six}>
        <CircleX
          strokeWidth={1}
          size={20}
          className={classes.cancel}
          onClick={() => removeFromCart(id)}
        />
      </div>
    </li>
  );
}
