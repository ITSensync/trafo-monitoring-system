"use client";
import BaseLayout from "@/components/BaseLayout";
import ParameterGraph from "@/components/ParameterGraph";
import React from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

export default function page() {
  const defaultClassNames = getDefaultClassNames();
  return (
    <BaseLayout searchBar={false}>
      <div className="p-5 bg-white h-fit mx-5 mt-5 w-[20dvw] rounded-lg">
        <p className="font-semibold font-poppins mb-2 text-sm">Filter by date:</p>
        <button
          popoverTarget="rdp-popover"
          className="input input-border input-warning"
          style={{ anchorName: "--rdp" } as React.CSSProperties}
        >
          {/* {date ? date.toLocaleDateString() : "Pick a date"} */}
          Pick a Date
        </button>
        <div
          popover="auto"
          id="rdp-popover"
          className="dropdown"
          style={{ positionAnchor: "--rdp" } as React.CSSProperties}
        >
          <DayPicker
            classNames={{
              today: `rounded-full bg-amber-400 text-white font-bold`, // Add a border to today's date
              selected: `bg-amber-500 border-amber-500 text-white font-bold`, // Highlight the selected day
              root: `${defaultClassNames.root} shadow-lg p-5 bg-white border border-zinc-300 rounded-lg`, // Add a shadow to the root element
              chevron: `${defaultClassNames.chevron} text-orange-400`,
              button_next: `${defaultClassNames.button_next} `,
            }}
            mode="single"
            // selected={date}
            // onSelect={setDate}
          />
        </div>
      </div>
      <div className="bg-white/95 my-5 mx-5 rounded-xl px-6 pt-5 pb-8 h-fit">
        <ParameterGraph />
      </div>
    </BaseLayout>
  );
}
