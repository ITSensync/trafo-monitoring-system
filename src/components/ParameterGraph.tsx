"use client";
import {
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

export default function ParameterGraph() {
  Chart.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Suhu Trafo Chart",
        font: { size: 20, family: "Poppins" },
        color: "#FF6467",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Jam",
        },
      },
      y: {
        title: {
          display: true,
          text: "Jumlah Site",
        },
      },
    },
  };

  const data = {
    labels: Array.from(
      { length: 25 },
      (_, i) => `${i.toString().padStart(2, "0")}:00`
    ), // ['00', '01', ..., '24']
    datasets: [
      {
        label: "Data Harian",
        data: Array.from({ length: 25 }, () =>
          Math.floor(Math.random() * 4201)
        ), // nilai antara 0 - 4200
        borderColor: "#FF6467",
        backgroundColor: "rgba(38, 171, 255, 0.2)",
        tension: 0.1,
        // fill: true,
      },
    ],
  };
  return <Line options={options} height={100} data={data}></Line>;
}
