import { useContext } from "react";
import { UserContext } from "../../../context/Context";
import { COLORS } from "../../../constants/styles";
import mastercard from "../../../assets/mastercard.svg";
import bni from "../../../assets/bni.svg";
const Payment = () => {
  const { user, firestoreid } = useContext(UserContext);
  return (
    <>
      <div className="row container mt-3 mb-3">
        <div className="col-12 col-lg-4 mb-4 mb-lg-0">
          <div className="row">
            <div className="col-12">
              <p className="fs-3">
                Hai, {user?.displayName} <br /> Selamat datang dihalaman{" "}
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
          className="col-12 col-lg-8 rounded-3"
          style={{ backgroundColor: COLORS.cream, minHeight: "50vh" }}
        >
          <div className="row">
            <div className="col-12 mt-3 ">
              <div
                className="p-3 rounded-3"
                style={{ backgroundColor: COLORS.primaryLighter }}
              >
                <p className="mt-3">Kartu Debit</p>
              </div>
            </div>
            <div className="col-12 mt-3 mb-3">
              <div
                className="rounded-4 border mx-auto"
                style={{
                  backgroundColor: "white",
                  minHeight: "150px",
                  maxWidth: "400px",
                }}
              >
                <div className="ms-3 py-5">
                  <img src={bni} alt="" />
                  <p>523165******</p>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="mx-auto" style={{ maxWidth: "400px" }}>
                <div className="ms-3">
                  <p className="fw-semibold fs-5">
                    Akun Banabams Yang Terhubung
                  </p>
                  <div
                    className="rounded-2 p-2"
                    style={{ backgroundColor: COLORS.primaryLight }}
                  >
                    {firestoreid || "Tidak terhubung"}
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
