import wavy from "../assets/wavy.svg";
const Footer = () => {
  return (
    <>
      <div
        className="container-fluid d-flex align-items-end py-5"
        style={{
          backgroundImage: `url(${wavy})`,
          backgroundSize: "cover",
          height: "35vh",
        }}
      >
        <footer className="">
          <p className="fs-4 fw-semibold">© Banabams 2023</p>
        </footer>
      </div>
    </>
  );
};
export default Footer;
