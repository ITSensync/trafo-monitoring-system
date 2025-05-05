/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import "leaflet/dist/leaflet.css";
import React, { useRef } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// fix icon issues

function RecenterButton({ center }: { center: L.LatLngExpression }) {
  const map = useMap();

  const handleClick = () => {
    map.flyTo(center, 11); // atau map.setView(center, 13);
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer hover:bg-zinc-200 bg-zinc-100 rounded-sm p-1.5 border-2 border-zinc-500/40 shadow-xl drop-shadow-zinc-800 absolute top-[80px] left-2.5 z-[999]"
    >
      📍
    </button>
  );
}

export default function LeafletMap() {
  const mapRef = useRef(null);
  const siteCoordinates = Array.from({ length: 10 }, () => {
    const lat = 3.5952 + (Math.random() - 0.5) * 0.105; // ±0.1 derajat
    const lng = 98.6722 + (Math.random() - 0.5) * 0.105;
    const temp = parseFloat((Math.random() * (100 - 90) + 90).toFixed(2));
    return {
      lat,
      lng,
      alamat:
        "Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      temp,
    };
  });

  return (
    <div className="relative">
      <MapContainer
        center={[3.5952, 98.6722]}
        zoom={11}
        scrollWheelZoom={true}
        style={{ height: "90dvh", width: "100%" }}
        className="z-0"
        ref={mapRef}
      >
        <RecenterButton center={[3.5952, 98.6722]} />
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {siteCoordinates.map((siteCoor, index) => (
          <Marker key={index} position={[siteCoor.lat, siteCoor.lng]}>
            <Popup>
              <div className="font-montserrat w-fit">
                <div className="flex justify-between items-center mt-6">
                  <h3 className="text-lg font-black">Trafo {index + 1}</h3>
                  <span className="badge badge-error text-white font-bold p-2">
                    {siteCoor.temp} °C
                  </span>
                </div>
                <h5 className="text-sm mt-2">
                  {Math.floor(siteCoor.lat * 100000) / 100000} LU,{" "}
                  {Math.floor(siteCoor.lng * 100000) / 100000} LS
                </h5>
                <h5 className="text-sm text-justify mt-4 mb-6">
                  {siteCoor.alamat}
                </h5>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
