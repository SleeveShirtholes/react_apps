import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import meals from "./meals.jpeg";

function Header(props) {
  return (
    <Fragment>
      <div className={classes.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton onClick={props.onShowCart} />
      </div>
      <div className={classes.mainImage}>
        <img src={meals} alt="Meals" />
      </div>
    </Fragment>
  );
}

export default Header;
