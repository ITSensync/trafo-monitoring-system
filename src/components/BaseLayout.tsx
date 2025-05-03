import React from "react";
import Navbar from "./Navbar";

export default function BaseLayout({
  children, searchBar, className
}: Readonly<{ children: React.ReactNode, searchBar: boolean, className?: string }>) {
  return (
    <div className={`min-h-screen w-full bg-zinc-200 ${className}`}>
      <Navbar searchBar={searchBar}/>
      {children}
    </div>
  );
}
