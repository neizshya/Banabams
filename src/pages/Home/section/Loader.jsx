import React from "react";
import loader from "../../../assets/banana.gif";
function Loading() {
  return (
    <div
      className="text-center center-img d-flex align-items-center justify-content-center"
      style={{ height: "50vh" }}>
      <img className="img" src={loader} alt="Logo" />
    </div>
  );
}

export default Loading;
