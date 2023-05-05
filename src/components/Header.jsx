import logo from "../assets/logobana.svg";
import cart from "../assets/cart.svg";
import users from "../assets/user.svg";
import notif from "../assets/notif.svg";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { useModal } from "react-modal-hook";
import ReactModal from "react-modal";
import { UserContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { isLoggedIn, setIsLoggedIn, GoogleSignIn, logOut, user } =
    useContext(UserContext);
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const [showModal, hideModal] = useModal(() => (
    <ReactModal
      isOpen
      style={{
        overlay: {
          zIndex: 9999999,
          width: "20vw",
          height: "15vw",
          background: "transparent",
          marginLeft: "78vw",
          marginTop: "1.5vw",
        },
        content: {
          zIndex: 1000,
          boxShadow: "9px 16px 18px 0px rgba(0,0,0,0.2)",
        },
      }}>
      <p>Modal content</p>
      <button onClick={hideModal}> close</button>
      <button onClick={handleSignOut}> Sign Out</button>
    </ReactModal>
  ));
  ReactModal.setAppElement("*");

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignIn();
    } catch (error) {
      console.error(error);
    }
  };
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
                    <a href="#menu" className="nav-link px-2 text-dark fs-5">
                      Menu
                    </a>
                  </li>
                </div>
                <div className="col-1">
                  <li className="nav-item">
                    <a href="#kontak" className="nav-link px-2 text-dark fs-5">
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
                  <NavLink
                    to={"/cart"}
                    className="d-flex align-items-center"
                    onMouseOver={showModal}>
                    <li className="nav-item">
                      <img width={"75%"} src={cart} alt="" />
                    </li>
                  </NavLink>
                </div>
                <div className="col-4">
                  <li className="nav-item">
                    {user?.displayName ? (
                      <NavLink
                        to={"/account"}
                        className="d-flex align-items-center">
                        <img
                          width={"75%"}
                          src={users}
                          alt=""
                          onMouseOver={showModal}
                          onMouseOut={hideModal}
                        />
                      </NavLink>
                    ) : (
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          // setIsLoggedIn(true);
                          handleGoogleSignIn();
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
