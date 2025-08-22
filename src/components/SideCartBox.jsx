import classes from "../styles/SideCartBox.module.css";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import CartBoxItem from "./SideCartBoxItem";
import { currencyFormatter } from "../Utils/formatting";
import { Link } from "react-router-dom";

export default function CartBox() {
  const { closeCart, cartItems,totalPrice } = useContext(CartContext);

  const items = cartItems;
  const shouldScroll = items.length > 2;

  return (
    <>
      <div className={classes.box}>
        <h3>Cart</h3>
        <div className={classes.closebtn} onClick={closeCart}>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={`${classes.list} ${shouldScroll ? classes.scroll : ""}`}>
        {items.length === 0 && <p className={classes.center}> No cart Item</p>}

        {items && items.map((item) => <CartBoxItem key={item.id} {...item} />)}
      </ul>
      <Link className={classes.buttom} to="/cart">
        <p>View Cart</p>
        <button>{currencyFormatter.format(totalPrice)}</button>
      </Link>
    </>
  );
}
