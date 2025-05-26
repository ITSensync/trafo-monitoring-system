/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { monitoringService } from "@/data/services";
import { Monitoring } from "@/Types/Monitoring";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useState } from "react";
import LegendCard from "./Card/LegendCard";

export default function ParameterMap() {
  const [latestData, setLatestData] = useState<Monitoring[]>([]);
  const LeafletComponent = useMemo(
    () =>
      dynamic(() => import("@/components/LeafletMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

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

  return (
    <div>
      <LegendCard totalSite={latestData ? latestData.length : 0} />
      <LeafletComponent mapData={latestData} />
    </div>
  );
}
