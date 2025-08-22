import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";

import classes from "../styles/Modal.module.css";

export default function Modal({ children, open, onclose }) {
  const dialog = useRef();

  useEffect(() => {
  const modal = dialog.current;

  if (open) {
    modal.showModal();
    document.body.style.overflow = "hidden"; // 🔒 disable scroll
  } else {
    modal.close();
    document.body.style.overflow = ""; // ✅ restore scroll
  }

  // Cleanup on unmount
  return () => {
    document.body.style.overflow = "";
  };
}, [open]);


   const handleClick = (e) => {
    // if clicked directly on the <dialog>, it's a backdrop click
    if (e.target === dialog.current) {
      onclose();
    }
  };

  return createPortal(
    <dialog ref={dialog} className={classes.modal} onClose={onclose} onClick={handleClick}>
      <motion.div
        initial={{ opacity: 0, x: 250 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 250 }}
        transition={{ duration: 0.3 }}
        className={classes.drop}
      >
        {children}
      </motion.div>
    </dialog>,
    document.getElementById("modal")
  );
}
