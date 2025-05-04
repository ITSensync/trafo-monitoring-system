import React from "react";
import Navbar from "./Navbar";
import { cookies } from "next/headers";
import { unauthorized } from "next/navigation";

export default async function BaseLayout({
  children,
  searchBar,
  className,
}: Readonly<{
  children: React.ReactNode;
  searchBar: boolean;
  className?: string;
}>) {
  const existingToken = (await cookies()).get("auth_token")?.value;
  if (!existingToken) {
    unauthorized();
  }

  return (
    <div className={`min-h-screen w-full bg-zinc-200 ${className}`}>
      <Navbar searchBar={searchBar} />
      {children}
    </div>
  );
}
