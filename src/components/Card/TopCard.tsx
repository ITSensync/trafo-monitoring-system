import React from "react";

export default function TopCard() {
  return (
    <>
      <div className="h-[20dvh] w-full bg-white rounded-xl p-4 flex items-center">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-start gap-2">
            <p className="font-poppins font-extrabold text-3xl">4200</p>
            <p className="font-poppins text-md">All Devices</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              // fill=""
              className="size-12 fill-blue-400"
            >
              <path
                fillRule="evenodd"
                d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[20dvh] w-full bg-white rounded-xl p-4 flex items-center">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-start gap-2">
            <p className="font-poppins font-extrabold text-3xl">3200</p>
            <p className="font-poppins text-md">Up-to-date</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              // fill="currentColor"
              className="size-12 fill-green-400"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[20dvh] w-full bg-white rounded-xl p-4 flex items-center">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-start gap-2">
            <p className="font-poppins font-extrabold text-3xl">700</p>
            <p className="font-poppins text-md">Not update</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              // fill="currentColor"
              className="size-12 fill-red-400"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[20dvh] w-full bg-white rounded-xl p-4 flex items-center">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col items-start gap-2">
            <p className="font-poppins font-extrabold text-3xl">300</p>
            <p className="font-poppins text-md">Inactive</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              // fill="currentColor"
              className="size-12 fill-zinc-600"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
