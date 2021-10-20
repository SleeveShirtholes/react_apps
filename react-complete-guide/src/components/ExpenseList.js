import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  const [userSelectedYear, setSelectedYear] = useState("2021");

  function selectedYear(year) {
    setSelectedYear(year);
  }

  return (
    <div>
      <div className="expenses">
        <ExpenseFilter
          defaultYear={userSelectedYear}
          selectedYear={selectedYear}
        />
        <ExpenseItem
          title={props.items[0].title}
          date={props.items[0].date}
          amount={props.items[0].amount}
        />
        <ExpenseItem
          title={props.items[1].title}
          date={props.items[1].date}
          amount={props.items[1].amount}
        />
        <ExpenseItem
          title={props.items[2].title}
          date={props.items[2].date}
          amount={props.items[2].amount}
        />
        <ExpenseItem
          title={props.items[3].title}
          date={props.items[3].date}
          amount={props.items[3].amount}
        />
      </div>
    </div>
  );
}

export default ExpenseList;
