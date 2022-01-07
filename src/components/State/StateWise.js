import React, { useState } from "react";
import Modal from "./Modal";
import SearchBar from "./SearchBar";
import "./stateWise.css";
import Table from "./Table";
function StateWise() {
  const [apiData, setApiData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [search, setSearch] = useState("");
  const [seletedState, setSelectedState] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="stateWrapper">
      <SearchBar
        setSearch={setSearch}
        setApiData={setApiData}
        apiData={apiData}
        search={search}
        setStateData={setStateData}
      />
      <p style={{ textAlign: "center", color: "green" }}>
        <i class="fas fa-info-circle"></i> Note : Click on the state to view
        data of its districts
      </p>
      <Table
        stateData={stateData}
        setSelectedState={setSelectedState}
        dataName="stateName"
        setModalOpen={setModalOpen}
      />
      <div className={`modalWrapper ${modalOpen ? "open" : ""}`}>
        <Modal seletedState={seletedState} setModalOpen={setModalOpen} />
      </div>
    </div>
  );
}

export default StateWise;
