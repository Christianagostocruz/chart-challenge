import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SpendingAmount = ({ spendingData }) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels: spendingData.map(({ day }) => day),
    datasets: [
      {
        label: day,
        data: spendingData.map(({ amount }) => amount),
        backgroundColor: "rgb(234 88 12)",
        hoverBackgroundColor: "rgb(0,0,255)",

        borderRadius: 5,
      },
    ],
  };
  return (
    <div className="flex justify-between mt-32 mb-8 relative py-4 border-b-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default SpendingAmount;
