import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function App() {
  const defaultState = {
    center: [37.759351, -122.446913],
    zoom: 12,
  };

  return (
    <div className="relative w-[900px] h-[300px] border mt-24 ml-[22%] mr-[50px]">
      <YMaps>
        <Map
          defaultState={defaultState}
          style={{ width: "900px", height: "300px" }}
        ></Map>
      </YMaps>
    </div>
  );
}
