import { Button, Card, Carousel } from "react-bootstrap";
import choco from "../../../assets/menu/choco.svg";
import tiramisu from "../../../assets/menu/tiramisu.svg";
import greentea from "../../../assets/menu/greentea.svg";
import taro from "../../../assets/menu/taro.svg";
import cart from "../../../assets/roundcart.svg";
import almond from "../../../assets/topping/almond.svg";
import oreo from "../../../assets/topping/oreo.svg";
import keju from "../../../assets/topping/keju.svg";
import milo from "../../../assets/topping/milo.svg";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import { useState } from "react";
import Cardview from "../../../components/Card";
const Section2 = () => {
  const [menu, setMenu] = useState("");
  const listmenu = [
    {
      img: choco,
      rasa: "Coklat",
      value: "choco",
      price: 10000,
    },
    {
      img: greentea,
      rasa: "Greentea",
      value: "greentea",
      price: 10000,
    },
    {
      img: tiramisu,
      rasa: "Tiramisu",
      value: "tiramisu",
      price: 10000,
    },
    {
      img: taro,
      rasa: "Taro",
      value: "taro",
      price: 10000,
    },
  ];
  const listtopping = [
    {
      img: oreo,
      rasa: "Oreo",
      value: "oreo",
      price: 5000,
    },
    {
      img: almond,
      rasa: "Almond",
      value: "almond",
      price: 5000,
    },
    {
      img: milo,
      rasa: "Milo",
      value: "milo",
      price: 5000,
    },
    {
      img: keju,
      rasa: "Keju",
      value: "keju",
      price: 5000,
    },
  ];

  const testimonial = [
    {
      name: "Olivia, Jakarta",
      message:
        "Saya sangat menyukai rasa dari Banabams! Rasanya yang manis dan gurih membuat saya selalu ingin memakannya setiap hari. Selain itu, kandungan serat alami di dalamnya membuat saya merasa kenyang lebih lama. Terima kasih Banabams!",
    },
    {
      name: "Tommy, Bandung",
      message:
        "Banabams benar-benar cocok untuk saya yang sibuk bekerja dan tidak punya waktu untuk sarapan. Dengan mengonsumsi Banabams, saya merasa energi saya meningkat dan saya bisa fokus bekerja tanpa merasa lapar. Produk yang luar biasa!",
    },
    {
      name: "Sara, Surabaya",
      message:
        "Saya selalu mencari camilan yang sehat untuk anak-anak saya dan saya menemukan Banabams! Anak-anak saya sangat suka dengan rasanya dan saya merasa tenang karena mereka mengonsumsi camilan yang sehat dan bergizi. Terima kasih Banabams!",
    },
    {
      name: "Andi, Yogyakarta",
      message:
        "Saya sangat senang dengan produk Banabams karena tidak hanya lezat, tetapi juga membantu saya mengatur berat badan saya. Karena kandungan serat alaminya, saya merasa kenyang lebih lama dan tidak lagi merasa lapar setelah makan. Banabams benar-benar produk yang hebat!",
    },
    {
      name: "Dian, Bali",
      message:
        "Saya sangat menyukai Banabams karena saya bisa mengonsumsinya setiap saat dan di mana saja. Selain itu, kandungan nutrisinya yang tinggi membantu menjaga kesehatan saya. Saya akan terus membeli produk ini dan merekomendasikannya kepada teman dan keluarga saya!",
    },
  ];
  return (
    <>
      <p className="fs-1">Katalog Menu</p>

      <div className="row mb-3">
        {listmenu.map((item) => (
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
                <Card.Title>{item.rasa}</Card.Title>
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
                      onClick={() => {
                        setMenu(item.value);
                      }}>
                      <img src={cart} alt="" style={{ width: "2vw" }} />
                    </button>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
      <p className="fs-1">Aneka Topping</p>
      <div className="row mb-3">
        {listtopping.map((item) => (
          <div className="col-3">
            <Card className="shadow " style={{ height: "20vw", width: "15vw" }}>
              <Card.Img
                className="pt-3"
                variant="top"
                src={item.img}
                style={{ width: "50%", margin: "0 auto" }}
              />
              <Card.Body className="mt-3 text-center">
                <Card.Title>{item.rasa}</Card.Title>
                <Card.Text>⭐⭐⭐⭐⭐</Card.Text>
              </Card.Body>
              <Card.Footer className="bg-white">
                <div className="row">
                  <div className="col-6 text-start">Rp 5.000</div>
                  <div className="col-6 text-end">
                    <button
                      type="button"
                      style={{
                        border: "none",
                        appearance: "none",
                        backgroundColor: "white",
                      }}
                      onClick={() => {
                        setMenu(item.value);
                      }}>
                      <img src={cart} alt="" style={{ width: "2vw" }} />
                    </button>
                  </div>
                </div>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
      <p className="fs-1">Testimoni</p>
      <Carousel
        nextIcon={<IoIosArrowDroprightCircle size={"3em"} />}
        prevIcon={<IoIosArrowDropleftCircle size={"3em"} />}>
        {testimonial.map((e) => (
          <Carousel.Item interval={4000}>
            <Cardview name={<>{e.name}</>} message={<>{e.message}</>} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
export default Section2;
