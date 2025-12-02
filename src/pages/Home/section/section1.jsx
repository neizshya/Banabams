import sideimages from "../../../assets/section1.svg";
const Section1 = () => {
  // section welcome
  return (
    <>
      <div className="container-fluid px-3 px-md-4">
        <div className="row align-items-center min-vh-50">
          <div className="col-12 col-lg-8 py-4 py-lg-5">
            <div className="mt-3 mt-md-4">
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
              <h2
                className="mb-3 fw-semibold"
                style={{
                  fontSize: "clamp(1.1rem, 4vw, 2rem)",
                  lineHeight: "1.3",
                }}
              >
                PISANG CRUNCHY KEKINIAN
              </h2>
              <p
                className="text-secondary mb-0"
                style={{
                  fontSize: "clamp(0.95rem, 2.5vw, 1.1rem)",
                  maxWidth: "90%",
                  lineHeight: "1.6",
                }}
              >
                Banabams adalah kedai jajanan pisang cruchy kekinian yang
                terletak di Megu, Kabupaten Cirebon.
              </p>
            </div>
          </div>
          <div className="d-none d-lg-block col-12 col-lg-4 text-center py-3 py-lg-0">
            <img
              src={sideimages}
              alt="Banabams Pisang"
              className="img-fluid "
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Section1;
