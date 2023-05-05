import {
  GoogleMap,
  LoadScript,
  useLoadScript,
  Polygon,
  Marker,
} from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import Loading from "../../../components/loader";
import loader from "../../../assets/banana.gif";
import Cardview from "../../../components/Card";
import { Card } from "react-bootstrap";
import Form from "../../../components/Form";
import Footer from "../../../components/Footer";

const Section3 = () => {
  const containerStyle = {
    width: "44vw",
    height: "22vw",
  };
  const [isLoading, setLoading] = useState(false);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBcj2ip9AhD5Q6MhtVMFREpApc6hBTmN9Y",
  });
  const center = {
    lat: -6.716048796790917,
    lng: 108.50263419796549,
  };

  const timertrue = () => {
    setLoading(true);
  };
  setTimeout(timertrue, 5000);

  const generalview = (
    <>
      {isLoaded ? (
        <div className="row">
          <div className="col-7 ">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={20}
              mapTypeId="roadmap"
              mapContainerClassName="card-body d-inline-block rounded mobile-100">
              <Marker
                position={{ lat: -6.716170788998696, lng: 108.50275229915586 }}
              />
              <></>
            </GoogleMap>
          </div>
          <div className="col-5 ">
            <div className="row">
              <div className="col-12">
                <p className="fs-4">
                  Jl. Fatahillah No.29, Megu Gede, Kec. Weru, Kabupaten Cirebon,
                  Jawa Barat 45154
                </p>
              </div>
              <div className="col-12">
                <Form />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
  return (
    <>
      <div id="#kontak">
        <p className="fs-1">Kontak Kami</p>

        {isLoading ? generalview : <Loading />}
      </div>
    </>
  );
};
export default Section3;
