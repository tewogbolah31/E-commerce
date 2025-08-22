import { useState } from "react";

import classes from "../styles/Products.module.css";
import Product from "./Product";
import { HOMEPAGE__PRODUCTS } from "../Utils/data";

export default function Products() {
  const [activeLink, setActiveLink] = useState("");

  const links = ["New Arrivals", "Featured", "On Sale", "Products"];

  return (
    <section className={classes.box}>
      <h3 className={classes.h3}>Our Products</h3>
      <p className={classes.p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
        tempor incididunt ut labore
      </p>
      <div className={classes.select}>
        {links.map((link, index) => (
          <p
            key={index}
            onClick={() => setActiveLink(link)}
            className={`${classes.links}  ${
              activeLink === link ? classes.active : ""
            }`}
          >
            {link}
          </p>
        ))}
      </div>
      <div className={classes.product}>
        {HOMEPAGE__PRODUCTS.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            cancelled={item.Cancelled}
            price={item.price}
            title={item.title}
            img={item.img}
          />
        ))}
      </div>
    </section>
  );
}
