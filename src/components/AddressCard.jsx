import React from "react";
import trash from "../assets/trash.svg";

const AddressCard = ({
  nickaddress,
  receiver,
  phone,
  fulladdress,
  handledelete,
  showmodal,
  id,
}) => {
  return (
    <>
      <div
        className="card shadow rounded-4 mb-3"
        style={{
          border: "1px solid brown",
        }}
      >
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-8 mb-3 mb-md-0">
              <div className="row">
                <div className="col-12">
                  <p className="text-secondary">{nickaddress}</p>
                </div>
                <div className="col-12">
                  <p className="fw-semibold">{receiver}</p>
                </div>
                <div className="col-12">
                  <p>{phone}</p>
                </div>
                <div className="col-12">
                  <p>{fulladdress}</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center text-md-end">
              <button
                className="btn bg-warning mb-2 mb-md-0"
                onClick={showmodal}
              >
                Ubah Alamat
              </button>
              <button
                className="btn d-block d-md-inline ms-md-2"
                onClick={handledelete}
              >
                <img
                  src={trash}
                  className="img-fluid"
                  style={{ maxWidth: "24px" }}
                  alt="hapus"
                  loading="lazy"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default React.memo(AddressCard);
