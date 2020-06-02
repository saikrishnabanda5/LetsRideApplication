import React from "react";
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import RideApp from '../../components/RideApp';
@observer
class RideAppRoute extends React.Component {
  @observable selectedValue
  @observable selectedRequestValue
  @observable homeScreen
    constructor(props){
        super(props);
        this.selectedValue="Share";
        this.selectedRequestValue="Request";
        this.homeScreen=false;
    }
    
   onSelectShare=(event)=>{
     const {history}=this.props;
        this.selectedRequestValue="";
        this.homeScreen=false;
        this.selectedValue=event.target.value;
        if(this.selectedValue=="Ride"){
          history.replace('/ride-app/share-ride/');
        }
        if(this.selectedValue==="Travel info"){
            history.replace('/ride-app/share-info/');
        }
    }
    onSelectRequest=(event)=>{
      const {history}=this.props;
        this.selectedValue="";
        this.homeScreen=false;
        this.selectedRequestValue=event.target.value;
        if(this.selectedRequestValue==="Ride"){
         history.replace('/ride-app/request-ride/');
        }
        if(this.selectedRequestValue==="Asset Transport"){
            history.replace('/ride-app/request-asset/');
        }
    }
    onSelectHomeScreen=()=>{
      const {history}=this.props;
        this.homeScreen=true;
        this.selectedValue="";
        this.selectedRequestValue="";
        history.replace('/ride-app/home-page/');
    }
  render() {
    return (
      <RideApp onSelectShare={this.onSelectShare} onSelectRequest={this.onSelectRequest}
      selectedValue={this.selectedValue} selectedRequestValue={this.selectedRequestValue}
      onSelectHomeScreen={this.onSelectHomeScreen} homeScreen={this.homeScreen}/>
    );
  }
}

export default withRouter(RideAppRoute);