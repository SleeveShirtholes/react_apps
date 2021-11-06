import { useContext } from "react";
import CartContext from "../../store/cart-context";
import MealItemForm from "../MealItemForm/MealItemForm";
import classes from "./MealItem.module.css";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const priceFormatted = `$${props.price.toFixed(2)}`;

  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  }

  return (
    <div className={classes.meal}>
      <ul>
        <li>
          <h3>{props.name}</h3>
        </li>
        <li className={classes.description}>{props.description}</li>
        <li className={classes.price}>{priceFormatted}</li>
      </ul>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </div>
  );
}

export default MealItem;
