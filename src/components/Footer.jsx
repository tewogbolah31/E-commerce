import classes from "../styles/Footer.module.css";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.box}>
        <div className={classes.div1}>
          <h5 className={classes.header}>ABOUT US</h5>
          <p className={classes.div1_p}>
            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
            incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud.
          </p>
          <div className={classes.icons}>
            <IoLogoFacebook className={classes.icon} />
            <FaTwitter className={classes.icon_twitter} />
            <AiFillLinkedin className={classes.icon} />
            <FaYoutube className={classes.icon} />
            <FaPinterest className={classes.icon} />
          </div>
        </div>
        <div className={classes.div2}>
          <h5 className={classes.header}>INFORMATION</h5>
          <a href="#">About Us</a>
          <a href="#">Manufactures</a>
          <a href="#">Tracking Order</a>
          <a href="#">Privacy and Policy</a>
          <a href="#">Terms and condition</a>
        </div>
        <div className={classes.div3}>
          <h5 className={classes.header}>MY ACCOUNT</h5>
          <a href="#">Login</a>
          <a href="#">My cart</a>
          <a href="#">WishList</a>
          <a href="#">Compare</a>
          <a href="#">Account</a>
        </div>
        <div className={classes.div4}>
          <h5 className={classes.header}>NEWSLETTER</h5>
          <input
            type="email"
            placeholder="Enter your email address"
            className={classes.input}
          />
          <button className={classes.subscribe}>
            <RiTelegram2Line/>
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}
