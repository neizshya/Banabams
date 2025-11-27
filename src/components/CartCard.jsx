import trash from "../assets/trash.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import { useContext } from "react";
import { UserContext } from "../context/Context";
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
        style={{ width: width, height: height }}>
        <div className="card-body">
          {special}
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
          <div className="row">
            <div className="col-2">
              <img
                className="border mt-2 p-3 shadow rounded-3"
                src={img}
                alt=""
                style={{ width: "4.5vw", backgroundColor: "#FEF7CB" }}
              />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <p className="fs-4 fw-semibold">{menuName}</p>
                </div>
                <div className="col-12">
                  <p className="fs-4 fw-semibold">{price}</p>
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

export default Cards;
