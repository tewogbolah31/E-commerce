import { Search, User, ShoppingBag, ChevronDown } from "lucide-react";
import classes from "../styles/MainNavigation.module.css";

export default function MainNavigation() {
  return (
    <>
      <div className={classes.navigation}>
        <img
          src="../../public/fursLogo.png"
          className={classes.navigation__logoImg}
        />
        <div className={classes.IconBox}>
          <Search className={classes.navigation__Icon} />
          <User className={classes.navigation__Icon} />
          <div className={classes.spanBox}>
            <ShoppingBag className={classes.shoppingbag} />
            <span className={classes.Icon__span}>0</span>
          </div>
        </div>
      </div>
      <div className={classes.navigation__headerBox}>
        <nav className={classes.navigation__header}>
          <div className={classes.dropdown}>
            <div className={classes.flex}>
              <button className={classes.dropbtn}>
                Home <ChevronDown className={classes.icon} />
              </button>
            </div>
            <div className={classes.dropdown_content}>
              <a href="#">Home 1</a>
              <a href="#">Home 2</a>
            </div>
          </div>
          <div className={classes.dropdown}>
            <button className={classes.dropbtn}>About </button>
          </div>
          <div className={classes.dropdown}>
            <div className={classes.flex}>
              <button className={classes.dropbtn}>
                Home Furniture <ChevronDown className={classes.icon} />
              </button>
            </div>
            <div className={classes.dropdown_content}>
              <a href="#">Bedroom</a>
              <a href="#">Dining</a>
              <a href="#">Living</a>
            </div>
          </div>
          <div className={classes.dropdown}>
            <div className={classes.flex}>
              <button className={classes.dropbtn}>
                Office Furniture <ChevronDown className={classes.icon} />
              </button>
            </div>
            <div className={classes.dropdown_content}>
              <a href="#">Lounge</a>
              <a href="#">Office Chair</a>
              <a href="#">Office Table</a>
            </div>
          </div>
          <div className={classes.dropdown}>
            <div className={classes.flex}>
              <button className={classes.dropbtn}>
                Hospital Furniture <ChevronDown className={classes.icon} />
              </button>
            </div>
            <div className={classes.dropdown_content}>
              <a href="#">Hospital Bed</a>
              <a href="#">Hospital Utility</a>
            </div>
          </div>
          <div className={classes.dropdown}>
            <button className={classes.dropbtn}>Contact </button>
          </div>
        </nav>
      </div>
    </>
  );
}
