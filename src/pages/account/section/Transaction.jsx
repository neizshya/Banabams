import { useContext } from "react";
import Cards from "../../../components/CartCard";
import { UserContext } from "../../../context/Context";

const Transaction = () => {
  const { quantity, history } = useContext(UserContext);
  const leftsided = (
    <>
      <div className="col-4 text-center">
        <div className="row">
          <div className="col-12">
            <p className="text-secondary fs-5">Total Belanja</p>
          </div>
          <div className="col-12">
            <p className="fs-5">Rp {history?.totalPrice}</p>
          </div>
        </div>
      </div>
    </>
  );
  console.log(history);
  return (
    <>
      <div className="container mb-5 mt-3" style={{ marginLeft: "4vw" }}>
        <div className="row">
          {history.map((e) => (
            <>
              {console.log(e)}
              <div className="col-12 mb-3">
                <Cards
                  width={"65vw"}
                  leftSide={leftsided}
                  price={` ${e?.quantity} x Rp ${e?.actualprice}`}
                  img={e?.img}
                  menuName={`${e?.taste} (${e?.topping ? e?.topping : " "})`}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
export default Transaction;
