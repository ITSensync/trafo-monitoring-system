/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { logStatsService } from "@/data/services";
import { isoToTime } from "@/lib/DateFormatter";
import { LogStats } from "@/Types/LogStats";
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
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

export default function ParameterGraph({ date }: { date: string }) {
  const searchParams = useSearchParams();
  const param = searchParams.get("param");
  const [logStatsData, setLogStatsData] = useState<LogStats[]>([]);

  const loadData = async () => {
    const response = await logStatsService.getLogStats(date);
    if (response.data) {
      const logData: [] = response.data;
      setLogStatsData(logData);
    } else {
      console.log("NO LOG STATS DATA");
    }
  };

  const filterData = (param: string, itemLog: LogStats) => {
    switch (param) {
      case "temp":
        return itemLog.total_temp;
      case "volt":
        return itemLog.total_volt;
      case "phaseR":
        return itemLog.total_arus1;
      case "phaseS":
        return itemLog.total_arus2;
      case "phaseT":
        return itemLog.total_arus3;
      default:
        break;
    }
  };

  const getColorGraph = () => {
    switch (param) {
      case "temp":
        return "#FF6467";
      case "volt":
        return "#FACC15";
      case "phaseR":
        return "#60A5FA";
      case "phaseS":
        return "#60A5FA";
      case "phaseT":
        return "#60A5FA";
      default:
        return "#000000";
    }
  };

  useEffect(() => {
    loadData();
  }, [date]);

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
        color: getColorGraph(),
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Total Site",
        },
      },
    },
  };

  const data = {
    labels: logStatsData.map((itemLog: LogStats) => {
      return isoToTime(itemLog.time);
    }),
    datasets: [
      {
        label: "Daily Data",
        data: logStatsData.map((itemLog: LogStats) => {
          return filterData(param ? param : "", itemLog);
        }), // nilai antara 0 - 4200
        borderColor: getColorGraph(),
        backgroundColor: "rgba(38, 171, 255, 0.2)",
        tension: 0.1,
        // fill: true,
      },
    ],
  };
  return <Line options={options} height={100} data={data}></Line>;
}
