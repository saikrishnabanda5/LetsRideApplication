import React from "react";
import {Route} from "react-router-dom";
import {
  PRODUCTS_PATH,
} from "../constants/RouteConstants";

import ProductPageRoute from   '../routes/ProductPageRoute';

const productsRoutes = [
  <Route key={Math.random()}  path={PRODUCTS_PATH} component={ProductPageRoute} />,
];

export default productsRoutes;