/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { monitoringService } from "@/data/services";
import { Monitoring } from "@/Types/Monitoring";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useState } from "react";
import LegendCard from "./Card/LegendCard";
import { useSearchParams } from "next/navigation";

export default function ParameterMap() {
  const [latestData, setLatestData] = useState<Monitoring[]>([]);
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

  useEffect(() => {
    loadData();
  }, []);

  const getTotalSiteByParam = (latestData: Monitoring[]) => {
    let count = 0;
    switch (param) {
      case "temp":
        latestData.forEach((item) => {
          if (item.suhu_trafo > 90) {
            count++;
          }
        });
        break;
      case "volt":
        latestData.forEach((item) => {
          if (item.volt < 250) {
            count++;
          }
        });
        break;
      case "phaseR":
        latestData.forEach((item) => {
          if (item.arus1 > 300) {
            count++;
          }
        });
        break;
      case "phaseS":
        latestData.forEach((item) => {
          if (item.arus2 > 300) {
            count++;
          }
        });
        break;
      case "phaseT":
        latestData.forEach((item) => {
          if (item.arus3 > 300) {
            count++;
          }
        });
        break;
      default:
        break;
    }

    return count;
  };

  return (
    <div>
      <LegendCard totalSite={getTotalSiteByParam(latestData)} />
      <LeafletComponent mapData={latestData} />
    </div>
  );
}
