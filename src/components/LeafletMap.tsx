/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import "leaflet/dist/leaflet.css";
import React, { useRef } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { Monitoring } from "@/Types/Monitoring";
import { textTime } from "@/lib/DateFormatter";

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

const customIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const yellowIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function LeafletMap({ mapData }: { mapData: Monitoring[] }) {
  const mapRef = useRef(null);
  const updatedMapData = mapData.map((item) => ({
    lat: 3.5952 + (Math.random() - 0.5) * 0.105,
    lng: 98.6722 + (Math.random() - 0.5) * 0.105,
    alamat:
      "Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    ...item,
  }));
  const siteCoordinates = Array.from({ length: 14 }, () => {
    const lat = 3.5952 + (Math.random() - 0.5) * 0.105; // ±0.1 derajat
    const lng = 98.6722 + (Math.random() - 0.5) * 0.105;
    const suhu_trafo = parseFloat((Math.random() * (100 - 90) + 90).toFixed(2));
    const suhu_cpu = parseFloat((Math.random() * (100 - 90) + 90).toFixed(2));
    const arus1 = parseFloat((Math.random() * (300 - 100) + 100).toFixed(2));
    const arus2 = parseFloat((Math.random() * (300 - 100) + 100).toFixed(2));
    const arus3 = parseFloat((Math.random() * (300 - 100) + 100).toFixed(2));
    const volt = parseFloat((Math.random() * (300 - 100) + 100).toFixed(2));
    const trafoId = "T-0002-KEC_B";
    const createdAt = "2025-05-26T11:09:51.735Z";
    return {
      lat,
      lng,
      alamat:
        "Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      suhu_trafo,
      suhu_cpu,
      volt,
      arus1,
      arus2,
      arus3,
      trafoId,
      createdAt,
    };
  });

  const combinedSite = [...updatedMapData, ...siteCoordinates];

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
        {combinedSite.map((siteCoor, index) => (
          <Marker
            key={index}
            position={[siteCoor.lat, siteCoor.lng]}
            icon={siteCoor.trafoId === "T-0001-KEC_A" ? customIcon : yellowIcon}
          >
            <Popup>
              <div className="font-montserrat w-fit pb-2">
                <div className="flex justify-between items-center mt-6">
                  <h3 className="text-lg font-black">{siteCoor.trafoId}</h3>
                  <span className="badge badge-error text-white font-bold p-2">
                    {siteCoor.suhu_trafo} °C
                  </span>
                </div>
                <div className="flex flex-row justify-between items-center text-xs mt-2">
                  <h5 className="text-xs ">
                    {Math.floor(siteCoor.lat * 1000) / 1000} LU,{" "}
                    {Math.floor(siteCoor.lng * 1000) / 1000} LS
                  </h5>
                  <span className="italic">{textTime(siteCoor.createdAt)}</span>
                </div>
                <h5 className="text-sm text-justify mt-4 mb-3">
                  {siteCoor.alamat}
                </h5>
                <div className="overflow-x-fit rounded-box border border-zinc-900 bg-white-200">
                  <table className="table">
                    <thead className="text-black font-bold">
                      <tr>
                        <th className="px-1 py-2">Volt (V)</th>
                        <th className="px-1 py-2">Arus1 (A)</th>
                        <th className="px-1 py-2">Arus2 (A)</th>
                        <th className="px-1 py-2">Arus3 (A)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-center">
                        <td className="px-1 py-2">{siteCoor.volt}</td>
                        <td className="px-1 py-2">{siteCoor.arus1}</td>
                        <td className="px-1 py-2">{siteCoor.arus2}</td>
                        <td className="px-1 py-2">{siteCoor.arus3}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
