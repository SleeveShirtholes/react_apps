import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [userSelectedYear, setSelectedYear] = useState("2021");

  function selectedYear(year) {
    setSelectedYear(year);
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === userSelectedYear;
  });

  return (
    <div>
      <div className="expenses">
        <ExpenseFilter
          defaultYear={userSelectedYear}
          selectedYear={selectedYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} />
      </div>
    </div>
  );
}

export default Expenses;
