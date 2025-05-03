import Link from "next/link";
import React from "react";

export default function Navbar({ searchBar = true }: { searchBar?: boolean }) {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side z-[999]">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-white text-orange-400 min-h-full w-80">
            {/* Sidebar content here */}
            <div className="py-4 ">
              <p className="text-orange-500 font-bold text-2xl text-center">
                TRAFO DASHBOARD
              </p>
            </div>
            <div className="h-0.5 w-full border bg-amber-500 mb-4"></div>
            <Link
              href={"/"}
              className="flex flex-row items-center rounded-lg hover:bg-amber-50 font-poppins mb-2 cursor-pointer gap-5 px-3 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="orange"
                className="size-8"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>

              <p className="text-lg font-medium">Home</p>
            </Link>
            <Link
              href={"/login"}
              className="flex flex-row items-center rounded-lg hover:bg-amber-50 font-poppins cursor-pointer gap-5 px-3 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="orange"
                className="size-8"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-lg font-medium">Sign Out</p>
            </Link>
          </ul>
        </div>
      </div>
      <div className="navbar bg-white shadow-sm flex flex-row justify-between px-5">
        <label
          htmlFor="my-drawer"
          className="drawer-button btn btn-square btn-ghost hover:bg-orange-400 hover:border-0 hover:stroke-white stroke-orange-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>{" "}
          </svg>
        </label>

        {searchBar && (
          <div className="">
            <label className="input input-sm input-warning border-zinc-300 active:border-orange-300">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" className="grow" placeholder="Trafo ID" />
            </label>
          </div>
        )}

        <div className="avatar avatar-placeholder">
          <div className="bg-orange-200 border-orange-400 text-neutral-content w-fit p-4 rounded-full">
            <span className="text-lg text-white">S</span>
          </div>
        </div>
      </div>
    </>
  );
}
