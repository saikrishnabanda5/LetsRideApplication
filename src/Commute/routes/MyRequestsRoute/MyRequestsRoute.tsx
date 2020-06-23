import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import MyRequests from '../../components/MyRequests';
import { type } from "os";

type MyRequestsRouteProps ={
  history: {
    push(url: string): void;
}
}

@inject('requestStore')
@observer
class MyRequestsRoute extends React.Component<MyRequestsRouteProps> {
  @observable matchingResults: boolean
  @observable myRequests: boolean
  @observable sharedDetails: boolean
  
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
      alert()
      const {history}=this.props;
      history.push('/ride-app/request-ride/');
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
       onAddRideRequest={this.props.onAddRideRequest}
       />
    );
  }
}

export default withRouter(MyRequestsRoute);