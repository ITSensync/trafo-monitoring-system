import React from "react";

export default function SideLeft() {
  return (
    <div className="bg-zinc-50 h-fit rounded-xl border border-zinc-300 p-7 w-[35vw] font-poppins">
      <p className="text-3xl  text-zinc-800 font-bold mt-2 mb-2">Welcome!</p>
      <p className="text-xs  text-zinc-800 font-medium mb-4">
        to dashboard for trafo monitoring
      </p>
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-zinc-700">Username</legend>
        <input
          type="text"
          className="w-full input border border-zinc-200"
          placeholder="Type here"
        />
        <p className="text-red-500 font-bold">Username not found</p>
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-zinc-700">Password</legend>
        <input
          type="text"
          className="w-full input border border-zinc-200"
          placeholder="Type here"
        />
        <p className="text-red-500 font-bold">Wrong Password</p>
      </fieldset>
      <button className="btn bg-orange-500 hover:bg-orange-400 border-0 w-full transition-transform duration-300 ease-in-out hover:scale-105 mt-4 mb-4">
        SIGN IN
      </button>
    </div>
  );
}
