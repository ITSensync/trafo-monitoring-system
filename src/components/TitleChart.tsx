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

  return (
    <p className="font-poppins font-bold text-red-400 text-xl">
      {getTitleFunction(param ?? "")}
    </p>
  );
}
