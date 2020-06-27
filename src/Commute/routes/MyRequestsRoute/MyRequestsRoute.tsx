import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter, RouteComponentProps} from "react-router-dom";
import MyRequests from '../../components/MyRequests';
import { type } from "os";
import RequestStore from "../../stores/RequestStore";

interface MyRequestsRouteProps extends RouteComponentProps{}

interface  InjectedProps extends MyRequestsRouteProps {
     requestStore:RequestStore
}

@inject('requestStore')
@observer
class MyRequestsRoute extends React.Component<MyRequestsRouteProps> {
  @observable matchingResults!: boolean
  @observable myRequests!: boolean
  @observable sharedDetails!: boolean
  
  constructor(props){
        super(props);
        this.matchingResults=true;
        this.myRequests = false;
        this.sharedDetails = false;
    }
    OnMatchingResults=()=>{
      this.matchingResults=true;
      this.myRequests = false;
      this.sharedDetails = false;
    }
    OnMyRequests=()=>{
      this.matchingResults=false;
      this.myRequests = true;
      this.sharedDetails = false;
    }
    onSharedDetails=()=>{
      this.matchingResults=false;
      this.myRequests = false;
      this.sharedDetails = true;
    }
    onAddRideRequest=()=>{
      const {history}=this.props;
      history.push('/ride-app/request-ride/');
    }

    onAddRequest=()=>{
      const {history}=this.props;
      history.push('/ride-app/');
    }
  render() {
    return (
       <MyRequests 
       OnMatchingResults={this.OnMatchingResults}
       OnMyRequests={this.OnMyRequests}
       onSharedDetails={this.onSharedDetails}
       matchingResults={this.matchingResults}
       myRequests={this.myRequests}
       sharedDetails = {this.sharedDetails}
       onAddRideRequest={this.onAddRideRequest}
       onAddRequest = {this.onAddRequest}
       />
    );
  }
}

export default withRouter(MyRequestsRoute);