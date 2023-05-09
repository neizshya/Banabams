import { useContext } from "react";
import { UserContext } from "../../../context/Context";
import mastercard from "../../../assets/mastercard.svg";
import bni from "../../../assets/bni.svg";
const Payment = () => {
  return (
    <>
      <div className="row container mt-3 mb-3 ms-5" sty>
        <div className="col-4">
          <div className="row">
            <div className="col-12">
              <p className="fs-3">
                Hai, {name} <br /> Selamat datang dihalaman{" "}
                <span className="fw-semibold">Pengaturan Pembayaran</span>
              </p>
            </div>
            <div className="col-12">
              <p>Atur pembayaran Kamu untuk memudahkan Kamu berbelanja.</p>
            </div>
            <div className="col-12">
              <div className="border rounded-3">
                <div className="container p-3 ">
                  <div className="row">
                    <div className="col-6 mt-2">Kartu Debit</div>
                    <div className="col-6 text-end">
                      <img src={mastercard} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className=" ms-5 col-8  w-50 rounded-3"
          style={{ backgroundColor: "#FEF7CB", height: "40vw" }}>
          <div className="row">
            <div className="col-12 mt-3 ">
              <div
                className="p-3 rounded-3"
                style={{ backgroundColor: "#FEED98" }}>
                <p className="mt-3">Kartu Debit</p>
              </div>
            </div>
            <div className="col-12 mt-3 mb-3">
              <div
                className=" rounded-4 border"
                style={{
                  backgroundColor: "white",
                  height: "15vw",
                  width: "30vw",
                  marginLeft: "2.8vw",
                }}>
                <div className="ms-3 " style={{ paddingTop: "8vw" }}>
                  <img src={bni} alt="" />
                  <p>523165******</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div
                style={{
                  marginLeft: "2.8vw",
                }}>
                <div className="ms-3 ">
                  <p className="fw-semibold fs-5">
                    Akun Banabams Yang Terhubung
                  </p>
                  <div
                    className="rounded-2 p-2"
                    style={{ width: "25vw", backgroundColor: "#FED33F" }}>
                    {userid}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
