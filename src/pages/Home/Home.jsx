import { useState } from "react";
import Section1 from "./section/section1";
import Section2 from "./section/section2";
import Section3 from "./section/section3";

const Home = () => {
  // home
  return (
    <>
      <div className="">
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </>
  );
};
export default Home;
