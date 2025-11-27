import logo from "../assets/logobana.svg";
import cart from "../assets/cart.svg";
import users from "../assets/user.svg";
import notif from "../assets/notif.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { useModal } from "react-modal-hook";
import ReactModal from "react-modal";
import { UserContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { isLoggedIn, setIsLoggedIn, GoogleSignIn, logOut, user } =
    useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  const [showModal, hideModal] = useModal(() => (
    <ReactModal
      isOpen
      style={{
        overlay: {
          zIndex: 9999999,
          backgroundColor: "transparent",
        },
        content: {
          zIndex: 1000,
          boxShadow: "9px 16px 18px 0px rgba(0,0,0,0.2)",
          width: "min(90vw, 280px)",
          position: "absolute",
          top: "70px",
          right: "20px",
          left: "auto",
          bottom: "auto",
        },
      }}
    >
      <div className="row g-2">
        <div className="col-12">
          <button
            onClick={() => {
              hideModal();
              navigate("/account/biodata");
            }}
            className="btn bg-warning w-100"
          >
            Akun Saya
          </button>
        </div>
        <div className="col-12">
          <button
            onClick={() => {
              hideModal();
              handleSignOut();
            }}
            className="btn btn-outline-danger w-100"
          >
            Sign Out
          </button>
        </div>
        <div className="col-12">
          <button onClick={hideModal} className="btn btn-secondary w-100">
            Tutup
          </button>
        </div>
      </div>
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
            <div className="col-12 col-lg-10 ">
              <div className="row">
                <div className="col-auto">
                  <li className="nav-item">
                    <NavLink to={"/"} className="d-flex align-items-center">
                      <img className="w-75" src={logo} alt="" />
                    </NavLink>
                  </li>
                </div>
                <div className="col-1">
                  <li className="nav-item">
                    <button
                      onClick={() => scrollToSection("menu")}
                      className="nav-link px-2 text-dark fs-5 bg-transparent border-0"
                      style={{ cursor: "pointer" }}
                    >
                      Menu
                    </button>
                  </li>
                </div>
                <div className="col-1">
                  <li className="nav-item">
                    <button
                      onClick={() => scrollToSection("kontak")}
                      className="nav-link px-2 text-dark fs-5 bg-transparent border-0"
                      style={{ cursor: "pointer" }}
                    >
                      Kontak
                    </button>
                  </li>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 d-flex align-items-start mt-2 mt-lg-0">
              <div className="row ">
                <div className="col-4">
                  <li className="nav-item">
                    <img className="img-fluid" src={notif} alt="" />
                  </li>
                </div>
                <div className="col-4">
                  <NavLink to={"/cart"} className="d-flex align-items-center">
                    <li className="nav-item">
                      <img className="img-fluid" src={cart} alt="" />
                    </li>
                  </NavLink>
                </div>
                <div className="col-4">
                  <li className="nav-item">
                    {user ? (
                      <img
                        className="img-fluid"
                        src={users}
                        alt="User Account"
                        onClick={showModal}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => {
                          handleGoogleSignIn();
                        }}
                      >
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
