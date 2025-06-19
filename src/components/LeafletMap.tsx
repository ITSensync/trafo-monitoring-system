/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import "leaflet/dist/leaflet.css";
import React, { useActionState, useEffect, useRef, useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { Monitoring } from "@/Types/Monitoring";
import { textTime } from "@/lib/DateFormatter";
import { useSearchParams } from "next/navigation";
import { editCoorAction } from "@/data/actions/FormEditCoorAction";
import SuccessModal from "./SuccessModal";

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

function MarkerPopup({ siteCoor, param }: { siteCoor: any; param: string }) {
  const [editState, setEditState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formEditCoorState, setFormEditCoorState] = useState({
    lat: siteCoor.lat,
    lng: siteCoor.lng,
  });
  const [apiErrorData, setApiErrorData] = useState({
    code: 0,
    message: "",
  });

  const [formEditState, formEditAction] = useActionState(editCoorAction, {
    data: null,
  });

  const getBadgeText = (param: string, siteCoor: any) => {
    switch (param) {
      case "temp":
        return `${siteCoor.suhu_trafo} °C`;
      case "volt":
        return `${siteCoor.volt} V`;
      case "phaseR":
        return `${siteCoor.arus1} A`;
      case "phaseS":
        return `${siteCoor.arus2} A`;
      case "phaseT":
        return `${siteCoor.arus3} A`;
      default:
        return "-";
    }
  };

  const getBadgeColor = (param: string) => {
    switch (param) {
      case "temp":
        return "badge-error";
      case "volt":
        return "badge-warning";
      case "phaseR":
        return "badge-info";
      case "phaseS":
        return "badge-info";
      case "phaseT":
        return "badge-info";
      default:
        return "badge-ghost";
    }
  };

  const renderTable = () => {
    switch (param) {
      case "temp":
        return (
          <table className="table table-xs">
            <thead className="text-black font-bold">
              <tr className="text-xs">
                <th className="px-1 py-2">Volt (V)</th>
                <th className="px-1 py-2">Phase R (A)</th>
                <th className="px-1 py-2">Phase S (A)</th>
                <th className="px-1 py-2">Phase T (A)</th>
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
        );
      case "volt":
        return (
          <table className="table table-xs">
            <thead className="text-black font-bold">
              <tr className="text-xs">
                <th className="px-1 py-2">Temp (°C)</th>
                <th className="px-1 py-2">Phase R (A)</th>
                <th className="px-1 py-2">Phase S (A)</th>
                <th className="px-1 py-2">Phase T (A)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="px-1 py-2">{siteCoor.suhu_trafo}</td>
                <td className="px-1 py-2">{siteCoor.arus1}</td>
                <td className="px-1 py-2">{siteCoor.arus2}</td>
                <td className="px-1 py-2">{siteCoor.arus3}</td>
              </tr>
            </tbody>
          </table>
        );
      case "phaseR":
        return (
          <table className="table table-xs">
            <thead className="text-black font-bold">
              <tr className="text-xs">
                <th className="px-1 py-2">Temp (°C)</th>
                <th className="px-1 py-2">Volt (V)</th>
                <th className="px-1 py-2">Phase S (A)</th>
                <th className="px-1 py-2">Phase T (A)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="px-1 py-2">{siteCoor.suhu_trafo}</td>
                <td className="px-1 py-2">{siteCoor.volt}</td>
                <td className="px-1 py-2">{siteCoor.arus2}</td>
                <td className="px-1 py-2">{siteCoor.arus3}</td>
              </tr>
            </tbody>
          </table>
        );
      case "phaseS":
        return (
          <table className="table tablex-xs">
            <thead className="text-black font-bold">
              <tr className="text-xs">
                <th className="px-1 py-2">Temp (°C)</th>
                <th className="px-1 py-2">Volt (V)</th>
                <th className="px-1 py-2">Phase R (A)</th>
                <th className="px-1 py-2">Phase T (A)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="px-1 py-2">{siteCoor.suhu_trafo}</td>
                <td className="px-1 py-2">{siteCoor.volt}</td>
                <td className="px-1 py-2">{siteCoor.arus1}</td>
                <td className="px-1 py-2">{siteCoor.arus3}</td>
              </tr>
            </tbody>
          </table>
        );
      case "phaseT":
        return (
          <table className="table table-xs">
            <thead className="text-black font-bold text-xs">
              <tr>
                <th className="px-1 py-2">Temp (°C)</th>
                <th className="px-1 py-2">Volt (V)</th>
                <th className="px-1 py-2">Phase R (A)</th>
                <th className="px-1 py-2">Phase S (A)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="px-1 py-2">{siteCoor.suhu_trafo}</td>
                <td className="px-1 py-2">{siteCoor.volt}</td>
                <td className="px-1 py-2">{siteCoor.arus1}</td>
                <td className="px-1 py-2">{siteCoor.arus2}</td>
              </tr>
            </tbody>
          </table>
        );
      default:
        return <></>;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormEditCoorState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const formElement = event.currentTarget as HTMLFormElement;

    if (!formElement.checkValidity()) {
      event.preventDefault(); // Cegah submit jika ada kesalahan validasi
      return;
    }

    setIsLoading(true);
    setIsError(false);
  };

  useEffect(() => {
    if (!formEditState.isLoading) {
      setIsLoading(false);
    }

    if (formEditState.isError) {
      setApiErrorData({
        code: formEditState?.apiErrors?.code,
        message: formEditState?.apiErrors?.message,
      });
      setIsError(true);
    }

    if (formEditState.isSuccess) {
      (
        document.getElementById("success_modal") as HTMLDialogElement
      ).showModal();
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [formEditState]);

  return (
    <>
      <SuccessModal message={formEditState?.message} />
      <div className="font-montserrat w-fit pb-2">
        <div className="flex justify-between items-center mt-6">
          <h3 className="text-lg font-black">{siteCoor.trafoId}</h3>
          <span
            className={`badge ${getBadgeColor(
              param ? param : "-"
            )} text-white font-bold p-2`}
          >
            {getBadgeText(param ? param : "-", siteCoor)}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center text-xs mt-2">
          <div className="flex flex-row items-center">
            {editState ? (
              <form
                action={formEditAction}
                onSubmit={handleSubmit}
                className="flex flex-row items-end gap-1"
              >
                {isError && (
                  <div role="alert" className="alert alert-error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 stroke-current"
                      fill="white"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-white">{apiErrorData.message}</span>
                  </div>
                )}
                <input
                  className="input input-xs input-neutral hidden"
                  type="text"
                  defaultValue={siteCoor.trafoId}
                  name="id"
                  required={true}
                />
                <div className="flex gap-1 flex-col items-start">
                  <h5 className="text-xs">LU</h5>
                  <input
                    name="lat"
                    type="text"
                    placeholder="3.9243"
                    className="input input-xs input-neutral"
                    defaultValue={formEditCoorState.lat}
                    onChange={handleInputChange}
                    required={true}
                  />
                </div>
                <div className="flex gap-1 flex-col items-start">
                  <h5 className="text-xs">LS</h5>
                  <input
                    name="lng"
                    type="text"
                    placeholder="149.9243"
                    className="input input-xs input-neutral"
                    defaultValue={formEditCoorState.lng}
                    onChange={handleInputChange}
                    required={true}
                  />
                </div>
                <button
                  className={`btn btn-square ${
                    isLoading ? "btn-disabled" : "btn-error"
                  } btn-xs`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditState(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3 fill-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className={`btn btn-square ${
                    isLoading ? "btn-disabled" : "btn-success"
                  } btn-xs`}
                  type="submit"
                >
                  {isLoading ? (
                    "..."
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-3 fill-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </form>
            ) : (
              <>
                <h5 className="text-xs ">
                  {Math.floor(siteCoor.lat * 1000) / 1000} LU,{" "}
                  {Math.floor(siteCoor.lng * 1000) / 1000} LS
                </h5>
                <div
                  className="tooltip tooltip-info tool text-white cursor-pointer ml-2"
                  data-tip="Edit Loc."
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditState(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 fill-blue-400"
                  >
                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                  </svg>
                </div>
              </>
            )}
          </div>

          {!editState && (
            <h5 className="italic text-xs">{textTime(siteCoor.createdAt)}</h5>
          )}
        </div>
        <h5 className="text-sm text-justify mt-4 mb-3">{siteCoor.alamat}</h5>
        <div className="overflow-x-fit rounded-box border border-zinc-900 bg-white-200">
          {renderTable()}
        </div>
      </div>
    </>
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
  const searchParams = useSearchParams();
  const param = searchParams.get("param");
  const mapRef = useRef(null);
  const updatedMapData = mapData.map((item) => ({
    lat: item.Trafo.lat,
    lng: item.Trafo.lng,
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
              <MarkerPopup siteCoor={siteCoor} param={param ?? "-"} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
