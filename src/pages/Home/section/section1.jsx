import sideimages from "../../../assets/section1.svg";
const Section1 = () => {
  // section welcome
  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-9 mt-5">
          <div className="row mt-5 ">
            <div className="col-12 mt-5">
              <h1
                className="fw-bold"
                style={{ color: "#FEBF00", fontSize: "clamp(2rem, 6vw, 5rem)" }}
              >
                BANABAMS
              </h1>
            </div>
            <div className="col-12">
              <h2 style={{ fontSize: "clamp(1.25rem, 3vw, 2.5rem)" }}>
                PISANG CRUNCHY KEKINIAN
              </h2>
            </div>
            <div className="mt-3 col-10 text-secondary">
              <p style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}>
                Banabams adalah kedai jajanan pisang cruchy kekinian yang
                terletak di Megu, Kabupaten Cirebon.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 mt-4 mt-lg-0 text-center text-lg-start">
          <img src={sideimages} alt="" className="img-fluid" />
        </div>
      </div>
    </>
  );
};
export default Section1;
