import { useState } from "react";
import Footer from "../components/Footer";
import Input from "../components/UI/Input";
import classes from "../styles/SignupPage.module.css";

export default function SignupPage() {
  const [disabled, setDisabaled] = useState(true);
  return (
    <>
      <div className={classes.box}>
        <h4>Create account</h4>
        <p>HOME / SIGNIN</p>
      </div>
      <div className={classes.main}>
        <div className={classes.main_div}>
          <div className={classes.flex}>
            <Input label="First Name *" />
          </div>
          <div className={classes.flex}>
            <Input label="Last Name *" />
          </div>
        </div>
        <div className={classes.main_div2}>
          <Input label="Email *" />
          <Input label="Phone *" />
          <Input label="Password *" />
          <Input label="Confirm Password *" />
          <label className={classes.custom_checkbox}>
            <input
              type="checkbox"
              onClick={() => {
                setDisabaled((disabled) => !disabled);
              }}
            />
            <span className={classes.checkmark}></span>
            I&apos;ve read and accept the Privacy Policy
          </label>
          <p className={classes.paragraph}>
            By signing up, you agree to our{" "}
            <span className={classes.terms}>Terms of Service.</span> Learn how
            we collect and use your data in our{" "}
            <span className={classes.terms}>Privacy Policy. </span>{" "}
          </p>
          <button className={classes.btn1} disabled={disabled}>
            Signup
          </button>
          <button className={classes.btn2}>Already have a account?</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
