import logo from "../assets/logobana.svg";
import cart from "../assets/cart.svg";
import user from "../assets/user.svg";
import notif from "../assets/notif.svg";

const Header = () => {
  return (
    <>
      <header className="px-1 pt-2 shadow sticky-top bg-white">
        <ul className="nav nav-pills">
          <div className="row  w-100">
            <div className="col-10 ">
              <div className="row">
                <div className="col-1">
                  <li className="nav-item">
                    <a
                      href="/"
                      className="d-flex align-items-center  text-white text-decoration-none">
                      <img className="w-75" src={logo} alt="" />
                    </a>
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
                    <a href="/" className="d-flex align-items-center">
                      <img width={"62%"} src={notif} alt="" />
                    </a>
                  </li>
                </div>
                <div className="col-4">
                  <li className="nav-item">
                    <a href="/" className="d-flex align-items-center">
                      <img width={"75%"} src={cart} alt="" />
                    </a>
                  </li>
                </div>
                <div className="col-4">
                  <li className="nav-item">
                    <a href="/" className="d-flex align-items-center ">
                      <img width={"75%"} src={user} alt="" />
                    </a>
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
