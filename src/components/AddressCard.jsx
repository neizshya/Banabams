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
          //   width: "45vw",
          border: "1px solid brown",
        }}>
        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <div className="row ">
                <div className="col-12 ">
                  <p className="text-secondary">{nickaddress}</p>
                </div>
                <div className="col-12">
                  <p className="fw-semibold">{receiver}</p>
                </div>
                <div className="col-12">
                  <p>{phone}</p>
                </div>
                <div className="col-7">
                  <p>{fulladdress}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <button
                className="btn bg-warning "
                style={{ marginLeft: "5vw" }}
                onClick={showmodal}>
                Ubah Alamat
              </button>
              <button
                className="btn"
                style={{ marginTop: "6vw", marginLeft: "9.5vw" }}
                onClick={handledelete}>
                <img src={trash} style={{ width: "1.5vw" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddressCard;
