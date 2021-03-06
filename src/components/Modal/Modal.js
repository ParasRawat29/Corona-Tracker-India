import React from "react";
import { TransformToDistrictArrayFromObject } from "../../helper";
import "./Modal.css";
import Table from "../Table/Table";
import TimeSeries from "../Timeseries/TimeSeries";
function Modal({ seletedState, setModalOpen }) {
  return (
    <>
      <div className="overlay" onClick={() => setModalOpen(false)}></div>
      <div className="content">
        <h1 className="stateName">{seletedState.stateName}</h1>
        <button className="closeBtn" onClick={() => setModalOpen(false)}>
          <i class="far fa-times-circle"></i>
        </button>
        <TimeSeries seletedState={seletedState} />
        <Table
          stateData={TransformToDistrictArrayFromObject(seletedState.districts)}
          dataName="districtName"
        />
      </div>
    </>
  );
}

export default Modal;
