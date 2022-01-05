import React, { useEffect, useState } from "react";

function StateWise() {
  const [data, setData] = useState([]);
  async function fetchData() {
    const res = await fetch(
      "https://data.covid19india.org/v4/min/data.min.json"
    );
    const apidata = await res.json();
    console.log(apidata);
    setData(apidata);
  }
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  return <div>State wise</div>;
}

export default StateWise;
