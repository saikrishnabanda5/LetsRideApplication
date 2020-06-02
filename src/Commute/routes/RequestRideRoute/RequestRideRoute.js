import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import RequestRide from '../../components/RequestRide';
@inject('requestStore')
@observer
class RequestRideRoute extends React.Component {
    @observable source
    @observable destination
    @observable isChecked
    @observable seatsAvailable
    @observable luggageQuantity
    @observable errorMessage
    @observable dateAndTime
    @observable fromDate
    @observable toDate
    constructor(props){
        super(props);
        this.source="";
        this.destination="";
        this.dateAndTime=new Date();
        this.fromDate=new Date();
        this.toDate=new Date();
        this.errorMessage="";
        this.isChecked=false;
        this.seatsAvailable=0;
        this.luggageQuantity=0;
    }
    onChangeDateAndTime=(date)=>{
        this.dateAndTime=date;
    }
    onChangeFromDate=(date)=>{
        this.fromDate=date;
    }
    onChangeToDate=(date)=>{
        this.toDate=date;
    }
    onChangeSource=(event)=>{
        this.source=event.target.value;
    }    
    onChangeDestination=(event)=>{
        this.destination=event.target.value;
    }
    onIncrementLuggageCount=()=> {
      this.luggageQuantity = this.luggageQuantity + 1;
    }
    onDecrementLuggageCount=()=> {
       if(this.luggageQuantity>0){
        this.luggageQuantity = this.luggageQuantity - 1;
       }
    }
    onClickCheckBox=(event)=>{
        if(this.isChecked){
            this.isChecked =false;
        }
        else{
            this.isChecked =true;
        }
    }
    onIncrementSeatsCount=()=> {
      this.seatsAvailable = this.seatsAvailable + 1;
    }
    onDecrementSeatsCount=()=> {
       if(this.seatsAvailable>0){
        this.seatsAvailable = this.seatsAvailable - 1;
       }
    }
    onSubmitDetails=(event)=>{
        event.preventDefault();
        if(this.source.length>0&&this.destination.length>0&&this.seatsAvailable>=1&&this.luggageQuantity>=1){
            alert("success")
            this.props.requestStore.onClickRequest(this.source,this.destination,this.seatsAvailable,this.luggageQuantity);
        }
        else if(this.source.length===0||this.destination.length===0){
            this.errorMessage="Required";
        }
    }
  render() {
      
      const {getUserSignInAPIStatus}=this.props;
    return (
      <RequestRide
          apiStatus={getUserSignInAPIStatus}
          source={this.source}
          destination={this.destination}
          errorMessage={this.errorMessage}
          isChecked={this.isChecked}
          dateAndTime={this.dateAndTime}
          fromDate={this.fromDate}
          toDate={this.toDate}
          seatsAvailable={this.seatsAvailable}
          luggageQuantity={this.luggageQuantity}
          onChangeSource={this.onChangeSource}
          onClickCheckBox={this.onClickCheckBox}
          onChangeDestination={this.onChangeDestination}
          onChangeDateAndTime={this.onChangeDateAndTime}
          onChangeFromDate={this.onChangeFromDate}
          onChangeToDate={this.onChangeToDate}
          onIncrementLuggageCount={this.onIncrementLuggageCount}
          onDecrementLuggageCount={this.onDecrementLuggageCount}
          onIncrementSeatsCount={this.onIncrementSeatsCount}
          onDecrementSeatsCount={this.onDecrementSeatsCount}
          onSubmitDetails={this.onSubmitDetails}
      />
    );
  }
}

export default withRouter(RequestRideRoute);