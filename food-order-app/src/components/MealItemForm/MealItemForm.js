import { useRef, useState } from "react";
import Input from "../UI/Input/Input";
import classes from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [amountIsValid, setamountIsValid] = useState(true);
  const amountInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0) {
      setamountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input ref={amountInputRef} type="number" label="Amount" />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount.</p>}
    </form>
  );
}

export default MealItemForm;
