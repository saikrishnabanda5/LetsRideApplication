import React from "react";
import {observer} from 'mobx-react';
import {withRouter} from "react-router-dom";
import RideApp from '../../components/RideApp';
@observer
class RideAppRoute extends React.Component {
  render() {
    return (
      <RideApp />
    );
  }
}

export default withRouter(RideAppRoute);