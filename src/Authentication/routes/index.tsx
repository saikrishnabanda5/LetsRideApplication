import React, { lazy } from "react";
import {Route} from "react-router-dom";
import {
  SIGN_UP_PATH,
  LOG_IN_PATH,
} from "../constants/RouteConstants";
import Carousel from "../../Common/netflix-carousel";


const SignInRoute = lazy(() => import('../routes/SignInRoute'))
const LogInRoute = lazy(() => import('../routes/LogInRoute'))

const routes = [
  <Route key={Math.random()}  path={SIGN_UP_PATH} component={SignInRoute} />,
  <Route key={Math.random()}  path={LOG_IN_PATH} component={LogInRoute} />,
  <Route path='/Carousel' component={Carousel}/>
];
export default routes;

