import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from 'mobx-react';
import HomePage from "./Common/HomePage";
import Page1 from "./components/Page1";
import routes from './Authentication/routes';
// import commenceRoutes from './ECommerce/routes'
// import CommenceStore from './Commute/stores/index.js';
import AuthenticationStore from './Authentication/stores/index.js';
import "./App.css";
import {observer} from 'mobx-react';
import {observable} from 'mobx';

@observer
export  class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
  return(
    //{...CommuteStore}
    <Provider  {...AuthenticationStore}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      {routes} 
      {/*{commenceRoutes}*/}
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
  }
};

export default App
