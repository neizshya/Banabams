import sideimages from "../../../assets/section1.svg";
const Section1 = () => {
  // section welcome
  return (
    <>
      <div className="row">
        <div className="col-9 mt-5">
          <div className="row mt-5 ">
            <div className="col-12 mt-5">
              <h1
                className="fw-bold"
                style={{ color: "#FEBF00", fontSize: "6vw" }}>
                BANABAMS
              </h1>
            </div>
            <div className="col-12">
              <h2 style={{ fontSize: "3vw" }}>PISANG CRUNCHY KEKINIAN</h2>
            </div>
            <div className="mt-3 col-10 text-secondary">
              <p style={{ fontSize: "2vw" }}>
                Banabams adalah kedai jajanan pisang cruchy kekinian yang
                terletak di Megu, Kabupaten Cirebon.
              </p>
            </div>
          </div>
        </div>
        <div className="col-3">
          <img src={sideimages} alt="" />
        </div>
      </div>
    </>
  );
};
export default Section1;
