import { CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet";
import React, { useEffect, useState } from "react";
import "./map.css";
import "leaflet/dist/leaflet.css";
import {
  getApi,
  TransformToStateArrayFromObject,
  CASES_TYPE_COLOR,
} from "../../helper";

function Map() {
  const [data, setData] = useState([]);
  const [casesType, setCasesType] = useState("confirmed");

  useEffect(() => {
    getApi("https://data.covid19india.org/v4/min/data.min.json").then((res) => {
      setData(TransformToStateArrayFromObject(res));
    });
  }, []);

  return (
    <div className="mapWrapper">
      <div className="MapButtonsWrapper">
        <button
          className={casesType === "deceased" ? "active" : ""}
          onClick={() => setCasesType("deceased")}
        >
          Deceased
        </button>
        <button
          className={casesType === "confirmed" ? "active" : ""}
          onClick={() => setCasesType("confirmed")}
        >
          Confirmed
        </button>
        <button
          className={casesType === "recovered" ? "active" : ""}
          onClick={() => setCasesType("recovered")}
        >
          Recovered
        </button>
        <button
          className={casesType === "vaccinated1" ? "active" : ""}
          onClick={() => setCasesType("vaccinated1")}
        >
          Vaccinated 1
        </button>
        <button
          className={casesType === "vaccinated2" ? "active" : ""}
          onClick={() => setCasesType("vaccinated2")}
        >
          Vaccinated 2
        </button>
      </div>
      <MapContainer
        center={[21.7679, 82.8718]}
        zoom={4.5}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data.map((state) => {
          if (state.latitude && state.longitude)
            return (
              <CircleMarker
                center={[state.latitude, state.longitude]}
                pathOptions={{ color: CASES_TYPE_COLOR[casesType].hex }}
                radius={
                  Math.sqrt(state.total[casesType]) /
                  CASES_TYPE_COLOR[casesType].multiplier
                }
              >
                <Tooltip>{`${state.stateName} : ${state.total[casesType]}`}</Tooltip>
              </CircleMarker>
            );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
