import React from "react";
import {observer,inject} from 'mobx-react';
import {withRouter} from "react-router-dom";
import RideApp from '../../components/RideApp';
@inject('requestStore')
@inject('authStore')
@observer
class RideAppRoute extends React.Component {
    getRequestStore=()=>{
      return this.props.requestStore;
    }
    getShareStore=()=>{
      return this.props.shareStore;
    }
    renderUsersList=()=>{
        return "";
    }
  render() {
    console.log(1)
    return (
      <RideApp 
      // // // onClickSignOut={this.onClickSignOut}
      // getRequestStore={this.getRequestStore()}
      // getShareStore={this.getShareStore()}
      // // doNetworkCalls={this.doNetworkCalls}
      renderUsersList={this.renderUsersList}
      />
    );
  }
}

export default withRouter(RideAppRoute);