import { Minus, Plus } from "lucide-react";
import classes from "./IncrementInput.module.css";

export default function IncrementInput({
  quantity,
  handleIncrease,
  handleDecrease,
}) {
  const maximumIncrease = quantity === 10;
  const minimumDecrease = quantity === 1;
  return (
    <div className={classes.btn}>
      <Minus
        size={15}
        className={`${classes.icon} ${minimumDecrease ? classes.disable : ""}`}
        onClick={handleDecrease}
      />
      <div>{quantity}</div>
      <Plus
        size={15}
        className={`${classes.icon} ${maximumIncrease ? classes.disable : ""}`}
        onClick={handleIncrease}
      />
    </div>
  );
}
