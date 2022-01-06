import React from "react";

function Table({ stateData }) {
  return (
    <table>
      <thead>
        <tr className="headingRow">
          <th className="stateNameHeading">State | Union Territory</th>
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
      </thead>
      <tbody>
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
      </tbody>
    </table>
  );
}

export default Table;
