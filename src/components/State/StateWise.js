import React, { useEffect, useState } from "react";
import { getApi, TransformToArrayFromObject } from "../../helper";
import SearchBar from "./SearchBar";
import "./stateWise.css";
import Table from "./Table";
function StateWise() {
  const [apiData, setApiData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="stateWrapper">
      <SearchBar
        setSearch={setSearch}
        setApiData={setApiData}
        apiData={apiData}
        search={search}
        setStateData={setStateData}
      />

      <Table stateData={stateData} />
    </div>
  );
}

export default StateWise;
