import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  const monthlyExpense = props.data.map((data) => {
    return data.value;
  });
  const maxExpense = Math.max(...monthlyExpense);
  console.log(props.data);
  return (
    <div className="chart">
      {props.data.map((data) => (
        <ChartBar key={data.label} label={data.label} max={maxExpense} expense={data.value} />
      ))}
    </div>
  );
}

export default Chart;
