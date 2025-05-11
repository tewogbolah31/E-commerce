import classes from "../styles/Details.module.css";

import image1 from "../assets/bed1.jpeg";
import image2 from "../assets/chair2.jpeg";
import image3 from "../assets/Dinning1.jpeg";
import image4 from "../assets/Lounge1.jpeg";
import image5 from "../assets/officechair1.jpeg";

export default function Details() {
  return (
    <section className={classes.details}>
      <div className={classes.box}>
        <img src={image1} alt="detailsimage" />
        <p>Bedroom</p>
      </div>
      <div className={classes.box}>
        <img src={image2} alt="detailsimage" />
        <p>Living</p>
      </div>
      <div className={classes.box}>
        <img src={image3} alt="detailsimage" />
        <p>Dining</p>
      </div>{" "}
      <div className={classes.box}>
        <img src={image4} alt="detailsimage" />
        <p>Lounge</p>
      </div>{" "}
      <div className={classes.box}>
        <img src={image5} alt="detailsimage" />
        <p>Office Chair</p>
      </div>
    </section>
  );
}
