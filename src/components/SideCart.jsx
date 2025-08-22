import { useContext } from "react";
import CartBox from "./SideCartBox";
import Modal from "./Modal";

import { AnimatePresence } from "motion/react";

import { CartContext } from "../store/CartContext";

export default function SideCart() {
  const { openSideCart, closeCart } = useContext(CartContext);

  return (
    <AnimatePresence>
      {openSideCart && (
        <Modal open={openSideCart} onclose={closeCart}>
          <CartBox />
        </Modal>
      )}
    </AnimatePresence>
  );
}
