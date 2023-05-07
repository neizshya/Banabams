import { Button, Card, Carousel } from "react-bootstrap";
import cart from "../../../assets/roundcart.svg";

import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import Cardview from "../../../components/Card";
import { UserContext } from "../../../context/Context";
import Loading from "../../../components/loader";
import { useModal } from "react-modal-hook";
import ReactModal from "react-modal";
import bg from "../../../assets/bg-modal.svg";
import cancel from "../../../assets/cancel-icon.svg";
import plus from "../../../assets/plus.svg";
import minus from "../../../assets/minus.svg";

const Section2 = () => {
  const [modalShow, setModalShow] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [totalPrices, setTotalPrices] = useState({
    total: 0,
    topping: "",
  });
  const {
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
  } = useContext(UserContext);

  const [totalPriceWithMenu, setTotalPriceWithMenu] = useState(0);
  const [choosenMenu, setChoosenMenu] = useState({});
  const [choosenTopping, setchoosenTopping] = useState({});
  const customStyles = {
    overlay: {
      zIndex: 9999999,
      backgroundColor: "rgba(0, 0, 0, 0.25)",
    },
    content: {
      zIndex: 1000,
      boxShadow: "9px 16px 18px 0px rgba(0,0,0,0.2)",
      width: "30vw",
      height: "28vw",
      top: "25%",
      left: "35%",
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
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + parseInt(topping[index].price);
        }
        return sum;
      },
      0
    );
    setTotalPrices({ total: totalPrice, topping: topping[position] });
  };
  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleClickModal = (e) => {
    setTotalChoosenMenu([
      ...totalChoosenMenu,
      {
        ...choosenMenu,
        quantity: quantity,
        topping: totalPrices.topping.taste,
        totalPrice:
          (totalPrices.total + parseInt(choosenMenu.price)) * quantity,
        actualprice: totalPrices.total + parseInt(choosenMenu.price),
        isMenuAdded: true,
        isMenuChecked: true,
      },
    ]);
    setModalShow(!modalShow);
  };
  console.log(totalChoosenMenu);
  const toppingView = (
    <>
      {topping.map((item) => (
        <div className="col-3">
          <Card className="shadow " style={{ height: "20vw", width: "15vw" }}>
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
      {menu.map((item) => (
        <div className="col-3">
          <Card
            key={item.length}
            className="shadow "
            style={{ height: "20vw", width: "15vw" }}>
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
                      setModalShow(!modalShow);
                      // showModal();
                    }}>
                    <img src={cart} alt="" style={{ width: "2vw" }} />
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
        prevIcon={<IoIosArrowDropleftCircle size={"3em"} />}>
        {testimonials.map((e) => (
          <Carousel.Item interval={4000}>
            <Cardview name={<>{e.name}</>} message={<>{e.message}</>} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );

  return (
    <>
      <p className="fs-1">Katalog Menu</p>
      <div className="row mb-3" id="#menu">
        {isLoading ? <Loading /> : menuView}
      </div>
      <p className="fs-1">Aneka Topping</p>
      <div className="row mb-3">{isLoading ? <Loading /> : toppingView}</div>
      <p className="fs-1">Testimoni</p>
      {isLoading ? <Loading /> : TestiView}

      {/* modal */}
      <ReactModal
        isOpen={modalShow}
        onRequestClose={() => setModalShow(false)}
        style={customStyles}
        contentLabel="Example Modal">
        {/* <p>{choosenItem.menu}</p> */}
        <div className="row container">
          <div
            className="col-3 bg-warning rounded-circle"
            style={{ width: "6vw", height: "6vw" }}>
            <img
              src={choosenMenu.img}
              alt=""
              className="mt-3"
              style={{ width: "4vw" }}
            />
          </div>
          <div className="col-8 mt-4">
            <p className="fs-4 fw-semibold">{choosenMenu.taste}</p>
          </div>
          <div className="col-1">
            <button
              className="btn w-full"
              onClick={() => {
                setModalShow(false);
                // setChoosenMenu(initialstateChoosemenu);
                setQuantity(0);
              }}>
              <img src={cancel} alt="" />
            </button>
          </div>
          <div className="col-4 mt-3">
            <p className="fs-3 fw-medium">TOPPING</p>
          </div>
          <div className="col-8 ">
            {/* topping checkbox */}
            <div className="row">
              {topping.map((item, index) => (
                <div className="col-6 mt-3">
                  <div className="row">
                    <div className="col-1">
                      {/* <input
                        type="checkbox"
                        name="pilih"
                        id={item.id}
                        checked={item.checked}
                        className="mt-3"
                        style={{ transform: "scale(2)" }}
                        value={item.price}
                        // checked={item.checked[index]}
                        onChange={(e) => {
                          handleChangeInputMenuModal(e);
                        }}
                      /> */}
                      <input
                        style={{ transform: "scale(2)" }}
                        type="checkbox"
                        className="mt-3"
                        name={item.value}
                        value={item.price}
                        id={`topping-${index}`}
                        checked={checkedState[index]}
                        onChange={() => {
                          handleChangeInputMenuModal(index);
                        }}
                      />
                    </div>
                    <div className="col-2  mt-1">
                      <label
                        htmlFor={`topping-${index}`}
                        className="fw-medium fs-4 ms-2">
                        {item.taste}
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-7 mt-5">
            <p className="fs-5 fw-medium">Jumlah</p>
          </div>
          <div className="col-5 mt-4">
            <div
              className="border rounded-3 mt-3"
              style={{
                backgroundColor: "#FEF7CB",
                width: "10vw",
                height: "2.5vw",
              }}>
              <div className="row ">
                <div className="col-4">
                  <button className="btn" onClick={decrement}>
                    <img src={minus} alt="" />
                  </button>
                </div>
                <div className="col-4 ">
                  <p className="fs-5 fw-semibold mt-1 ms-2">
                    {quantity}
                    {/* {quantity} */}
                  </p>
                </div>
                <div className="col-4" style={{ marginLeft: "-0.5vw" }}>
                  <button className="btn" onClick={increment}>
                    <img src={plus} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 mt-2">
            <p className="fs-5 fw-medium">Total Harga</p>
          </div>
          <div className="col-5 mt-1">
            <p className="fs-4 fw-medium">
              Rp {(totalPrices.total + parseInt(choosenMenu.price)) * quantity}
            </p>
          </div>
          <div className="col-12 ">
            <button
              onClick={handleClickModal}
              className="btn w-75 bg-white  "
              style={{ border: "1px solid brown", marginLeft: "4vw" }}>
              Masukan Keranjang
            </button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};
export default Section2;
