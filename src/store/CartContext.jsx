import {
  createContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import { useLocation } from "react-router-dom";
import { HOMEPAGE__PRODUCTS } from "../Utils/data";

export const CartContext = createContext({
  openSideCart: false,
  openCart: () => {},
  closeCart: () => {},
  cartItems: [],
  cartItemsWithSubtotal: [],
  handleAddToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  clearCart: () => {},
  totalItems: 0,
  totalPrice: 0,
});

// eslint-disable-next-line react/prop-types
export default function CartContextProvider({ children }) {
  const [openSideCart, setOpenSideCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openCart = useCallback(() => setOpenSideCart(true), []);
  const closeCart = useCallback(() => setOpenSideCart(false), []);

  const location = useLocation();

  useEffect(() => {
    // Auto-close side cart if user navigates to the cart page
    if (location.pathname === "/cart") {
      setOpenSideCart(false);
    }
  }, [location]);

  const handleAddToCart = useCallback((itemID) => {
    const selected = HOMEPAGE__PRODUCTS.find((p) => p.id === itemID);
    if (!selected) return;

    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === selected.id);
      if (exists) {
        return prev.map((i) =>
          i.id === selected.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...selected, quantity: 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback((itemID) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemID));
  }, []);

  const increaseQuantity = useCallback((itemID) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemID
          ? { ...item, quantity: Math.min(item.quantity + 1, 10) }
          : item
      )
    );
  }, []);

  const decreaseQuantity = useCallback((itemID) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemID
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    );
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0),
    [cartItems]
  );

  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
        0
      ),
    [cartItems]
  );

  const cartItemsWithSubtotal = useMemo(() => {
    return cartItems.map((item) => ({
      ...item,
      subtotal: (item.price || 0) * (item.quantity || 0),
    }));
  }, [cartItems]);

  const cartContext = {
    openSideCart,
    openCart,
    closeCart,
    handleAddToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartItems,
    cartItemsWithSubtotal,
    totalItems,
    totalPrice,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
