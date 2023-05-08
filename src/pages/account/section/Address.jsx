import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "@firebase/firestore";
import AddressCard from "../../../components/AddressCard";
import { firestore } from "../../../firebase/config";
import { useContext } from "react";
import { UserContext } from "../../../context/Context";
import { useState } from "react";
import ReactModal from "react-modal";
import bg from "../../../assets/bg-modal.svg";
import { useEffect } from "react";

const Address = () => {
  const { firestoreid, biodata } = useContext(UserContext);
  const [modalshow, setModalShow] = useState(false);
  const [modalshowUpdate, setModalShowUpdate] = useState(false);
  const [address, setAddress] = useState({});
  const [listAddress, setListAddress] = useState([]);

  const querycollection = collection(
    firestore,
    `address/${biodata.id}/listaddress`
  );
  const customStyles = {
    overlay: {
      zIndex: 9999999,
      backgroundColor: "rgba(0, 0, 0, 0.25)",
    },
    content: {
      zIndex: 1000,
      boxShadow: "9px 16px 18px 0px rgba(0,0,0,0.2)",
      width: "30vw",
      height: "28vw",
      top: "25%",
      left: "35%",
      backgroundImage: `url(${bg})`,
    },
  };
  // console.log(docs.nickaddress);
  const handleAddAddress = async (e) => {
    e.preventDefault();
    await addDoc(querycollection, {
      nickaddress: address.nickaddress,
      receiver: address.receiver,
      fulladdress: address.fulladdress,
      phone: address.phone,
    });
    setAddress("");
    setModalShow(false);
  };
  const handleDelete = async (id) => {
    await deleteDoc(
      collection(firestore, `address/${biodata.id}/listaddress/`, id)
    );
    // console.log();
  };
  const handleUpdate = () => {};

  useEffect(() => {
    const q = query(collection(firestore, `address/${biodata.id}/listaddress`));
    const snapshot = onSnapshot(q, (querySnapshot) => {
      let usersdata = [];
      querySnapshot.forEach((doc) => {
        usersdata.push({ ...doc.data(), id: doc.id });
      });
      setListAddress(usersdata);
    });
    return snapshot;
  }, []);
  return (
    <>
      <div className="container mb-5 mt-3" style={{ marginLeft: "4vw" }}>
        <div className="row">
          <div className="col-12 mb-4 text-end">
            <button
              className="btn bg-warning"
              style={{ marginRight: "5vw" }}
              onClick={(e) => {
                setModalShow(!modalshow);
              }}>
              Tambah Alamat Baru
            </button>
          </div>
          {listAddress?.map((e, index) => (
            <>
              <div className="col-8">
                <AddressCard
                  key={index}
                  id={e.id}
                  nickaddress={e.nickaddress}
                  receiver={e.receiver}
                  phone={e.phone}
                  fulladdress={e.fulladdress}
                  handledelete={() => {
                    handleDelete(e.id);
                  }}
                  showmodal={() => {
                    setModalShowUpdate(!modalshowUpdate);
                  }}
                />
              </div>
            </>
          ))}
        </div>
      </div>
      {/* addmodal */}
      <ReactModal
        isOpen={modalshow}
        onRequestClose={() => setModalShow(false)}
        style={customStyles}
        contentLabel="Example Modal">
        {/* <p>{choosenItem.menu}</p> */}
        <p className="fw-bold fs-3">Data Disimpan</p>
        <form onSubmit={handleAddAddress}>
          <div className="row">
            <div className="col-12">
              <label htmlFor="nickaddress" className="form-label">
                Label Alamat
              </label>
            </div>
            <div className="col-12">
              <input
                value={address.nickaddress}
                type="text"
                className="form-control"
                id="nickaddress"
                onChange={(e) =>
                  setAddress({ ...address, nickaddress: e.target.value })
                }
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="receiver" className="form-label">
                Nama Penerima
              </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                id="receiver"
                required
                value={address.receiver}
                onChange={(e) =>
                  setAddress({ ...address, receiver: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="phone" className="form-label">
                No. HP
              </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                required
                id="phone"
                value={address.phone}
                onChange={(e) =>
                  setAddress({ ...address, phone: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="fulladdress" className="form-label">
                Alamat Lengkap
              </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                value={address.fulladdress}
                required
                id="fulladdress"
                onChange={(e) =>
                  setAddress({ ...address, fulladdress: e.target.value })
                }
              />
            </div>
          </div>
          <button type="submit" className="btn btn-warning mt-3 w-100">
            Tambah Alamat
          </button>
        </form>
        <button
          className="btn btn-warning mt-3"
          onClick={() => {
            // setIsLoggedIn(true);
            setAddress("");
            setModalShow(false);
          }}>
          Tutup
        </button>
      </ReactModal>

      {/* update modal */}
      <ReactModal
        isOpen={modalshowUpdate}
        onRequestClose={() => setModalShowUpdate(false)}
        style={customStyles}
        contentLabel="Example Modal">
        {/* <p>{choosenItem.menu}</p> */}
        <p className="fw-bold fs-3">Data Disimpan</p>
        <form onSubmit={handleUpdate}>
          <div className="row">
            <div className="col-12">
              <label htmlFor="nickaddress" className="form-label">
                Label Alamat
              </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                id="nickaddress"
                value={address.nickaddress}
                onChange={(e) =>
                  setAddress({ ...address, nickaddress: e.target.value })
                }
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="receiver" className="form-label">
                Nama Penerima
              </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                id="receiver"
                required
                value={address.receiver}
                onChange={(e) =>
                  setAddress({ ...address, receiver: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="phone" className="form-label">
                No. HP
              </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                value={address.phone}
                required
                id="phone"
                onChange={(e) =>
                  setAddress({ ...address, phone: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="fulladdress" className="form-label">
                Alamat Lengkap
              </label>
            </div>
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                required
                id="fulladdress"
                value={address.fulladdress}
                onChange={(e) =>
                  setAddress({ ...address, fulladdress: e.target.value })
                }
              />
            </div>
          </div>
          <button type="submit" className="btn btn-warning mt-3 w-100">
            Tambah Alamat
          </button>
        </form>
        <button
          className="btn btn-warning mt-3"
          onClick={() => {
            // setIsLoggedIn(true);
            setModalShowUpdate(false);
            setAddress("");
          }}>
          Tutup
        </button>
      </ReactModal>
    </>
  );
};
export default Address;
