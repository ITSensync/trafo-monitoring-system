"use client";
import React, { useState } from "react";
import DayPick from "./DayPick";
import TitleChart from "./TitleChart";
import ParameterGraph from "./ParameterGraph";
import { dateToYYYYMMDD } from "@/lib/DateFormatter";

export default function Graph() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <div className="bg-white/95 my-5 mx-5 rounded-xl px-6 pt-5 pb-4 h-fit">
      <div className="flex flex-row items-center justify-between w-full px-5 mb-4">
        <DayPick date={date} setDate={setDate} />
        <TitleChart />
      </div>
      <ParameterGraph date={dateToYYYYMMDD(date ? date : new Date())} />
    </div>
  );
}
