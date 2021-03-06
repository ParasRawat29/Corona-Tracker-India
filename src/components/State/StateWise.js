import React, { Suspense, useEffect, useState } from "react";
import { getApi, TransformToStateArrayFromObject } from "../../helper.js";
import Loading from "../Loading/Loading";
import SearchBar from "./SearchBar";
import "./stateWise.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback.js";
const Table = React.lazy(() => import("../Table/Table"));

// import Modal from "../Modal/Modal";
const Modal = React.lazy(() => import("../Modal/Modal"));

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
    <div className="stateWrapper" style={{ overflowX: "auto" }}>
      <SearchBar
        setSearch={setSearch}
        setApiData={setApiData}
        apiData={apiData}
        search={search}
        setStateData={setStateData}
        setIsLoading={setIsLoading}
      />
      <p style={{ textAlign: "center", color: "#1ab073" }}>
        <i class="fas fa-info-circle"></i> Note : Click on the state to view
        data of its districts
      </p>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Loading message="creating Chart" />}>
          <Table
            stateData={stateData}
            setSelectedState={setSelectedState}
            dataName="stateName"
            setModalOpen={setModalOpen}
          />
        </Suspense>
        <div className={`modalWrapper ${modalOpen ? "open" : ""}`}>
          <Modal seletedState={seletedState} setModalOpen={setModalOpen} />
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default StateWise;
