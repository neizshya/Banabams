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

const Section3 = () => {
  const containerStyle = {
    width: "50%",
    height: "400px",
  };
  const [isLoading, setLoading] = useState(false);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBcj2ip9AhD5Q6MhtVMFREpApc6hBTmN9Y",
  });
  const center = {
    lat: -6.716048796790917,
    lng: 108.50263419796549,
  };

  const mapsview = () => {
    {
      /* <LoadScript googleMapsApiKey="AIzaSyBcj2ip9AhD5Q6MhtVMFREpApc6hBTmN9Y"> */
    }
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18}
      mapTypeId="roadmap"
      mapContainerClassName="card-body d-inline-block rounded mobile-100">
      <Marker position={{ lat: -6.716170788998696, lng: 108.50275229915586 }} />
      <></>
    </GoogleMap>;
    {
      /* </LoadScript> */
    }
  };

  const timertrue = () => {
    setLoading(true);
  };
  setTimeout(timertrue, 5000);
  // useEffect(() => {
  //   const test = setTimeout(setLoading(false), 5000);
  //   return () => clearTimeout(test);
  // }, []);
  const section = () => {
    <div className="bg-dark">
      {isLoaded ? (
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
      ) : (
        <Loading />
      )}
    </div>;
  };
  const test = (
    <>
      {isLoaded ? (
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
      ) : (
        <Loading />
      )}
    </>
  );
  return (
    <>
      {/* {isLoaded ? mapsview() : <Loading />} */}

      {/* {console.log(isLoaded)} */}
      {/* <Loading /> */}
      {/* section() */}
      {/* {isLoading ? <Loading /> : section()} */}
      {/* <LoadScript googleMapsApiKey="AIzaSyBcj2ip9AhD5Q6MhtVMFREpApc6hBTmN9Y">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
          mapTypeId="roadmap"
          mapContainerClassName="card-body d-inline-block rounded mobile-100">
          <Marker
            position={{ lat: -6.716170788998696, lng: 108.50275229915586 }}
          />
          <></>
        </GoogleMap>
      </LoadScript> */}
      {isLoading ? test : <Loading />}
    </>
  );
};
export default Section3;
