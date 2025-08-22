import classes from "../styles/Cart.module.css";
import CartItem from "./CartItem";
import Footer from "../components/Footer";
import { useContext } from "react";
import { CartContext } from "../store/CartContext";
import { currencyFormatter } from "../Utils/formatting";

export default function Cart() {

  const {totalPrice, clearCart, cartItemsWithSubtotal : items} = useContext(CartContext);
  return (
    <>
      <div className={classes.box}>
        <h4>CART</h4>
        <p>HOME / CART</p>
      </div>
      <div className={classes.header}>
        <h5 className={classes.one}>Image</h5>
        <h5 className={classes.two}>Product Name</h5>
        <h5 className={classes.three}>Util Price</h5>
        <h5 className={classes.four}>QTY</h5>
        <h5 className={classes.five}>Subtotal</h5>
        <h5 className={classes.six}>Action</h5>
      </div>
      <ul>
      {items.map((item) => <CartItem key={item.id} {...item} />)}
      </ul>
      <div className={classes.grand}>
        <p className={classes.p1}>Grand Total:</p>
        <p className={classes.p2}>{currencyFormatter.format(totalPrice)}</p>
      </div>

      <div className={classes.coupon}>
        <div className={classes.div1}>
          <input
            type="number"
            name="number"
            className={classes.input}
            placeholder="Enter your coupon if you have one"
          />
          <button className={classes.btn1}>Apply coupon</button>
        </div>
        <div className={classes.div2}>
          <button className={classes.btn2} onClick={clearCart}>Clear cart</button>
          <button className={classes.btn3}>Proceed to checkout</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
