import logo from "../assets/logobana.svg";
import cart from "../assets/cart.svg";
import user from "../assets/user.svg";
import notif from "../assets/notif.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useModal } from "react-modal-hook";
import ReactModal from "react-modal";
const Header = () => {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal isOpen>
      <p>Modal content</p>
    </ReactModal>
  ));
  ReactModal.setAppElement("*");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <header className="px-1 pt-2 shadow sticky-top bg-white">
        <ul className="nav nav-pills">
          <div className="row  w-100">
            <div className="col-10 ">
              <div className="row">
                <div className="col-1">
                  <li className="nav-item">
                    <NavLink to={"/"} className="d-flex align-items-center">
                      <img className="w-75" src={logo} alt="" />
                    </NavLink>
                  </li>
                </div>
                <div className="col-1">
                  <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-dark fs-5">
                      Menu
                    </a>
                  </li>
                </div>
                <div className="col-1">
                  <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-dark fs-5">
                      Kontak
                    </a>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-2 d-flex align-items-start mt-2">
              <div className="row ">
                <div className="col-4">
                  <li className="nav-item">
                    <NavLink
                      to={"/notification"}
                      className="d-flex align-items-center">
                      <img
                        width={"62%"}
                        src={notif}
                        alt=""
                        onMouseOver={showModal}
                        onMouseOut={hideModal}
                      />
                    </NavLink>
                  </li>
                </div>
                <div className="col-4">
                  <li className="nav-item">
                    <NavLink to={"/cart"} className="d-flex align-items-center">
                      <img
                        width={"75%"}
                        src={cart}
                        alt=""
                        onMouseOver={showModal}
                        onMouseOut={hideModal}
                      />
                    </NavLink>
                  </li>
                </div>
                <div className="col-4">
                  <li className="nav-item">
                    {isLoggedIn ? (
                      <NavLink
                        to={"/account"}
                        className="d-flex align-items-center">
                        <img
                          width={"75%"}
                          src={user}
                          alt=""
                          onMouseOver={showModal}
                          onMouseOut={hideModal}
                        />
                      </NavLink>
                    ) : (
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          setIsLoggedIn(true);
                        }}>
                        Login
                      </button>
                    )}
                  </li>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </header>
    </>
  );
};
export default Header;
