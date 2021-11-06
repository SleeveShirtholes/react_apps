import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const [buttonIsHighlighted, setbuttonIsHighlighted] = useState(false);
  const CartCtx = useContext(CartContext);

  function cartNumber(currNumber, item) {
    return currNumber + item.amount;
  }

  const { items } = CartCtx;

  const numberOfCartItems = items.reduce(cartNumber, 0);

  const buttonClass = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setbuttonIsHighlighted(true);

    const timer = setTimeout(() => {
      setbuttonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={buttonClass} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
