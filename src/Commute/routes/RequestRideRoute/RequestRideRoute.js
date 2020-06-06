import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import RequestRide from '../../components/RequestRide';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
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
        this.init();
    }
    init=()=>{
        this.source="";
        this.destination="";
        this.dateAndTime=null;
        this.fromDate=null;
        this.toDate=null;
        this.errorMessage="";
        this.isChecked=false;
        this.seatsAvailable=0;
        this.luggageQuantity=0;
    }
    onChangeDateAndTime=(date)=>{
        this.dateAndTime = moment(date).format("YYYY-MM-DD HH:mm:ss");
    }
    onChangeFromDate=(date)=>{
        this.fromDate= moment(date).format("YYYY-MM-DD HH:mm:ss");
    }
    onChangeToDate=(date)=>{
        this.toDate=  moment(date).format("YYYY-MM-DD HH:mm:ss");
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
            this.isChecked = false;
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
    onSubmitDetails=async(event)=>{
        // event.preventDefault();
        if(this.source.length>0&&this.destination.length>0&&this.seatsAvailable>=1){
            const rideDetails ={
                      source: this.source,
                      destination: this.destination,
                      from_datetime: this.fromDate,
                      is_flexible: this.isChecked,
                      to_datetime: this.toDate,
                      datetime:this.dateAndTime,
                      no_of_seats: this.seatsAvailable,
                      luggage_quantity: this.luggageQuantity
                    };
            await this.props.requestStore.onRideRequest(rideDetails);
            this.toaster();
        }
        else if(this.source.length===0||this.destination.length===0||this.dateAndTime===null){
            this.errorMessage="Required";
        }
    }
    toaster=()=>{
        if(this.props.requestStore.getRideRequestAPIStatus===200){
           this.notify();
      }
    }
    notify = () =>{
        toast.success("Your Request has been accepted",{
            className: {
              color: '#343a40',
              minHeight: '60px',
              borderRadius: '8px',
              background: '#2FEDAD',
              boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3)'
            },
           position:toast.POSITION.TOP_CENTER,
                    type:toast.TYPE.SUCCESS
                });
            };

  render() {
    return (<div>
      <RequestRide
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
      <ToastContainer />
      </div>
    );
  }
}

export default withRouter(RequestRideRoute);