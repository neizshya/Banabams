import sideimages from "../../../assets/section1.svg";
const Section1 = () => {
  // section welcome
  return (
    <>
      <style>{`
        .text-p { max-width: 100%; height: auto; }
        @media (min-width: 992px) { /* lg and up */
          .side-img { max-width: 90%; }
        }
      `}</style>
      <div className="">
        <div className="row align-items-center min-vh-50">
          <div className="col-12 col-lg-8 py-4 py-lg-5 ps-lg-5 ">
            <div className="row mt-3 mt-md-4 text-center text-lg-start">
              <div className="col-12">
                <h1
                  className="fw-bold mb-2"
                  style={{
                    color: "#FEBF00",
                    fontSize: "clamp(2.5rem, 8vw, 5rem)",
                    lineHeight: "1.1",
                  }}
                >
                  BANABAMS
                </h1>
              </div>
              <div className="col-12">
                <h2
                  className="mb-3 fw-semibold"
                  style={{
                    fontSize: "clamp(1.1rem, 4vw, 2rem)",
                    lineHeight: "1.3",
                  }}
                >
                  PISANG CRUNCHY KEKINIAN
                </h2>
              </div>
              <div className="col-12">
                <p
                  className="text-secondary text-p"
                  style={{
                    fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
                    maxWidth: "100%",
                    lineHeight: "1.6",
                  }}
                >
                  Banabams adalah kedai jajanan pisang cruchy kekinian yang
                  terletak di Megu, Kabupaten Cirebon.
                </p>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-flex col-12 col-lg-4 text-center py-3 py-lg-0 justify-content-end">
            <img
              src={sideimages}
              alt="Banabams Pisang"
              className="img-fluid side-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Section1;
