import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [buttonClicked, getButtonClicked] = useState(false);

  function getExpenseData(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
    getButtonClicked(false);
  }

  function showExpenseForm() {
    getButtonClicked(true);
  }

  function cancelNewExpense() {
    getButtonClicked(false);
  }

  return (
    <div className="new-expense">
      {buttonClicked ? (
        <ExpenseForm
          getExpenseData={getExpenseData}
          buttonClickedHandler={cancelNewExpense}
        />
      ) : (
        <button onClick={showExpenseForm}>Add Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
