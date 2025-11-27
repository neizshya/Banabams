import { useCallback, useEffect, useState } from "react";
import viteLogo from "/vite.svg";
import Button from "react-bootstrap/Button";
import { Alert } from "bootstrap";
import loader from "./assets/banana.gif";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/Home/Home"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Account = lazy(() => import("./pages/account/account"));
import Header from "./components/Header";
import Footer from "./components/Footer";
import { UserContext } from "./context/Context";
import { MockAPI, Testimonials } from "./API/api";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, firestore } from "./firebase/config";
import PrivateRoute from "./components/privateRoute";
const Biodata = lazy(() => import("./pages/account/section/Biodata"));
const Address = lazy(() => import("./pages/account/section/Address"));
const Transaction = lazy(() => import("./pages/account/section/Transaction"));
const Payment = lazy(() => import("./pages/account/section/Payment"));
import { setUserId } from "firebase/analytics";
import { ToastContainer } from "react-toastify";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";

function App() {
  const [menu, setMenu] = useState([]);
  const [topping, setTopping] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [user, setUser] = useState({});
  const [choosenItem, setChoosenItem] = useState({});
  const [totalChoosenMenu, setTotalChoosenMenu] = useState([]);
  const [totalChoosen, setTotalChoosen] = useState({
    actualprice: 0,
    img: "",
    isMenuAdded: false,
    isMenuChecked: true,
    menu: "",
    price: "",
    quantity: 1,
    taste: "",
    topping: "",
    totalPrice: 0,
  });
  const [history, setHistory] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [biodata, setBiodata] = useState({});
  const [firestoreid, setFirestoreId] = useState("");

  const userCollectionRef = collection(firestore, "users");
  // fetch topping
  const Fetchtopping = useCallback(async () => {
    setLoading(true);
    await MockAPI.get("/listtopping")
      .then(async (res) => {
        const data = res.data;
        setTopping(data);
      })
      .catch((err) => {
        console.log(`err : ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  });
  // fetch menua
  const Fetchmenu = useCallback(async () => {
    setLoading(true);
    await MockAPI.get("/listmenu")
      .then(async (res) => {
        const data = res.data;
        setMenu(data);
      })
      .catch((err) => {
        console.log(`err : ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  });
  // fetch testimonials
  const Fetchtesti = useCallback(async () => {
    setLoading(true);
    await Testimonials.get("/testimonial")
      .then(async (res) => {
        const data = res.data;
        setTestimonials(data);
      })
      .catch((err) => {
        console.log(`err : ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  });
  const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    // fetching menu,topping,testi data
    Fetchtopping(), Fetchmenu(), Fetchtesti();
    // auth
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      let userid = currentUser?.providerData[0];
      setBiodata({
        id: userid?.uid,
        name: currentUser?.displayName,
      });
      const tempProvider = [];
      tempProvider.push(currentUser?.providerData[0]);
      setFirestoreId(tempProvider[0]?.uid);
    });

    // fetch firestore

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{
          menu,
          setMenu,
          isLoggedIn,
          setIsLoggedIn,
          topping,
          setTopping,
          Fetchtopping,
          Fetchmenu,
          isLoading,
          setLoading,
          Fetchtesti,
          testimonials,
          setTestimonials,
          quantity,
          setQuantity,
          choosenItem,
          setChoosenItem,
          totalChoosen,
          setTotalChoosen,
          GoogleSignIn,
          logOut,
          user,
          history,
          setHistory,
          totalChoosenMenu,
          setTotalChoosenMenu,
          biodata,
          setBiodata,
          firestoreid,
        }}
      >
        <BrowserRouter>
          <Header />
          <Suspense fallback={<div className="container py-5">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route element={<PrivateRoute />}>
                <Route path="/cart" element={<Cart />} />
                <Route path="/account" element={<Account />}>
                  <Route path="/account/biodata" element={<Biodata />} />
                  <Route path="/account/address" element={<Address />} />
                  <Route
                    path="/account/transaction"
                    element={<Transaction />}
                  />
                  <Route path="/account/payment" element={<Payment />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
