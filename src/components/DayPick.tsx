"use client";
import React from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";

export default function DayPick() {
  const defaultClassNames = getDefaultClassNames();
  return (
    <div className="w-1/2 flex flex-col items-end">
      <p className="font-semibold font-poppins mb-2 text-sm">Filter by date:</p>
      <button
        popoverTarget="rdp-popover"
        className="input input-border input-warning w-[15dvw]"
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
  );
}
