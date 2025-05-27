import { useSearchParams } from "next/navigation";
import React from "react";

export default function LegendCard({ totalSite }: { totalSite: number }) {
  const searchParams = useSearchParams();
  const param = searchParams.get("param");

  const getBadgeText = (param: string) => {
    switch (param) {
      case "temp":
        return "Temp > 90°C";
      case "volt":
        return "Volt < 250V";
      case "phase1":
        return "Phase 1 > 300 A";
      case "phase2":
        return "Phase 2 > 300 A";
      case "phase3":
        return "Phase 3 > 300 A";
      default:
        return "-";
    }
  };

  const getBadgeColor = (param: string) => {
    switch (param) {
      case "temp":
        return "badge-error";
      case "volt":
        return "badge-warning";
      case "phase1":
        return "badge-info";
      case "phase2":
        return "badge-info";
      case "phase3":
        return "badge-info";
      default:
        return "badge-ghost";
    }
  };

  return (
    <div className="absolute top-[90px] right-10 z-[1] bg-white w-fit p-4 rounded-lg border border-zinc-300 shadow-xl">
      <p className="font-poppins font-extrabold  underline text-lg">
        Stats by Location
      </p>
      <p className="font-poppins font-light text-sm mb-3">Last 5 Minute</p>
      <div className="flex flex-row items-center gap-2">
        <div
          className={`badge ${getBadgeColor(
            param ? param : "-"
          )} text-white p-3 font-semibold`}
        >
          {getBadgeText(param ? param : "-")}
        </div>
        <p className="font-poppins font-medium text-lg">: {totalSite} Site</p>
      </div>
    </div>
  );
}
