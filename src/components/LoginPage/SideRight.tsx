import Image from "next/image";
import React from "react";

export default function SideRight() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Image
        className="absolute z-0"
        src={"mdi_flash.svg"}
        alt="ICON FLASH"
        width={250}
        height={250}
      />
      <p className="relative text-center z-10 text-orange-400 font-montserrat text-4xl uppercase">
        <span className="font-bold">Trafo</span> Monitoring <br />
        System
      </p>
    </div>
  );
}
