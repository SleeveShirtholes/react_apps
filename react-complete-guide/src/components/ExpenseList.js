import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  const data = props.expenses;

  console.log(data.length);

  // Iterate through the data to display each expense
  for (let index = 0; index < data.length; index++) {
    const expense_title = data[index].title;
    const expense_amount = data[index].amount;
    const expense_date = data[index].date;

    <ExpenseItem
      title={expense_title}
      amount={expense_amount}
      date={expense_date}
    />;
  }
  return <div className="expenses"></div>;
}

export default ExpenseList;
