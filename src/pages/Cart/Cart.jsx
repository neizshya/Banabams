import { useState, useContext } from "react";
import icon from "../../assets/arrowlocation.svg";
import Footer from "../../components/Footer";
import { Button, Card } from "react-bootstrap";
import Cards from "../../components/CartCard";
import { UserContext } from "../../context/Context";
import { COLORS } from "../../constants/styles";

import trash from "../../assets/trash.svg";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";
import moment from "moment";
import { addDoc, collection, doc } from "firebase/firestore";
import { firestore } from "../../firebase/config";
const Cart = () => {
  const [delivery, setDelivery] = useState(false);
  const {
    menu,
    setMenu,
    topping,
    setTopping,
    Fetchtopping,
    Fetchmenu,
    totalChoosen,
    history,
    setHistory,
    setTotalChoosen,
    totalChoosenMenu,
    setTotalChoosenMenu,
    firestoreid,
  } = useContext(UserContext);
  const navigate = useNavigate();
  // handle increase quantity
  const increment = (item) => {
    setTotalChoosenMenu(
      totalChoosenMenu.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  // handle decrease quantity
  const decrement = (item) => {
    if (item.quantity <= 1) {
      // Remove item if quantity would go below 1
      deleteData(item);
    } else {
      setTotalChoosenMenu(
        totalChoosenMenu.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const deleteData = (item) => {
    console.log("Deleting item:", item);
    const updatedCart = totalChoosenMenu.filter(
      (cartItem) => cartItem.id !== item.id
    );
    console.log("Updated cart:", updatedCart);
    setTotalChoosenMenu(updatedCart);
  };
  // accumulate total price base on totalChoosenMenu quantity
  const accumulateTotalPrice = (items) => {
    return items.reduce((a, b) => {
      return a + b.actualprice * b.quantity;
    }, 0);
  };

  const handleOnclick = async (e) => {
    e.preventDefault();

    if (!totalChoosenMenu || totalChoosenMenu.length === 0) {
      alert("Keranjang kosong! Silakan tambahkan menu terlebih dahulu.");
      return;
    }

    try {
      await addDoc(
        collection(firestore, `history/${firestoreid}/historytransactions/`),
        {
          id: firestoreid,
          uid: uid(),
          data: totalChoosenMenu,
          totalAmount: accumulateTotalPrice(totalChoosenMenu),
          date: moment().format("DD/MM/YYYY"),
          timestamp: moment().valueOf(),
        }
      );

      // Clear cart after successful checkout
      setTotalChoosenMenu([]);

      // Navigate to transaction history
      navigate("/account/transaction");
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Terjadi kesalahan saat checkout. Silakan coba lagi.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-lg-8">
                <h1 className="fs-1 fw-semibold mt-5">Keranjang</h1>
              </div>
              <div className="col-12 col-lg-4 mt-4">
                <div
                  className="p-4 rounded-5 "
                  style={{
                    border: `1px solid ${COLORS.brown}`,
                    color: COLORS.brown,
                  }}
                >
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
                        }}
                      >
                        GANTI
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 mb-4 mb-lg-0">
            <div className="row align-items-center">
              <div className="col-8 col-sm-6">
                <div className="d-flex align-items-center gap-3">
                  <input
                    type="checkbox"
                    name="pilih"
                    id="pilih"
                    style={{ transform: "scale(1.5)" }}
                  />
                  <label htmlFor="pilih" className="fw-semibold fs-5 mb-0">
                    Pilih Semua
                  </label>
                </div>
              </div>
              <div className="col-4 col-sm-6 text-end">
                <button className="btn fs-5" style={{ color: COLORS.primary }}>
                  Hapus
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <div className="row mt-4">
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
          <div className="col-12 col-lg-8">
            <div className="row mb-3">
              <div className="col-12">
                <div className="row">
                  {totalChoosenMenu?.length > 0 ? (
                    <>
                      <div className="row">
                        {totalChoosenMenu.map((e, index) => (
                          <div
                            key={e.id || index}
                            className="row mb-4 align-items-start"
                          >
                            <div className="col-auto">
                              <input
                                type="checkbox"
                                name="pilih"
                                id={`pilih-${index}`}
                                style={{
                                  transform: "scale(1.5)",
                                  marginTop: "8px",
                                }}
                              />
                            </div>
                            <div className="col">
                              <Cards
                                height={"auto"}
                                width={"100%"}
                                leftSide={
                                  <>
                                    <div className="col-12 col-sm-1">
                                      <button
                                        className="btn mt-3"
                                        onClick={() => {
                                          deleteData(e);
                                          // buat delete index
                                        }}
                                      >
                                        <img
                                          src={trash}
                                          className="img-fluid"
                                          style={{ maxWidth: "32px" }}
                                        />
                                      </button>
                                    </div>
                                    <div className="col-12 col-sm-3 pt-2">
                                      <div
                                        className="border rounded-3 mt-3"
                                        style={{
                                          backgroundColor: COLORS.cream,
                                          width: "100%",
                                          maxWidth: "180px",
                                        }}
                                      >
                                        <div className="row ">
                                          <div className="col-4">
                                            <button
                                              className="btn"
                                              onClick={() => {
                                                decrement(e);
                                              }}
                                            >
                                              <img src={minus} alt="" />
                                            </button>
                                          </div>
                                          <div className="col-4 ">
                                            <p className="fs-5 fw-semibold mt-1 ms-2">
                                              {/* {total} */}
                                              {e.quantity}
                                            </p>
                                          </div>
                                          <div className="col-4">
                                            <button
                                              className="btn"
                                              onClick={() => {
                                                increment(e);
                                              }}
                                            >
                                              <img src={plus} alt="" />
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                }
                                price={`${e.quantity} x Rp ${e.actualprice}`}
                                img={e.img}
                                menuName={`${e.taste} (${
                                  e.topping ? e.topping : ""
                                })`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-12 ">
                        <p className=" fs-3">anda belum memasukan menu</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div
              className="border rounded-3 shadow"
              style={{ minHeight: "400px" }}
            >
              <div className="row container p-4">
                <div className="col-12">
                  <p className="fs-4 fw-semibold">Ringkasan Belanja</p>
                  <hr style={{ borderTop: "1px solid #ccc" }} />
                </div>
                <div className="col-12 mt-4">
                  <p className="fs-5">
                    Total Harga ({accumulateTotalPrice(totalChoosenMenu)})
                  </p>
                </div>
                <div className="col-12 mt-5"></div>
                <div className="col-12 mt-5"></div>
                <div className="col-12 mt-5"></div>
                <div className="col-12 mt-5"></div>
                <div className="col-12 mt-5">
                  <hr style={{ borderTop: "1px solid #ccc" }} />
                  <div className="row mt-3">
                    <div className="col-6">
                      <p className="fs-5 fw-semibold">Total Harga</p>
                    </div>
                    <div className="col-6 text-end">
                      <p className="fs-5 fw-semibold">
                        Rp {accumulateTotalPrice(totalChoosenMenu)}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button
                    onClick={handleOnclick}
                    className="btn btn-warning w-100"
                    style={{ border: "1.5px solid brown", maxWidth: "300px" }}
                  >
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
