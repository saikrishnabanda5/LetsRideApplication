import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import data from '../../../i18n/strings.json';
import {withRouter} from "react-router-dom";
import MyRequests from '../../components/MyRequests';
import {Header,Heading,Details,Status,Headings,Headers} from './styledComponent';
@inject('requestStore')
@observer
class MyRequestsRoute extends React.Component {
  @observable noOfRideTasks
  @observable matchingResults
  @observable myRequests
  @observable sharedDetails
  
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