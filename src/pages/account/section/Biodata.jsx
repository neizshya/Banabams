import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/Context";
import {
  collection,
  doc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../../../firebase/config";
import Modal from "../../../components/Modal";
import { BUTTON_STYLES } from "../../../constants/styles";
const Biodata = () => {
  const { user, biodata, setBiodata, firestoreid } = useContext(UserContext);
  const [modalshow, setModalShow] = useState(false);
  // handle submit update
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
  // fetching data with create collection if not exist
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
      <div className="container mb-5">
        <form onSubmit={handleSubmit}>
          <div className="row mt-3">
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <img
                style={{ width: "100%" }}
                className="rounded-3"
                src={user?.photoURL}
                alt=""
              />
            </div>
            <div className="col-12 col-md-4 mb-3 mb-md-0">
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
                  value={biodata.date || ""}
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
                  value={biodata.phone || ""}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-4 text-center text-md-end">
              <button
                type="submit"
                className="btn mt-4"
                style={BUTTON_STYLES.primary}
              >
                Simpan
              </button>
            </div>
          </div>
        </form>
      </div>
      <Modal
        isOpen={modalshow}
        onClose={() => setModalShow(false)}
        title="Data Disimpan"
      />
    </>
  );
};
export default Biodata;
