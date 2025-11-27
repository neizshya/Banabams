import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Form from "../../../components/Form";

const Section3 = () => {
  const containerStyle = {
    width: "100%",
    height: "40vh",
  };
  // maps api
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    loadingElement: <div>Loading...</div>,
  });
  const center = {
    lat: -6.716048796790917,
    lng: 108.50263419796549,
  };

  return (
    <>
      <div id="kontak" className="container">
        <p className="fs-1">Kontak Kami</p>
        {loadError && <p className="text-danger">Gagal memuat peta.</p>}
        {isLoaded ? (
          <div className="row ">
            <div className="col-12 col-lg-7 mb-3 mb-lg-0">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={20}
                mapTypeId="roadmap"
                mapContainerClassName="w-100 rounded"
              >
                <Marker
                  position={{
                    lat: -6.716170788998696,
                    lng: 108.50275229915586,
                  }}
                />

                <></>
              </GoogleMap>
            </div>
            <div className="col-12 col-lg-5 ">
              <div className="row">
                <div className="col-12">
                  <p className="fs-4">
                    Jl. Fatahillah No.29, Megu Gede, Kec. Weru, Kabupaten
                    Cirebon, Jawa Barat 45154
                  </p>
                </div>
                <div className="col-12">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>loading data</p>
        )}
      </div>
    </>
  );
};
export default Section3;
