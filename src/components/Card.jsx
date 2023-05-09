import { Card } from "react-bootstrap";
import user from "../assets/testimoniuser.svg";
const Cardview = ({ name, message }) => {
  return (
    <>
      <div className="row" style={{ margin: "0 auto" }}>
        <div className="col" style={{ marginLeft: "2vw" }}>
          <div
            className="card rounded-5"
            style={{
              height: "14.1vw",
              backgroundColor: "rgba(254, 191, 0, 1)",
            }}>
            <div className="row">
              <div className="col-3">
                {/* style={{}} */}
                <div
                  className="card rounded-5 p-5 "
                  style={{
                    backgroundColor: "#FEF7CB",
                    width: "13vw",
                    left: "-2em",
                    top: "-0.025em",
                  }}>
                  <img
                    src={user}
                    alt=""
                    style={{ width: "8vw", margin: "0 auto" }}
                  />
                </div>
              </div>
              <div className="col-7">
                <div className="card-body">
                  <h1 className="card-title fw-bold">{name}</h1>
                  <p className="card-text fs-5">{message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardview;
