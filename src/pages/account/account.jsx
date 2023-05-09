import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HeaderAccount from "../../components/HeaderAccount";
import Address from "./section/Address";
import Biodata from "./section/Biodata";
import Payment from "./section/Payment";
import Transaction from "./section/Transaction";
import { useContext } from "react";
import { UserContext } from "../../context/Context";

const Account = () => {
  return (
    <>
      <div className="container " style={{ marginBottom: "15vw" }}>
        <div className=" mt-5 border border-black border-3 rounded-4 ">
          <HeaderAccount />

          <Outlet />
        </div>
      </div>
    </>
  );
};
export default Account;
