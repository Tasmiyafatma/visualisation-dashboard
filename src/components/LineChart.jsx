import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.published),
    datasets: [
      {
        label: "Intensity",
        data: data.map((item) => item.intensity),
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <Line
        data={chartData}
        height="400"
        width="400"
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default LineChart;
