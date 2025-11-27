import trash from "../assets/trash.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import React from "react";
const Cards = ({
  setTotal,
  total,
  leftSide,
  price,
  img,
  menuName,
  width,
  height,
  special,
}) => {
  return (
    <>
      <div
        className="card shadow rounded-4"
        style={{ width: width, height: height }}
      >
        <div className="card-body">
          {special}
          <div className="row">
            <div className="col-12 col-sm-2">
              <img
                className="border mt-2 p-2 p-md-3 shadow rounded-3 img-fluid"
                src={img}
                alt=""
                loading="lazy"
                style={{ maxWidth: "80px", backgroundColor: "#FEF7CB" }}
              />
            </div>
            <div className="col-12 col-sm-6">
              <div className="row">
                <div className="col-12">
                  <p className="fs-5 fs-md-4 fw-semibold">{menuName}</p>
                </div>
                <div className="col-12">
                  <p className="fs-5 fs-md-4 fw-semibold">{price}</p>
                </div>
              </div>
            </div>
            {leftSide}
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Cards);
