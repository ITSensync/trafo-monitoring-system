/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { monitoringService } from "@/data/services";
import { Monitoring } from "@/Types/Monitoring";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useState } from "react";
import LegendCard from "./Card/LegendCard";
import { useSearchParams } from "next/navigation";
import { StatsData } from "@/Types/Stats";

export default function ParameterMap() {
  const [latestData, setLatestData] = useState<Monitoring[]>([]);
  const [statsData, setStatsData] = useState<StatsData>();
  const searchParams = useSearchParams();
  const param = searchParams.get("param");
  const LeafletComponent = useMemo(
    () =>
      dynamic(() => import("@/components/LeafletMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 5 * 60 * 1000); // 5 menit = 300.000 ms

    return () => clearInterval(interval); // bersihkan saat komponen unmount
  }, []);

  const loadData = async () => {
    const response = await monitoringService.getLatest();
    if (response.data) {
      const monitoringData: Monitoring[] = response.data;
      setLatestData(monitoringData);
    } else {
      console.log("NO DATA");
    }
  };

  const loadStats = async () => {
    const responseStats = await monitoringService.getStats();
    if (responseStats.data) {
      const statsResponseData: StatsData = responseStats.data;
      setStatsData(statsResponseData);
    } else {
      console.log("NO STATS DATA");
    }
  };

  useEffect(() => {
    loadData();
    loadStats();
  }, []);

  const getTotalSiteByParam = () => {
    let countSite = 0;
    switch (param) {
      case "temp":
        countSite = statsData ? statsData.cpuMoreThan90C : 0;
        break;
      case "volt":
        countSite = statsData ? statsData.lessThan250V : 0;
        break;
      case "phaseR":
        countSite = statsData ? statsData.moreThan300A1 : 0;
        break;
      case "phaseS":
        countSite = statsData ? statsData.moreThan300A2 : 0;
        break;
      case "phaseT":
        countSite = statsData ? statsData.moreThan300A3 : 0;
        break;
      default:
        break;
    }

    return countSite;
  };

  return (
    <div>
      <LegendCard totalSite={getTotalSiteByParam()} />
      <LeafletComponent mapData={latestData} />
    </div>
  );
}
