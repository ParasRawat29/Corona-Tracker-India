import React from "react";
import loader from "../images/loader.gif";
import "./loading.css";
function Loading({ message }) {
  return (
    <div className="loadingWrapper">
      <img src={loader} alt="" srcset="" />
      <p>{message}</p>
    </div>
  );
}

export default Loading;
