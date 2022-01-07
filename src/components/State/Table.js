import React, { useState } from "react";

function Table({ stateData, setSelectedState, dataName, setModalOpen }) {
  console.log(stateData);
  const [currentSort, setCurrentSort] = useState("default");
  const [sortOn, setSortOn] = useState("");

  const sortTypes = {
    up: {
      class: "sort-up",
      fun: (a, b) => {
        // console.log(sortOn);
        return a.total[sortOn] - b.total[sortOn];
      },
    },
    down: {
      class: "sort-down",
      fun: (a, b) => {
        // console.log(sortOn);
        // console.log(a.total.sortOn - b.total.sortOn);
        return b.total[sortOn] - a.total[sortOn];
      },
    },
    default: {
      class: "sort",
      fun: (a, b) => a,
    },
  };

  function sortTable() {
    if (currentSort === "down") setCurrentSort("up");
    else if (currentSort === "up") setCurrentSort("default");
    else if (currentSort === "default") setCurrentSort("down");
  }

  const handleRowClick = (state) => {
    setSelectedState(state);
    setModalOpen(true);
  };

  return stateData.length < 1 ? (
    <div style={{ textAlign: "center", padding: "30px", fontSize: "2rem" }}>
      Wrong State Name 😑
    </div>
  ) : (
    <table>
      <thead>
        <tr className="headingRow">
          <th className="stateNameHeading">
            {dataName === "stateName" ? "State | Union Territory" : "Districts"}
          </th>
          <th className="confirmedHeading" style={{ color: "#c44938" }}>
            Confirmed
            <button
              onClick={() => {
                sortTable();
                setSortOn("confirmed");
              }}
            >
              <i
                className={`fas fa-${
                  sortOn === "confirmed" ? sortTypes[currentSort].class : "sort"
                }`}
              ></i>
            </button>
          </th>
          <th
            className="recoveredHeading"
            style={{
              color: "#3ba53d",
            }}
          >
            Recovered
            <button
              onClick={() => {
                sortTable();
                setSortOn("recovered");
              }}
            >
              <i
                className={`fas fa-${
                  sortOn === "recovered" ? sortTypes[currentSort].class : "sort"
                }`}
              ></i>
            </button>
          </th>
          <th className="deathsHeading">
            Deaths
            <button
              onClick={() => {
                sortTable();
                setSortOn("deceased");
              }}
            >
              <i
                className={`fas fa-${
                  sortOn === "deceased" ? sortTypes[currentSort].class : "sort"
                }`}
              ></i>
            </button>
          </th>

          <th className="vaccinatedHeading" style={{ color: "#6c3d99" }}>
            Vaccinated 1
            <button
              onClick={() => {
                sortTable();
                setSortOn("vaccinated1");
              }}
            >
              <i
                className={`fas fa-${
                  sortOn === "vaccinated1"
                    ? sortTypes[currentSort].class
                    : "sort"
                }`}
              ></i>
            </button>
          </th>
          <th className="vaccinatedHeading" style={{ color: "#6c3d99" }}>
            Vaccinated 2
            <button
              onClick={() => {
                sortTable();
                setSortOn("vaccinated2");
              }}
            >
              <i
                className={`fas fa-${
                  sortOn === "vaccinated2"
                    ? sortTypes[currentSort].class
                    : "sort"
                }`}
              ></i>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {[...stateData].sort(sortTypes[currentSort].fun).map((item) => {
          if (item.stateName !== "Total") {
            return (
              <tr key={item.id} onClick={() => handleRowClick(item)}>
                <td className="stateName">{item[dataName]}</td>
                <td className="stateWiseConfirmed">
                  {item.total.confirmed ? item.total.confirmed : "-"}
                </td>
                <td className="stateWiseRecovered">
                  {" "}
                  {item.total.recovered ? item.total.recovered : "-"}
                </td>
                <td className="stateWiseDeceased">
                  {" "}
                  {item.total.deceased ? item.total.deceased : "-"}
                </td>
                <td className="statevaccinated1">
                  {" "}
                  {item.total.vaccinated1 ? item.total.vaccinated1 : "-"}
                </td>
                <td className="statevaccinated2">
                  {" "}
                  {item.total.vaccinated2 ? item.total.vaccinated2 : "-"}
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
}

export default Table;
