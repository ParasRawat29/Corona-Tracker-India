import React, { useEffect, useState } from "react";
import "./Total.css";
import coronavirus from "../images/coronavirus.png";
import recovered from "../images/recovered.png";
import vaccinated from "../images/vaccinated.png";
import death from "../images/death.png";
import { getApi } from "../helper";
import Loading from "./Loading";
function Total() {
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState({
    confirmed: 0,
    recovered: 0,
    deceased: 0,
    vaccinated1: 0,
    vaccinated2: 0,
  });

  useEffect(() => {
    getApi("https://data.covid19india.org/v4/min/data.min.json").then((res) => {
      setTotal(res.TT.total);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <Loading message="Fetching Data" />
  ) : (
    <div className="totalWrapper">
      <div className="confirmedWrapper">
        <h3 className="title">Confirmed</h3>
        <img src={coronavirus} alt="" className="dataImg" />
        <h4 className="value" style={{ color: "#c44938" }}>
          {total.confirmed}
        </h4>
      </div>
      <div className="recoveredWrapper">
        <h3 className="title">Recovered</h3>
        <img src={recovered} alt="" className="dataImg" />
        <h4 className="value" style={{ color: "#3ba53d" }}>
          {total.recovered}
        </h4>
      </div>
      <div className="deathsWrapper">
        <h3 className="title">Deaths</h3>
        <img src={death} alt="" className="dataImg" />
        <h4 className="value">{total.deceased}</h4>
      </div>
      <div className="vaccinatedWrapper">
        <h3 className="title">Vaccinated</h3>
        <div className="innerVaccinated">
          <div className="vaccinated1Wrapper">
            <h3 className="title">1st Dose</h3>
            <img src={vaccinated} alt="" className="dataImg" />
            <h4 className="value" style={{ color: "#6c3d99" }}>
              {total.vaccinated1}
            </h4>
          </div>
          <div className="vaccinated2Wrapper">
            <h3 className="title"> 2nd Dose</h3>
            <img src={vaccinated} alt="" className="dataImg" />
            <h4 className="value" style={{ color: "#6c3d99" }}>
              {total.vaccinated2}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Total;
