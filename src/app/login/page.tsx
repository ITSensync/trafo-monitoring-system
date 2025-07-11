import SideLeft from "@/components/LoginPage/SideLeft";
import SideRight from "@/components/LoginPage/SideRight";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login - Trafo Monitoring Dashboard",
  description: "Generated by create next app",
};

export default function page() {
  return (
    <div className="bg-white h-dvh flex flex-row">
      <div className="w-1/2 flex items-center justify-center">
        <SideLeft />
      </div>
      <div className="w-1/2 bg-gradient-to-t from-orange-200 to-white flex items-center justify-center">
        <SideRight />
      </div>
    </div>
  );
}
