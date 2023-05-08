import { NavLink } from "react-router-dom";

const HeaderAccount = () => {
  return (
    <>
      <header className="">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <div className="col-3 pt-3 text-center border-bottom">
            <NavLink
              style={{ textDecorationLine: "none" }}
              to={"/account/biodata"}>
              <li className="link-dark ">
                <p className="fw-semibold fs-5 mt-3">Biodata Diri</p>
              </li>
            </NavLink>
          </div>
          <div className="col-3 pt-3 text-center border-bottom border-start">
            <NavLink
              style={{ textDecorationLine: "none" }}
              to={"/account/address"}>
              <li className="link-dark ">
                <p className="fw-semibold fs-5 mt-3">Daftar Alamat</p>
              </li>
            </NavLink>
          </div>
          <div className="col-3 p-3 text-center border-start border-bottom border-end">
            <NavLink
              style={{ textDecorationLine: "none" }}
              to={"/account/payment"}>
              <li className="link-dark  ">
                <p className="fw-semibold fs-5 mt-3">Metode Pembayaran</p>
              </li>
            </NavLink>
          </div>
          <div className="border-bottom col-3 pt-3 text-center">
            <NavLink
              style={{ textDecorationLine: "none" }}
              to={"/account/transaction"}>
              <li className="link-dark ">
                <p className="fw-semibold fs-5 mt-3">Riwayat Transaksi</p>
              </li>
            </NavLink>
          </div>
        </ul>
      </header>
    </>
  );
};
export default HeaderAccount;
