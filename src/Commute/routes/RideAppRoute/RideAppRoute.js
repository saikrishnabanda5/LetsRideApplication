import React from "react";
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import RideApp from '../../components/RideApp';
import RequestRideRoute from '../../components/RequestRide';
@observer
class RideAppRoute extends React.Component {
  @observable selectedValue
  @observable selectedRequestValue
  @observable homeScreen
  @observable initialScreen
    constructor(props){
        super(props);
        this.selectedValue="Share";
        this.selectedRequestValue="Request";
        this.homeScreen=false;
        this.initialScreen = true;
    }
    
   onSelectShare=(event)=>{
     const {history}=this.props;
        this.selectedRequestValue="";
        this.homeScreen=false;
        this.initialScreen=false;
        this.selectedValue=event.target.value;
        if(this.selectedValue=="Ride"){
          history.push('/ride-app/share-ride/');
        }
        if(this.selectedValue==="Travel info"){
            history.push('/ride-app/share-info/');
        }
    }
    onSelectRequest=(event)=>{
      const {history}=this.props;
        this.selectedValue="";
        this.homeScreen=false;
        this.initialScreen=false;
        this.selectedRequestValue=event.target.value;
        if(this.selectedRequestValue==="Ride"){
         history.push('/ride-app/request-ride/');
        }
        if(this.selectedRequestValue==="Asset Transport"){
            history.push('/ride-app/request-asset/');
        }
    }
      onSelectHomeScreen=()=>{
        const {history}=this.props;
          this.homeScreen=true;
          this.initialScreen=false;
          this.selectedValue="";
          this.selectedRequestValue="";
          history.push('/ride-app/home-page/');
      }
  render() {
    return (
      <RideApp onSelectShare={this.onSelectShare} onSelectRequest={this.onSelectRequest}
      selectedValue={this.selectedValue} selectedRequestValue={this.selectedRequestValue}
      onSelectHomeScreen={this.onSelectHomeScreen} homeScreen={this.homeScreen} initialScreen={this.initialScreen}/>
    );
  }
}

export default withRouter(RideAppRoute);