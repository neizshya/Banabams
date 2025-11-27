import { useContext } from "react";
import Cards from "../../../components/CartCard";
import { UserContext } from "../../../context/Context";
import { useEffect } from "react";
import { collection, doc, onSnapshot, query } from "firebase/firestore";
import { firestore } from "../../../firebase/config";

const Transaction = () => {
  const { quantity, history, firestoreid, setHistory } =
    useContext(UserContext);
  // fetch data history transaction
  const fetchingdata = async () => {
    const q = query(
      collection(firestore, `history/${firestoreid}/historytransactions/`)
    );
    const snapshot = onSnapshot(q, (querySnapshot) => {
      let usersdata = [];
      querySnapshot.forEach((doc) => {
        usersdata.push({ ...doc.data(), id: doc.id });
      });
      setHistory(usersdata);
    });
  };
  useEffect(() => {
    fetchingdata();
  }, []);
  return (
    <>
      <div className="container mb-5 mt-3">
        <div className="row">
          {history?.length > 0 ? (
            <>
              {history?.map((e) =>
                e.data.map((item, itemIndex) => (
                  <div
                    key={`${e.id}-${item.id || itemIndex}`}
                    className="col-12 mb-3"
                  >
                    <Cards
                      width={"100%"}
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
