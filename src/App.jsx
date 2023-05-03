import { useState } from "react";
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
import Notification from "./pages/notif";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <div className="text-center">
        <img src={loader} alt="" />
      </div> */}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/account" element={<Account />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
