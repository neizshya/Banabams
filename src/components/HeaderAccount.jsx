import { NavLink } from "react-router-dom";

const HeaderAccount = () => {
  const tabs = [
    { to: "/account/biodata", label: "Biodata Diri" },
    { to: "/account/address", label: "Daftar Alamat" },
    { to: "/account/payment", label: "Metode Pembayaran" },
    { to: "/account/transaction", label: "Riwayat Transaksi" },
  ];

  return (
    <>
      <header className="">
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {tabs.map((tab, index) => (
            <div
              key={tab.to}
              className={`col-12 col-md-3 pt-3 text-center border-bottom ${
                index > 0 ? "border-md-start" : ""
              } ${index === 2 ? "border-md-end" : ""}`}
            >
              <NavLink style={{ textDecorationLine: "none" }} to={tab.to}>
                {({ isActive }) => (
                  <li className="link-dark">
                    <p
                      className="fw-semibold fs-5 mt-3 pb-2"
                      style={{
                        borderBottom: isActive ? "3px solid #FEBF00" : "none",
                        marginBottom: isActive ? "0" : "3px",
                      }}
                    >
                      {tab.label}
                    </p>
                  </li>
                )}
              </NavLink>
            </div>
          ))}
        </ul>
      </header>
    </>
  );
};
export default HeaderAccount;
