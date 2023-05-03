import wavy from "../assets/wavy.svg";
const Footer = () => {
  return (
    <>
      <div
        className="container-fluid d-flex align-items-end "
        style={{
          backgroundImage: `url(${wavy})`,
          backgroundSize: "cover",
          height: "25vw",
          // position:"absolute",
          // left:0,
          // bottom:0,
          // right:0,
        }}>
        <footer className="">
          <p className="fs-4 fw-semibold">© Banabams 2023</p>
        </footer>
      </div>
    </>
  );
};
export default Footer;
