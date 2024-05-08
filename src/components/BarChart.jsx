import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  // Preprocess data for the bar chart
  const barData = {
    labels: data.map((item) => item.sector),
    datasets: [
      {
        label: "Intensity",
        data: data.map((item) => item.intensity),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar
        data={barData}
        height="400"
        width="400"
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default BarChart;
