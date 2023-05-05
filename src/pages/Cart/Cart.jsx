import { useState } from "react";
import icon from "../../assets/arrowlocation.svg";
import Footer from "../../components/Footer";
import { Button, Card } from "react-bootstrap";
import CartCard from "../../components/CartCard";
import { useContext } from "react";
import { UserContext } from "../../context/Context";
const Cart = () => {
  const [delivery, setDelivery] = useState(false);
  const {
    menu,
    setMenu,
    topping,
    setTopping,
    Fetchtopping,
    Fetchmenu,
    quantity,
    setQuantity,
  } = useContext(UserContext);
  // const Increase = () => {
  //   setQuantity(quantity + 1);
  // };
  // const Decrease = () => {
  //   setQuantity(quantity - 1);
  // };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-8">
                <h1 className="fs-1 fw-semibold mt-5">Keranjang</h1>
              </div>
              <div className="col-4 mt-4">
                <div
                  className="p-4 rounded-5 "
                  style={{ border: "1px solid #773B30", color: "#773B30" }}>
                  <div className="row">
                    <div className="col-6">
                      <p className="fs-4 mt-2">
                        {delivery ? "Di ambil" : "Pengiriman"}
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <button
                        className="btn btn-warning w-75 mt-2"
                        onClick={() => {
                          setDelivery(!delivery);
                        }}>
                        GANTI
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="row ms-1">
              <div className="col-6 ">
                <div className="row">
                  <div className="col-1 mt-1 ">
                    <input
                      type="checkbox"
                      name="pilih"
                      id="pilih"
                      style={{ transform: "scale(2)" }}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="pilih" className="fw-semibold fs-4">
                      Pilih Semua
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-5 text-end">
                <button className="btn fs-5" style={{ color: "#FEBF00" }}>
                  Hapus
                </button>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div className="row mt-4 ms-3">
              <div className="col-1">
                <img src={icon} alt="" className=" " />
              </div>
              <div className="col-9">
                <p className="fw-semibold fs-5">
                  Diambil di
                  <span style={{ color: "#FEBF00" }}> Kedai Banabams</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="row ms-1 mb-3">
              <div className="col-6 ">
                <div className="row">
                  <div className="col-1 mt-1 me-3">
                    <input
                      type="checkbox"
                      name="pilih"
                      id="pilih"
                      style={{ transform: "scale(2)" }}
                    />
                  </div>
                  <div className="col-7 ">
                    <CartCard setTotal={setQuantity} total={quantity} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row ms-1">
              <div className="col-6 ">
                <div className="row">
                  <div className="col-1 mt-1 me-3">
                    <input
                      type="checkbox"
                      name="pilih"
                      id="pilih"
                      style={{ transform: "scale(2)" }}
                    />
                  </div>
                  <div className="col-7 ">
                    <CartCard setTotal={setQuantity} total={quantity} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="border rounded-3 shadow" style={{ height: "30vw" }}>
              <div className="row container p-4">
                <div className="col-12">
                  <p className="fs-4 fw-semibold">Ringkasan Belanja</p>
                  <div
                    style={{
                      display: "block",
                      marginBefore: "0.5em",
                      marginAfter: "0.5em",
                      overflow: "hidden",
                      borderStyle: "inset",
                      borderWidth: 1,
                      width: "20vw",
                    }}>
                    {/* line */}
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <p className="fs-5">Total Harga ()</p>
                </div>
                <div className="col-12 mt-5"></div>
                <div className="col-12 mt-5"></div>
                <div className="col-12 mt-5"></div>
                <div className="col-12 mt-5"></div>
                <div className="col-12 mt-5">
                  <div
                    style={{
                      display: "block",
                      marginBefore: "0.5em",
                      marginAfter: "0.5em",
                      overflow: "hidden",
                      borderStyle: "inset",
                      borderWidth: 1,
                      width: "20vw",
                    }}>
                    {/* line */}
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <p className="fs-5 fw-semibold">Total Harga ()</p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="fs-5 fw-semibold">Rp 0</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 ">
                  <button
                    className="btn btn-warning w-75 ms-5"
                    style={{ border: "1.5px solid brown" }}>
                    Bayar Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
