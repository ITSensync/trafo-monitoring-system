"use client";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";

export default function ParameterMap() {
  const LeafletComponent = useMemo(
    () =>
      dynamic(() => import("@/components/LeafletMap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div>
      <LeafletComponent />
    </div>
  );
}
