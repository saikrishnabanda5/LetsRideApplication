import React from "react";
import {Route} from "react-router-dom";
import {
  SIGN_UP_PATH,
  LOG_IN_PATH,
} from "../constants/RouteConstants";

import SignInRoute from '../routes/SignInRoute/'; 
import LogInRoute from '../routes/LogInRoute/'; 

const routes = [
  <Route key={Math.random()}  path={SIGN_UP_PATH} component={SignInRoute} />,
  <Route key={Math.random()}  path={LOG_IN_PATH} component={LogInRoute} />,
];
export default routes;

