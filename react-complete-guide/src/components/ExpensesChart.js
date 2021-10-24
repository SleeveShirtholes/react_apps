import Chart from "./Chart/Chart";

function ExpesnsesChart(props) {
  const chartDataPoints = [
    { label: "Jan", totalAmount: 0 },
    { label: "Feb", totalAmount: 0 },
    { label: "Mar", totalAmount: 0 },
    { label: "Apr", totalAmount: 0 },
    { label: "May", totalAmount: 0 },
    { label: "Jun", totalAmount: 0 },
    { label: "Jul", totalAmount: 0 },
    { label: "Aug", totalAmount: 0 },
    { label: "Sep", totalAmount: 0 },
    { label: "Oct", totalAmount: 0 },
    { label: "Nov", totalAmount: 0 },
    { label: "Dec", totalAmount: 0 },
  ];

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].totalAmount += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpesnsesChart;
