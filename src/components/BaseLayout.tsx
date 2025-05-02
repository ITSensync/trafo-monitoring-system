import React from "react";
import Navbar from "./Navbar";

export default function BaseLayout({
  children, searchBar
}: Readonly<{ children: React.ReactNode, searchBar: boolean }>) {
  return (
    <div className="h-dvh w-full bg-zinc-200">
      <Navbar searchBar={searchBar}/>
      {children}
    </div>
  );
}
