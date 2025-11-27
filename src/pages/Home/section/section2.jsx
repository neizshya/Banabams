import { Button, Card, Carousel } from "react-bootstrap";
import cart from "../../../assets/roundcart.svg";

import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import Cardview from "../../../components/Card";
import { UserContext } from "../../../context/Context";
import Loading from "./Loader";
import { useModal } from "react-modal-hook";
import ReactModal from "react-modal";
import { MODAL_STYLES, COLORS } from "../../../constants/styles";
import bg from "../../../assets/bg-modal.svg";
import cancel from "../../../assets/cancel-icon.svg";
import plus from "../../../assets/plus.svg";
import minus from "../../../assets/minus.svg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { uid } from "uid";

const Section2 = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowNotLoggedIn, setmodalShowNotLoggedIn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [totalPrices, setTotalPrices] = useState({
    total: 0,
    topping: "",
  });
  const {
    isLoggedIn,
    setIsLoggedIn,
    GoogleSignIn,
    logOut,
    menu,
    setMenu,
    topping,
    setTopping,
    isLoading,
    testimonials,
    setTestimonials,
    quantity,
    setQuantity,
    totalChoosen,
    setTotalChoosen,
    totalChoosenMenu,
    setTotalChoosenMenu,
    user,
  } = useContext(UserContext);
  // handle sign in
  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignIn();
    } catch (error) {
      console.error(error);
    }
  };
  const navigate = useNavigate();
  const [choosenMenu, setChoosenMenu] = useState({});

  const customStyles = {
    ...MODAL_STYLES,
    content: {
      ...MODAL_STYLES.content,
      backgroundImage: `url(${bg})`,
    },
  };
  const [checkedState, setCheckedState] = useState(
    new Array(topping.length).fill(false)
  );
  const handleChangeInputMenuModal = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    // Calculate total topping price and collect all selected toppings
    let totalToppingPrice = 0;
    const selectedToppings = [];

    updatedCheckedState.forEach((isChecked, index) => {
      if (isChecked) {
        totalToppingPrice += parseInt(topping[index].price);
        selectedToppings.push(topping[index].taste);
      }
    });

    setTotalPrices({
      total: totalToppingPrice,
      toppings: selectedToppings.join(", ") || "",
    });
  };
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleClickModal = (e) => {
    if (quantity < 1) {
      alert("Jumlah minimal 1");
      return;
    }

    setTotalChoosenMenu([
      ...totalChoosenMenu,
      {
        ...choosenMenu,
        quantity: quantity,
        topping: totalPrices.toppings || "",
        actualprice: totalPrices.total + parseInt(choosenMenu.price),
        isMenuAdded: true,
        isMenuChecked: true,
        id: uid(),
      },
    ]);

    // Reset modal state
    setModalShow(false);
    setQuantity(1);
    setCheckedState(new Array(topping.length).fill(false));
    setTotalPrices({ total: 0, toppings: "" });

    navigate("/cart");
  };
  const toppingView = (
    <>
      {topping.map((item, index) => (
        <div
          key={`topping-${index}`}
          className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
        >
          <Card className="shadow h-100" style={{ width: "100%" }}>
            <Card.Img
              className="pt-3"
              variant="top"
              src={item.img}
              style={{ width: "50%", margin: "0 auto" }}
            />
            <Card.Body className="mt-3 text-center">
              <Card.Title>{item.taste}</Card.Title>
              <Card.Text>⭐⭐⭐⭐⭐</Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white">
              <div className="row">
                <div className="col-6 text-start">Rp 5.000</div>
                <div className="col-6 text-end"></div>
              </div>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </>
  );
  const menuView = (
    <>
      {menu.map((item, index) => (
        <div
          key={`menu-${index}`}
          className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3"
        >
          <Card className="shadow h-100" style={{ width: "100%" }}>
            <Card.Img
              className="pt-3"
              variant="top"
              src={item.img}
              style={{ width: "50%", margin: "0 auto" }}
            />
            <Card.Body className="mt-3 text-center">
              <Card.Title>{item.taste}</Card.Title>
              <Card.Text>⭐⭐⭐⭐⭐</Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white">
              <div className="row">
                <div className="col-6 text-start">Rp 10.000</div>
                <div className="col-6 text-end">
                  <button
                    type="button"
                    style={{
                      border: "none",
                      appearance: "none",
                      backgroundColor: "white",
                    }}
                    // onClick={() => {
                    //   // setMenu({
                    //   //   img: item.img,
                    //   //   taste: item.taste,
                    //   //   value: item.value,
                    //   //   price: item.price,
                    //   // });
                    // }}
                    onClick={() => {
                      setChoosenMenu({
                        menu: item.value,
                        img: item.img,
                        taste: item.taste,
                        price: item.price,
                      });
                      if (!user) {
                        // alert("Login Terlebih Dahulu")
                        setmodalShowNotLoggedIn(true);
                      } else {
                        setModalShow(!modalShow);
                      }
                      // showModal();
                    }}
                  >
                    <img src={cart} alt="" style={{ width: "24px" }} />
                  </button>
                </div>
              </div>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </>
  );
  const TestiView = (
    <>
      <Carousel
        nextIcon={<IoIosArrowDroprightCircle size={"3em"} />}
        prevIcon={<IoIosArrowDropleftCircle size={"3em"} />}
      >
        {testimonials.map((e, index) => (
          <Carousel.Item key={e.id || index} interval={4000}>
            <Cardview name={<>{e.name}</>} message={<>{e.message}</>} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );

  return (
    <div className="container">
      <p className="fs-1">Katalog Menu</p>
      <div className="row mb-3" id="menu">
        {isLoading ? <Loading /> : menuView}
      </div>
      <p className="fs-1">Aneka Topping</p>
      <div className="row mb-3">{isLoading ? <Loading /> : toppingView}</div>
      <p className="fs-1">Testimoni</p>
      {isLoading ? <Loading /> : TestiView}

      {/* modal */}
      <ReactModal
        isOpen={modalShowNotLoggedIn}
        onRequestClose={() => setmodalShowNotLoggedIn(false)}
        style={{
          overlay: { zIndex: 9999999, backgroundColor: "rgba(0, 0, 0, 0.25)" },
          content: {
            zIndex: 1000,
            boxShadow: "9px 16px 18px 0px rgba(0,0,0,0.2)",
            width: "min(90vw, 500px)",
            inset: "50% auto auto 50%",
            transform: "translate(-50%, -50%)",
            backgroundImage: `url(${bg})`,
          },
        }}
        contentLabel="Example Modal"
      >
        {/* <p>{choosenItem.menu}</p> */}
        <p className="fw-bold fs-3">Mohon Login Terlebih Dahulu</p>
        <button
          className="btn btn-warning"
          onClick={() => {
            // setIsLoggedIn(true);
            handleGoogleSignIn();
            setmodalShowNotLoggedIn(!modalShowNotLoggedIn);
          }}
        >
          Login
        </button>
      </ReactModal>
      <ReactModal
        isOpen={modalShow}
        onRequestClose={() => setModalShow(false)}
        style={{
          overlay: { zIndex: 9999999, backgroundColor: "rgba(0, 0, 0, 0.25)" },
          content: {
            zIndex: 1000,
            boxShadow: "9px 16px 18px 0px rgba(0,0,0,0.2)",
            width: "min(90vw, 700px)",
            inset: "50% auto auto 50%",
            transform: "translate(-50%, -50%)",
            backgroundImage: `url(${bg})`,
          },
        }}
        contentLabel="Example Modal"
      >
        <div className="row g-3 p-3">
          <div className="col-12">
            <div className="row align-items-center">
              <div className="col-auto">
                <div
                  className="bg-warning rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "80px", height: "80px" }}
                >
                  <img
                    src={choosenMenu.img}
                    alt=""
                    className="img-fluid"
                    style={{ maxWidth: "55px" }}
                  />
                </div>
              </div>
              <div className="col">
                <p className="fs-4 fw-semibold mb-0">{choosenMenu.taste}</p>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-sm"
                  onClick={() => {
                    setModalShow(false);
                    setQuantity(1);
                  }}
                >
                  <img src={cancel} alt="" style={{ width: "24px" }} />
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <p className="fs-5 fw-semibold mb-3">TOPPING</p>
            <div className="row g-3">
              {topping.map((item, index) => (
                <div key={`topping-modal-${index}`} className="col-6">
                  <div className="d-flex align-items-center">
                    <input
                      style={{ transform: "scale(1.5)" }}
                      type="checkbox"
                      className="me-3"
                      name={item.value}
                      value={item.price}
                      id={`topping-${index}`}
                      checked={checkedState[index]}
                      onChange={() => {
                        handleChangeInputMenuModal(index);
                      }}
                    />
                    <label
                      htmlFor={`topping-${index}`}
                      className="fw-medium mb-0"
                      style={{ cursor: "pointer" }}
                    >
                      {item.taste}
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="row align-items-center">
              <div className="col-12 col-sm-auto mb-2 mb-sm-0">
                <p className="fs-6 fw-medium mb-0">Jumlah</p>
              </div>
              <div className="col-12 col-sm-auto">
                <div
                  className="border rounded-3 d-inline-flex align-items-center"
                  style={{
                    backgroundColor: "#FEF7CB",
                  }}
                >
                  <button className="btn btn-sm px-3" onClick={decrement}>
                    <img src={minus} alt="-" style={{ width: "16px" }} />
                  </button>
                  <span className="fs-5 fw-semibold px-3">{quantity}</span>
                  <button className="btn btn-sm px-3" onClick={increment}>
                    <img src={plus} alt="+" style={{ width: "16px" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <div className="row align-items-center">
              <div className="col-auto">
                <p className="fs-6 fw-medium mb-0">Total Harga</p>
              </div>
              <div className="col text-end">
                <p className="fs-4 fw-bold mb-0" style={{ color: "#773B30" }}>
                  Rp{" "}
                  {(totalPrices.total + parseInt(choosenMenu.price)) * quantity}
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <button
              onClick={handleClickModal}
              className="btn btn-warning w-100"
              style={{ border: "2px solid #773B30" }}
            >
              Masukan Keranjang
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
};
export default Section2;
