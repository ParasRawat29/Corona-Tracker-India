import React, { useEffect, useState } from "react";
import { getApi, TransformToStateArrayFromObject } from "../../helper.js";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import SearchBar from "./SearchBar";
import "./stateWise.css";
import Table from "../Table/Table";
function StateWise() {
  const [apiData, setApiData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [search, setSearch] = useState("");
  const [seletedState, setSelectedState] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getApi("https://data.covid19india.org/v4/min/data.min.json").then(
      (response) => {
        setApiData(TransformToStateArrayFromObject(response));
        setStateData(TransformToStateArrayFromObject(response));
        setIsLoading(false);
      }
    );
  }, []);
  return isLoading ? (
    <Loading message="Fetching Data" />
  ) : (
    <div className="stateWrapper">
      <SearchBar
        setSearch={setSearch}
        setApiData={setApiData}
        apiData={apiData}
        search={search}
        setStateData={setStateData}
        setIsLoading={setIsLoading}
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
