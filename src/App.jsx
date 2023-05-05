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
import { auth } from "./firebase/config";
import PrivateRoute from "./components/privateRoute";
function App() {
  const [menu, setMenu] = useState([]);
  const [topping, setTopping] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [user, setUser] = useState({});
  const [choosenItem, setChoosenItem] = useState({});
  const [totalChoosen, setTotalChoosen] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);

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
    Fetchtopping(), Fetchmenu(), Fetchtesti();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {/* <div className="text-center">
        <img src={loader} alt="" />
      </div> */}
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
        }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route element={<PrivateRoute />}>
              <Route path="/account" element={<Account />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
