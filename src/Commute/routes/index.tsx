import React, { lazy } from "react";
import {Route} from "react-router-dom";
import ProtectedRoute from '../../Authentication/routes/authenticationRoute';
import {
  RIDE_APP_PATH,
  SHARE_RIDE_PATH,
  SHARE_TRAVEL_PATH,
  RIDE_REQUEST_PATH,
  ASSET_REQUEST_PATH
} from "../constants/RouteConstants";


const RideAppRoute  = lazy(() => import ('../routes/RideAppRoute'))
const RequestRideRoute =lazy(() => import('../routes/RequestRideRoute'))
const ShareRideRoute  =lazy(() => import('../routes/ShareRideRoute'))
const ShareTravelInfoRoute  =lazy(() => import('../routes/ShareTravelInfoRoute'))
const RequestAssetTransportRoute =lazy(() => import('../routes/RequestAssetTransportRoute'))

const rideAppRoutes = [
    
<ProtectedRoute key={Math.random()}  path={RIDE_APP_PATH} component={RideAppRoute} />,
  <ProtectedRoute key={Math.random()}  path={ASSET_REQUEST_PATH} component={RequestAssetTransportRoute} />,
  <ProtectedRoute key={Math.random()}  path={SHARE_RIDE_PATH} component={ShareRideRoute} />,
  <ProtectedRoute key={Math.random()}  path={SHARE_TRAVEL_PATH} component={ShareTravelInfoRoute} />,
  
  <ProtectedRoute key={Math.random()}  path={RIDE_REQUEST_PATH} component={RequestRideRoute} />,  
  
];

export default rideAppRoutes;