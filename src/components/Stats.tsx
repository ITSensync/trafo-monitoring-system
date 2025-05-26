"use client";
import React, { useEffect, useState } from "react";
import TopCard from "./Card/TopCard";
import BottomCard from "./Card/BottomCard";
import { io } from "socket.io-client";
import { StatsData } from "@/Types/Stats";
import { utcToWib } from "@/lib/DateFormatter";

export default function Stats() {
  // const [isLoading, setIsLoading] = useState(false);
  const [statsData, setStatsData] = useState<StatsData | null>(null);

  useEffect(() => {
    const ws = io(process.env.WS_URL);

    ws.on("connect", () => {
      console.log("Connected to websocket");
      ws.emit("get-stats");
    });

    ws.on("trafo-stats", (newData) => {
      console.log(newData);
      setStatsData(newData.data);
    });

    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <p className="px-6 mt-6 font-montserrat font-bold">
        Last Update : {statsData ? utcToWib(statsData.lastUpdate) : "-"}
      </p>
      <div className="grid grid-cols-3 px-6 my-6 gap-4">
        <TopCard statsData={statsData} />
      </div>
      <div className="grid grid-cols-5 px-6 gap-4">
        <BottomCard statsData={statsData} />
      </div>
    </>
  );
}
