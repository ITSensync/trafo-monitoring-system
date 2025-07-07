"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function TitleChart() {
  const searchParams = useSearchParams();
  const param = searchParams.get("param");

  const getTitleFunction = (param: string) => {
    let result = "";
    switch (param) {
      case "temp":
        result = `Temperature > 90°C Chart`;
        break;
      case "volt":
        result = `Volt < 250V Chart`;
        break;
      case "phaseR":
        result = `Phase R > 300A Chart`;
        break;
      case "phaseS":
        result = `Phase R > 300A Chart`;
        break;
      case "phaseT":
        result = `Phase R > 300A Chart`;
        break;
      default:
        break;
    }

    return result;
  };

  const getTextColor = () => {
    switch (param) {
      case "temp":
        return "text-red-400";
      case "volt":
        return "text-yellow-400";
      case "phaseR":
        return "text-blue-400";
      case "phaseS":
        return "text-blue-400";
      case "phaseT":
        return "text-blue-400";
      default:
        return "text-zinc-900";
    }
  };

  return (
    <p className={`font-poppins font-bold ${getTextColor()} text-xl`}>
      {getTitleFunction(param ?? "")}
    </p>
  );
}
