import React from "react";

export default function LegendCard() {
  return (
    <div className="absolute top-[90px] right-10 z-[1] bg-white w-fit p-4 rounded-lg border border-zinc-300 shadow-xl">
      <p className="font-poppins font-extrabold  underline text-lg">
        Stats by Location
      </p>
      <p className="font-poppins font-light text-sm mb-3">Last 5 Minute</p>
      <div className="flex flex-row items-center gap-2">
        <div className="badge badge-error text-white p-3 font-semibold">
          Suhu {`>`} 90°C{" "}
        </div>
        <p className="font-poppins font-medium text-lg">: 600 Site</p>
      </div>
    </div>
  );
}
