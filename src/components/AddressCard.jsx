import trash from "../assets/trash.svg";

const AddressCard = () => {
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
                  <p className="text-secondary">Rumah</p>
                </div>
                <div className="col-12">
                  <p className="fw-semibold">Hapid Gantenk Sekali Dua Kali</p>
                </div>
                <div className="col-12">
                  <p>0812xxxxxxxx</p>
                </div>
                <div className="col-7">
                  <p>Jl. Rawamangun 2 No.666, Tengah Tani, Kabupaten Cirebon</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <button className="btn bg-warning " style={{ marginLeft: "5vw" }}>
                Ubah Alamat
              </button>
              <button
                className="btn"
                style={{ marginTop: "6vw", marginLeft: "9.5vw" }}>
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
