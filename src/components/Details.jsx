import classes from "../styles/Details.module.css";

export default function Details() {
  return (
    <section className={classes.details}>
      <div className={classes.box}>
        <img src="../../public/bed1.jpeg" />
        <p>Bedroom</p>
      </div>
      <div className={classes.box}>
        <img src="../../public/chair2.jpeg" />
        <p>Living</p>
      </div>
      <div className={classes.box}>
        <img src="../../public/Dinning1.jpeg" />
        <p>Dining</p>
      </div>{" "}
      <div className={classes.box}>
        <img src="../../public/Lounge1.jpeg" />
        <p>Lounge</p>
      </div>{" "}
      <div className={classes.box}>
        <img src="../../public/officechair1.jpeg" />
        <p>Office Chair</p>
      </div>
    </section>
  );
}
