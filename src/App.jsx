import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "react-bootstrap/Button";
import { Alert } from "bootstrap";
import loader from "./assets/banana.gif";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Account from "./pages/account/account";
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
import Biodata from "./pages/account/section/Biodata";
import Address from "./pages/account/section/Address";
import Transaction from "./pages/account/section/Transaction";
import Payment from "./pages/account/section/Payment";
import { setUserId } from "firebase/analytics";
import { ToastContainer } from "react-toastify";
import { collection, getDocs, onSnapshot, query } from "@firebase/firestore";

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

  const userCollectionRef = collection(firestore, "users");
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
    });

    // fetch firestore
    const q = query(collection(firestore, "users"));
    const snapshot = onSnapshot(q, (querySnapshot) => {
      let usersdata = [];
      querySnapshot.forEach((doc) => {
        usersdata.push({ ...doc.data(), id: doc.id });
      });
      let biodatauser = usersdata[0];
      setBiodata({
        id: biodatauser.id,
        name: biodatauser.name,
        date: biodatauser.date,
        phone: biodatauser.phone,
        gender: biodatauser.gender,
        checked: biodatauser.checked,
      });
    });
    return () => {
      unsubscribe();
      snapshot();
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
        }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<PrivateRoute />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/account" element={<Account />}>
                <Route path="/account/biodata" element={<Biodata />} />
                <Route path="/account/address" element={<Address />} />
                <Route path="/account/transaction" element={<Transaction />} />
                <Route path="/account/payment" element={<Payment />} />
              </Route>
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
