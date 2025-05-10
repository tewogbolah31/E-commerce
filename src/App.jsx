import Articles from "./components/Articles";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainNavigation from "./components/MainNavigation";
import Products from "./components/Products";


export default function App () {
  return <>
    <MainNavigation />
    <Header />
    <Details />
    <Products />
    <Articles />
    <Footer />
  </>
}