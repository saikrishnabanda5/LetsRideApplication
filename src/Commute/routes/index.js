import React from "react";
import {Route} from "react-router-dom";
import {
  RIDE_APP_PATH,
} from "../constants/RouteConstants";

import RideAppRoute from   '../routes/RideAppRoute';

const rideAppRoutes = [
  <Route key={Math.random()}  path={RIDE_APP_PATH} component={RideAppRoute} />,
];

export default rideAppRoutes;