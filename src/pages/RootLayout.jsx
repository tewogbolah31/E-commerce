import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import SideCart from "../components/SideCart";
import CartContextProvider from "../store/CartContext";


function RootLayout() {
  return (
    <CartContextProvider>
      <MainNavigation />
      <SideCart />
      <main>
        <Outlet />
      </main>
    </CartContextProvider>
  );
}

export default RootLayout;
