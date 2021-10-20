import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function getExpenseData(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
  }
  return (
    <div className="new-expense">
      <ExpenseForm getExpenseData={getExpenseData} />
    </div>
  );
}

export default NewExpense;
