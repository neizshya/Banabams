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
      <header className="shadow sticky-top bg-white">
        <div className="container-fluid px-3 py-2">
          <div className="row align-items-center">
            <div className="col-4 col-md-2">
              <NavLink to={"/"}>
                <img
                  className="img-fluid"
                  src={logo}
                  alt="Banabams"
                  style={{ maxWidth: "50%", height: "auto" }}
                />
              </NavLink>
            </div>

            <div className="col-md-7 d-none d-md-flex justify-content-center gap-4">
              <button
                onClick={() => scrollToSection("menu")}
                className="btn btn-link text-decoration-none text-dark fw-semibold"
                style={{ cursor: "pointer", fontSize: "1rem" }}
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("kontak")}
                className="btn btn-link text-decoration-none text-dark fw-semibold"
                style={{ cursor: "pointer", fontSize: "1rem" }}
              >
                Kontak
              </button>
            </div>

            <div className="col-8 col-md-3">
              <div className="d-flex align-items-center justify-content-end gap-3">
                <button className="btn btn-link p-1 border-0 bg-transparent d-none d-md-inline">
                  <img
                    src={notif}
                    alt="Notifikasi"
                    style={{ width: "20px", height: "20px" }}
                  />
                </button>
                <NavLink to={"/cart"} className="btn btn-link p-1 border-0">
                  <img
                    src={cart}
                    alt="Keranjang"
                    style={{ width: "20px", height: "20px" }}
                  />
                </NavLink>
                {user ? (
                  <button
                    className="btn btn-link p-1 border-0 bg-transparent"
                    onClick={showModal}
                  >
                    <img
                      src={users}
                      alt="User Account"
                      style={{
                        cursor: "pointer",
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </button>
                ) : (
                  <button
                    className="btn btn-warning btn-sm px-3 py-1"
                    onClick={handleGoogleSignIn}
                    style={{ fontSize: "0.875rem" }}
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Horizontal bar */}
        <div className="d-md-none border-top">
          <div className="d-flex justify-content-center gap-5 py-2">
            <button
              onClick={() => scrollToSection("menu")}
              className="btn btn-link text-decoration-none text-dark fw-semibold p-1"
              style={{ cursor: "pointer", fontSize: "0.9rem" }}
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="btn btn-link text-decoration-none text-dark fw-semibold p-1"
              style={{ cursor: "pointer", fontSize: "0.9rem" }}
            >
              Kontak
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
