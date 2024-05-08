import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.topic),
    datasets: [
      {
        data: data.map((item) => item.intensity),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          // Add more colors if needed
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          // Add more colors if needed
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Doughnut
        data={chartData}
        height="400"
        width="400"
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default DoughnutChart;
