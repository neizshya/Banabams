import choco from "../assets/menu/choco.svg";
import trash from "../assets/trash.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import { useContext } from "react";
import { UserContext } from "../context/Context";
const CartCard = ({ setTotal, total }) => {
  const { quantity, setQuantity } = useContext(UserContext);
  return (
    <>
      <div
        className="card shadow rounded-4"
        style={{ width: "45vw", height: "7vw" }}>
        <div className="card-body">
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
          <div className="row">
            <div className="col-2">
              <img
                className="border mt-2 p-3 shadow rounded-3"
                src={choco}
                alt=""
                style={{ width: "4.5vw", backgroundColor: "#FEF7CB" }}
              />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <p className="fs-4 fw-semibold">Coklat (Topping Almond)</p>
                </div>
                <div className="col-12">
                  <p className="fs-4 fw-semibold">Rp 25.000</p>
                </div>
              </div>
            </div>
            <div className="col-1">
              <button
                className="btn mt-3 "
                style={{ marginLeft: "-2vw" }}
                onClick={() => {}}>
                <img src={trash} style={{ width: "2.5vw" }} />
              </button>
            </div>
            <div className="col-3 pt-2">
              <div
                className="border rounded-3 mt-3"
                style={{
                  backgroundColor: "#FEF7CB",
                  width: "10vw",
                  height: "2.5vw",
                }}>
                <div className="row ">
                  <div className="col-4">
                    <button className="btn">
                      <img
                        src={minus}
                        alt=""
                        onClick={() => {
                          setTotal(total + 1);
                          // console.log(total - 1);
                          // setQuantity(quantity - 1);
                        }}
                      />
                    </button>
                  </div>
                  <div className="col-4 ">
                    <p className="fs-5 fw-semibold mt-1 ms-2">
                      {total}
                      {/* {quantity} */}
                    </p>
                  </div>
                  <div className="col-4" style={{ marginLeft: "-0.5vw" }}>
                    <button className="btn">
                      <img
                        src={plus}
                        alt=""
                        onClick={() => {
                          setTotal(total + 1);
                          // setQuantity(quantity + 1);
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
