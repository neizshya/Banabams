import AddressCard from "../../../components/AddressCard";

const Address = () => {
  return (
    <>
      <div className="container mb-5 mt-3" style={{ marginLeft: "4vw" }}>
        <div className="row">
          <div className="col-12 mb-4 text-end">
            <button className="btn bg-warning" style={{ marginRight: "5vw" }}>
              Tambah Alamat Baru
            </button>
          </div>
          <div className="col-8">
            <AddressCard />
            <AddressCard />
          </div>
        </div>
      </div>
    </>
  );
};
export default Address;
