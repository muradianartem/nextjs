import Link from "next/link";
import { useSelector } from "react-redux";
import { withRedux } from "../withRedux";
import GoogleMapReact from "google-map-react";
import { format, parseISO } from "date-fns";

const MapComponent = ({ text }) => <div>{text}</div>;

const DatePage = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <div style={{ height: "40vh", width: "40%" }}>
        <div className="time">
          Your checkin time -
          {format(
            parseISO(state.checkin ?? "2022-10-10T00:00"),
            "yyyy-MM-dd' 'HH:mm"
          )}
        </div>
        <div className="time">
          Your checkout time -
          {format(
            parseISO(state.checkout ?? "2022-10-10T00:00"),
            "yyyy-MM-dd' 'HH:mm"
          )}
        </div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDlQeK-DmyFYHva1Bg0NJMAWsD_poogjcQ" }}
          defaultCenter={{
            lat: state.lat,
            lng: state.lng,
          }}
          defaultZoom={11}
        >
          <MapComponent lat={state.lat} lng={state.lng} />
        </GoogleMapReact>
      </div>
      <Link href="/"> One more time </Link>
    </>
  );
};

export default withRedux(DatePage);
