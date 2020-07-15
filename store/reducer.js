import { HYDRATE } from "next-redux-wrapper";

export const reducer = (
  state = {
    checkin: "2022-10-10T00:00",
    checkout: "2022-10-10T00:00",
    lng: 0,
    lat: 0,
  },
  action
) => {
  switch (action.type) {
    case HYDRATE:
      if (action.payload.checkin === "2022-10-10T00:00")
        delete action.payload.checkin;
      if (action.payload.checkout === "2022-10-10T00:00")
        delete action.payload.checkout;
      if (action.payload.lng === 0) delete action.payload.lng;
      if (action.payload.lat === 0) delete action.payload.lat;

      return { ...state, ...action.payload };

    case "CHECKIN":
      return {
        ...state,
        checkin: action.checkin,
      };

    case "CHECKOUT":
      return {
        ...state,
        checkout: action.checkout,
      };

    case "GEOSET":
      return {
        ...state,
        lat: action.lat,
        lng: action.lng,
      };
    default:
      return state;
  }
};
