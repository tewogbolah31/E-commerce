import classes from "../styles/Header.module.css";

import headerImg from '../assets/furnitureHeaderImg.png';

export default function Header() {
  return (
    <header className={classes.header__box}>
      <div className={classes.header}>
        <div className={classes.header__1}>
          <h4> New Products</h4>
          <h2>Flexible Chair</h2>
          <p>
            Torem ipsum dolor sit amet, consectetur adipisicing elitsed do
            eiusmo tempor incididunt ut labore et dolore magna
          </p>
          <button>Shop Now</button>
        </div>
        <img
          src={headerImg}
          className={classes.header__Img}
          alt="headerImage"
        />
      </div>
    </header>
  );
}
