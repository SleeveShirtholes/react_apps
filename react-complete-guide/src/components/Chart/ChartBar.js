import "./ChartBar.css";

function ChartBar(props) {
  let chartBarFillAmount = "0%";

  if (props.maxValue > 0) {
    chartBarFillAmount =
      Math.round((props.totalAmount / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: chartBarFillAmount }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
