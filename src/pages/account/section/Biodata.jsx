import { useContext } from "react";
import { UserContext } from "../../../context/Context";
import { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "@firebase/firestore";
import { firestore } from "../../../firebase/config";
import ReactModal from "react-modal";
import bg from "../../../assets/bg-modal.svg";
import { useEffect } from "react";
const Biodata = () => {
  const { user, biodata, setBiodata, firestoreid } = useContext(UserContext);
  const [modalshow, setModalShow] = useState(false);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateDoc(doc(firestore, "users", biodata.id), {
      name: biodata?.name,
      gender: biodata?.gender,
      checked: biodata?.checked,
      date: biodata?.date,
      phone: biodata?.phone,
    });

    setModalShow(!modalshow);
  };
  const fetchingdata = async () => {
    const q = query(collection(firestore, "users"));
    const snapshot = onSnapshot(q, (querySnapshot) => {
      let usersdata = [];
      querySnapshot.forEach((doc) => {
        usersdata.push({ ...doc.data(), id: doc.id });
      });
      const filteredbiodata = usersdata.find((i) => i.id === firestoreid);
      if (filteredbiodata !== undefined) {
        setBiodata({
          id: filteredbiodata.id,
          name: filteredbiodata.name,
          date: filteredbiodata.date,
          phone: filteredbiodata.phone,
          gender: filteredbiodata.gender,
          checked: filteredbiodata.checked,
        });
      } else {
        setDoc(doc(firestore, "users", firestoreid), {
          name: user.displayName,
          gender: "",
          checked: "",
          date: "",
          phone: "",
        });
      }
    });
  };

  useEffect(() => {
    fetchingdata();
  }, []);
  return (
    <>
      {/* <p>Biodata</p>
      <img src={user?.photoURL} alt="" /> */}
      <div className="container mb-5" style={{ marginLeft: "4vw" }}>
        <form onSubmit={handleSubmit}>
          <div className="row mt-3">
            <div className="col-4">
              <img
                style={{ width: "22vw" }}
                className="rounded-3"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <div className="col-4">
              <div className="mb-2">
                <p>Nama</p>

                <p>{user.displayName}</p>
              </div>
              <div className="mb-2">
                <label htmlFor="name" className="form-label">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  value={biodata.date}
                  onChange={(e) =>
                    // setDate(e.target.value)
                    setBiodata({ ...biodata, date: e.target.value })
                  }
                  className="form-control"
                  id="name"
                  placeholder="Masukan Nama"
                  required
                />
              </div>
              <div className="">
                <label htmlFor="gender">Jenis Kelamin</label>
                <div>
                  <div className="row">
                    <div className="col-3">
                      <input
                        type="radio"
                        value="male"
                        name="gender"
                        className="me-3"
                        // need default value
                        onChange={(e) => {
                          setBiodata({
                            ...biodata,
                            gender: e.target.value,
                            checked: true,
                          });
                        }}
                        checked={
                          biodata.gender === "male" && biodata.checked === true
                            ? true
                            : false
                        }
                      />
                      <label htmlFor="">Male</label>
                    </div>
                    <div className="col-3">
                      <input
                        type="radio"
                        value="female"
                        name="gender"
                        className="me-3"
                        onChange={(e) =>
                          setBiodata({
                            ...biodata,
                            gender: e.target.value,
                            checked: true,
                          })
                        }
                        checked={
                          biodata.gender === "female" &&
                          biodata.checked === true
                            ? true
                            : false
                        }
                      />
                      <label htmlFor="">Female</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Nomor HP
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="message"
                  placeholder="Masukan Nomor Hp"
                  onChange={(e) =>
                    setBiodata({ ...biodata, phone: e.target.value })
                  }
                  value={biodata.phone}
                  required
                />
              </div>
            </div>
            <div className="col-4">
              <button
                type="submit"
                className="btn  w-25"
                style={{
                  backgroundColor: "#FEBF00",
                  border: "2px solid rgba(119, 59, 48, 1)",
                  marginTop: "28vw",
                  marginLeft: "9vw",
                }}>
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
      <ReactModal
        isOpen={modalshow}
        onRequestClose={() => setModalShow(false)}
        style={customStyles}
        contentLabel="Example Modal">
        {/* <p>{choosenItem.menu}</p> */}
        <p className="fw-bold fs-3">Data Disimpan</p>
        <button
          className="btn btn-warning"
          onClick={() => {
            // setIsLoggedIn(true);
            setModalShow(false);
          }}>
          Tutup
        </button>
      </ReactModal>
    </>
  );
};
export default Biodata;
