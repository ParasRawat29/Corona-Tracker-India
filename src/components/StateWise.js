import React, { useEffect, useState } from "react";
import { getApi, TransformToArrayFromObject } from "../helper";
import "./stateWise.css";
function StateWise() {
  const [stateData, setStateData] = useState([]);
  useEffect(() => {
    getApi().then((response) => {
      const data = TransformToArrayFromObject(response);
      setStateData(data);
    });
  }, []);
  return (
    <div className="stateWrapper">
      <table>
        <tr className="headingRow">
          <th className="stateNameHeading">State</th>
          <th className="confirmedHeading" style={{ color: "#c44938" }}>
            Confirmed
          </th>
          <th
            className="recoveredHeading"
            style={{
              color: "#3ba53d",
            }}
          >
            Recovered
          </th>
          <th className="deathsHeading">Deaths</th>
          <th className="vaccinatedHeading" style={{ color: "#6c3d99" }}>
            Vaccinated 1
          </th>
          <th className="vaccinatedHeading" style={{ color: "#6c3d99" }}>
            Vaccinated 2
          </th>
        </tr>
        {stateData.map((state) => {
          return (
            <tr key={state.id}>
              <td className="stateName">{state.stateName}</td>
              <td className="stateWiseConfirmed">{state.total.confirmed}</td>
              <td className="stateWiseRecovered">{state.total.recovered}</td>
              <td className="stateWiseDeceased">{state.total.deceased}</td>
              <td className="statevaccinated1">{state.total.vaccinated1}</td>
              <td className="statevaccinated2">{state.total.vaccinated2}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default StateWise;
