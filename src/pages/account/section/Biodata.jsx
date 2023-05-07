import { useContext } from "react";
import { UserContext } from "../../../context/Context";
import { useState } from "react";

const Biodata = () => {
  const { user, name, setName, date, setDate, phone, setPhone, userid } =
    useContext(UserContext);
  const [gender, setGender] = useState({
    gender: "",
    checked: false,
  });
  const [isChecked, setisChecked] = useState(false);

  //   console.log(user);
  const handleOnchange = (e) => {
    const value = e.target.value;
    setGender({ gender: value, checked: true });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(gender.gender);
    console.log(name);
    console.log(date);
    console.log(phone);
    console.log(userid);
  };

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
              <div className="row">
                <div className="col-12  mt-5">
                  <input
                    className="form-control"
                    type="file"
                    id="formFile"
                    accept=".png,.svg"
                  />
                </div>
                <div className="col-12 mt-3">
                  <p className="fs-5 fw-medium">
                    Maksimum File 15MB dengan ekstensi JPG, JPEG, PNG, GIF
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="mb-2">
                <label htmlFor="name" className="form-label">
                  Nama
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  id="name"
                  placeholder="Masukan Nama"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="name" className="form-label">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
                        onChange={handleOnchange}
                        checked={
                          gender.gender === "male" && gender.checked === true
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
                        onChange={handleOnchange}
                        checked={
                          gender.gender === "female" && gender.checked === true
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
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
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
    </>
  );
};
export default Biodata;
