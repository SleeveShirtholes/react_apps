import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const allTotalAmounts = props.dataPoints.map(
    (datapoint) => datapoint.totalAmount
  );
  const maxValue = Math.max(...allTotalAmounts);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={Math.random()}
          totalAmount={dataPoint.totalAmount}
          label={dataPoint.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
}

export default Chart;
