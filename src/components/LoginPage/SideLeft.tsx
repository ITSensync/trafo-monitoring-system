"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";

export default function SideLeft() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const router = useRouter();
  const handleSignInBtn = (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    if (!username || !password) {
      setError("Username or Password cannot be empty!");
      return;
    }

    if (username == "admin" && password == "admin") {
      setError(null);
      Cookies.set("auth_token", "oqkwrmdafaslldasffapsdpas,d", {
        expires: 1 / 24,
        path: "/",
      });
      setSuccess("Login Successfull. Nice One!");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      setSuccess(null);
      setError("Wrong Username or Password. Try Again!");
    }
    setIsLoading(false);
  };
  return (
    <form
      onSubmit={handleSignInBtn}
      className="bg-zinc-50 h-fit rounded-xl border border-zinc-300 p-7 w-[35vw] font-poppins"
    >
      <p className="text-3xl  text-zinc-800 font-bold mt-2 mb-2">Welcome!</p>
      <p className="text-xs  text-zinc-800 font-medium mb-4">
        to dashboard for trafo monitoring
      </p>
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-zinc-700">Username</legend>
        <input
          type="text"
          name="username"
          className="w-full input border border-zinc-200"
          placeholder="Type here"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        {/* <p className="text-red-500 font-bold">Username not found</p> */}
      </fieldset>
      <fieldset className="fieldset">
        <legend className="fieldset-legend text-zinc-700">Password</legend>
        <input
          type="text"
          name="password"
          className="w-full input border border-zinc-200"
          placeholder="Type here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* <p className="text-red-500 font-bold">Wrong Password</p> */}
      </fieldset>
      <button
        type="submit"
        tabIndex={1}
        role="button"
        aria-disabled="true"
        className={`btn w-full mt-4 mb-4 ${
          isLoading
            ? "btn-disabled bg-zinc-400"
            : "bg-orange-500 hover:bg-orange-400 border-0"
        }`}
      >
        {isLoading ? "Wait a second..." : "SIGN IN"}
      </button>

      {success && (
        <div role="alert" className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-white">{success}</span>
        </div>
      )}
      {error && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-white">{error}</span>
        </div>
      )}
    </form>
  );
}
