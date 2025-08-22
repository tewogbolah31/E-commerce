import Footer from "../components/Footer";
import Input from "../components/UI/Input";
import classes from "../styles/LoginPage.module.css";

export default function LoginPage() {
  return (
    <>
      <div className={classes.box}>
        <h4>LOGIN</h4>
        <p>HOME / SIGNIN</p>
      </div>
      <div className={classes.main}>
        <div className={classes.div}>
          <Input label="Email *" placeholder="Tewogbolasherif@gmail.com" />
          <Input label="Password *" placeholder="********" />
        </div>
        <button className={classes.btn}>signin</button>
        <div className={classes.flex}>
          <button className={classes.btn2}>Create a Account</button>
          <button className={classes.btn3}>Forget password?</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
