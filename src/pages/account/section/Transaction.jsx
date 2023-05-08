import { useContext } from "react";
import Cards from "../../../components/CartCard";
import { UserContext } from "../../../context/Context";

const Transaction = () => {
  const { quantity, history } = useContext(UserContext);
  // const leftsided = (

  // );
  return (
    <>
      <div className="container mb-5 mt-3" style={{ marginLeft: "4vw" }}>
        <div className="row">
          {history?.length > 0 ? (
            <>
              {history?.map((e) =>
                e.data.map((item) => (
                  <>
                    <div className="col-12 mb-3" style={{ width: "68vw" }}>
                      <Cards
                        width={"65vw"}
                        special={<>{e.date}</>}
                        leftSide={
                          <>
                            <div className="col-4 text-center">
                              <div className="row">
                                <div className="col-12">
                                  <p className="text-secondary fs-5">
                                    Total Belanja
                                  </p>
                                </div>
                                <div className="col-12">
                                  <p className="fs-5">
                                    Rp {item?.actualprice * item?.quantity}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </>
                        }
                        price={` ${item?.quantity} x Rp ${item?.actualprice}`}
                        img={item?.img}
                        menuName={`${item?.taste} (${
                          item?.topping ? item?.topping : " "
                        })`}
                      />
                    </div>
                  </>
                ))
              )}
            </>
          ) : (
            <>
              <div className="col-10 text-center fs-5">
                Silahkan mulai berbelanja
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Transaction;
