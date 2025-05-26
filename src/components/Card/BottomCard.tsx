import React from "react";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import ElectricMeterIcon from "@mui/icons-material/ElectricMeter";
import FlashAutoIcon from "@mui/icons-material/FlashAuto";
import Link from "next/link";
import { StatsData } from "@/Types/Stats";

export default function BottomCard({
  statsData,
}: {
  statsData: StatsData | null;
}) {
  return (
    <>
      <div className="h-[20dvh] w-full bg-white rounded-xl p-4 flex items-center">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-start gap-2">
            <p className="font-poppins font-extrabold text-3xl">
              {statsData ? statsData.cpuMoreThan90C : 0}
            </p>
            <p className="font-poppins text-xs">{"Suhu > 90°C"}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <DeviceThermostatIcon className="" color="error" fontSize="large" />
            <div className="flex flex-row">
              <Link
                href={"/map"}
                className="tooltip tooltip-primary hover:cursor-pointer"
                data-tip="Lihat peta"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  // fill="currentColor"
                  className="size-5 fill-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href={"/graph"}
                className="tooltip tooltip-secondary hover:cursor-pointer"
                data-tip="Lihat Grafik"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  // fill="currentColor"
                  className="size-5 fill-secondary"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20dvh] w-full bg-white rounded-xl p-4 flex items-center">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-start gap-2">
            <p className="font-poppins font-extrabold text-3xl">
              {statsData ? statsData.lessThan250V : 0}
            </p>
            <p className="font-poppins text-xs">{"Voltase < 250V"}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <ElectricMeterIcon fontSize="large" color="warning" />
            <div className="flex flex-row">
              <Link
                href={"/map"}
                className="tooltip tooltip-primary hover:cursor-pointer"
                data-tip="Lihat peta"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  // fill="currentColor"
                  className="size-5 fill-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href={"/graph"}
                className="tooltip tooltip-secondary hover:cursor-pointer"
                data-tip="Lihat Grafik"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  // fill="currentColor"
                  className="size-5 fill-secondary"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20dvh] w-full bg-white rounded-xl p-4 flex items-center">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-start gap-2">
            <p className="font-poppins font-extrabold text-3xl">
              {statsData ? statsData.moreThan300A1 : 0}
            </p>
            <p className="font-poppins text-xs">{"Arus Phase 1 > 300A"}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FlashAutoIcon color="info" fontSize="large" />
            <div className="flex flex-row">
              <Link
                href={"/map"}
                className="tooltip tooltip-primary hover:cursor-pointer"
                data-tip="Lihat peta"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  // fill="currentColor"
                  className="size-5 fill-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href={"/graph"}
                className="tooltip tooltip-secondary hover:cursor-pointer"
                data-tip="Lihat Grafik"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  // fill="currentColor"
                  className="size-5 fill-secondary"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20dvh] w-full bg-white rounded-xl p-4 flex items-center">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-start gap-2">
            <p className="font-poppins font-extrabold text-3xl">
              {statsData ? statsData.moreThan300A2 : 0}
            </p>
            <p className="font-poppins text-xs">{"Arus Phase 2 > 300A"}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FlashAutoIcon color="info" fontSize="large" />
            <div className="flex flex-row">
              <Link
                href={"/map"}
                className="tooltip tooltip-primary hover:cursor-pointer"
                data-tip="Lihat peta"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  // fill="currentColor"
                  className="size-5 fill-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href={"/graph"}
                className="tooltip tooltip-secondary hover:cursor-pointer"
                data-tip="Lihat Grafik"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  // fill="currentColor"
                  className="size-5 fill-secondary"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[20dvh] w-full bg-white rounded-xl p-4 flex items-center">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-start gap-2">
            <p className="font-poppins font-extrabold text-3xl">
              {statsData ? statsData.moreThan300A3 : 0}
            </p>
            <p className="font-poppins text-xs">{"Arus Phase 3 > 300A"}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FlashAutoIcon color="info" fontSize="large" />
            <div className="flex flex-row">
              <Link
                href={"/map"}
                className="tooltip tooltip-primary hover:cursor-pointer"
                data-tip="Lihat peta"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  // fill="currentColor"
                  className="size-5 fill-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href={"/graph"}
                className="tooltip tooltip-secondary hover:cursor-pointer"
                data-tip="Lihat Grafik"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  // fill="currentColor"
                  className="size-5 fill-secondary"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
