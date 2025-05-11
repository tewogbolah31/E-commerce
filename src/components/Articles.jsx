import classes from "../styles/Articles.module.css";

import banner1 from '../assets/images_banner_1.jpg';
import banner2 from '../assets/images_banner_2.jpg';


export default function Articles() {
  return (
    <section>
      <div className={classes.article}>
        <figure className={classes.figure}>
          <img
            src={banner1}
            alt="banner1"
            className={classes.img}
          />
          <div className={classes.div1}>
            <h2 className={classes.h2}>Sale Furniture for summer</h2>
            <p className={classes.p}>Great Discounts here</p>
          </div>
        </figure>
        <figure className={classes.figure}>
          <img
            src={banner2}
            alt="banner2"
            className={classes.img}
          />
          <div className={classes.div2}>
            <h2 className={classes.h2}>Office Chair For Best Offer</h2>
            <p className={classes.p}>Great Discounts here</p>
          </div>
        </figure>
      </div>
      <div className={classes.news}>
        <h3 className={classes.h3}>Latest News</h3>
        <p className={classes.p1}>
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore
        </p>
        <p className={classes.p2}>There are no articles found!</p>
      </div>
    </section>
  );
}
