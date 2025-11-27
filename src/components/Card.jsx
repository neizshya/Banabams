import { Card } from "react-bootstrap";
import user from "../assets/testimoniuser.svg";
const Cardview = ({ name, message }) => {
  return (
    <>
      <div className="row mx-auto">
        <div className="col-12">
          <div
            className="card rounded-5"
            style={{
              minHeight: "200px",
              backgroundColor: "rgba(254, 191, 0, 1)",
            }}
          >
            <div className="row g-0">
              <div className="col-12 col-md-3">
                <div
                  className="card rounded-5 p-3 p-md-5 m-3"
                  style={{
                    backgroundColor: "#FEF7CB",
                    position: "relative",
                  }}
                >
                  <img
                    src={user}
                    alt=""
                    className="img-fluid"
                    style={{ maxWidth: "120px", margin: "0 auto" }}
                  />
                </div>
              </div>
              <div className="col-12 col-md-7">
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
