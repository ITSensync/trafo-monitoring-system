"use client";
import BaseLayout from "@/components/BaseLayout";
import LegendCard from "@/components/Card/LegendCard";
import ParameterMap from "@/components/ParameterMap";
import React from "react";

export default function page() {
  return (
    <BaseLayout searchBar={true}>
      <div>
        <LegendCard/>
        <ParameterMap />
      </div>
    </BaseLayout>
  );
}
