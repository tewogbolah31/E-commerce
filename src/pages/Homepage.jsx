import Articles from "../components/Articles";
import Details from "../components/Details";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";


export default function Homepage() {
  return (
    <>
      <Header />
      <Details />
      <Products />
      <Articles />
      <Footer />
    </>
  );
}
