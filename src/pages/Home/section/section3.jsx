import {
  GoogleMap,
  LoadScript,
  useLoadScript,
  Polygon,
  Marker,
} from "@react-google-maps/api";
import GoogleMapReact from "google-map-react";
import { useState } from "react";
import Loading from "../../../components/loader";
import loader from "../../../assets/banana.gif";
import { StaticGoogleMap } from "react-static-google-map";
const Section3 = () => {
  const containerStyle = {
    width: "400px",
    height: "400px",
  };

  const center = {
    lat: -6.716170788998696,
    lng: 108.50275229915586,
  };

  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyBcj2ip9AhD5Q6MhtVMFREpApc6hBTmN9Y">
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
      </LoadScript>
    </>
  );
};
export default Section3;
