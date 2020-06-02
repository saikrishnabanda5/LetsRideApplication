import React from "react";
import {Route} from "react-router-dom";
import {
  RIDE_APP_PATH,
  SHARE_RIDE_PATH,
  SHARE_TRAVEL_PATH,
  RIDE_REQUEST_PATH,
  ASSET_REQUEST_PATH
} from "../constants/RouteConstants";

import RideAppRoute from   '../routes/RideAppRoute';
import RequestRideRoute from '../routes/RequestRideRoute';
import ShareRideRoute from   '../routes/ShareRideRoute';
import ShareTravelInfoRoute from   '../routes/ShareTravelInfoRoute';
import RequestAssetTransportRoute from '../routes/RequestAssetTransportRoute';

const rideAppRoutes = [
  <Route key={Math.random()}  path={RIDE_APP_PATH} component={RideAppRoute} />,
  
  <Route key={Math.random()}  path={RIDE_REQUEST_PATH} component={RequestRideRoute} />,
  <Route key={Math.random()}  path={ASSET_REQUEST_PATH} component={RequestAssetTransportRoute} />,
  
  <Route key={Math.random()}  path={SHARE_RIDE_PATH} component={ShareRideRoute} />,
  <Route key={Math.random()}  path={SHARE_TRAVEL_PATH} component={ShareTravelInfoRoute} />,
];

export default rideAppRoutes;