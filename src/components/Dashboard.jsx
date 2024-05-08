import { useState, useEffect } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log("Fetching data...");
      const response = await fetch("http://localhost:8000/dashboard-data");
      const data = await response.json();
      setChartData(data.slice(0, 20));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="w-full h-[90vh] overflow-y-auto">
      <div className="w-full bg-white rounded-lg shadow-lg p-6 border border-gray-100 mt-8">
        <p className="text-2xl font-bold p-4">Bar Chart</p>
        <BarChart data={chartData} />
      </div>
      <div className="w-full bg-white rounded-lg shadow-lg p-6 border border-gray-100 mt-12">
        <p className="text-2xl font-bold p-4">Line Chart</p>
        <LineChart data={chartData} />
      </div>

      <div className="w-full bg-white rounded-lg shadow-lg p-6 border border-gray-100 mt-12">
        <p className="text-2xl font-bold p-4">Pie Chart</p>
        <PieChart data={chartData} />
      </div>

      <div className="w-full bg-white rounded-lg shadow-lg p-6 border border-gray-100 mt-12 mb-12">
        <p className="text-2xl font-bold p-4">Doughnut Chart</p>
        <DoughnutChart data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
