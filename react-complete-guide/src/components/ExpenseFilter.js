import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  function userSelectedYear(event) {
    props.selectedYear(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <label>Filter By Year</label>
      <div className="expenses-filter__control">
        <select
          name="year"
          value={props.userSelectedYear}
          onChange={userSelectedYear}
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
