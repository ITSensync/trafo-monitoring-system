import React from "react";
import Navbar from "./Navbar";

export default function BaseLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-dvh w-full bg-zinc-200">
      <Navbar />
      {children}
    </div>
  );
}
