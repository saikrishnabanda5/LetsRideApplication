import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import RequestRide from '../../components/RequestRide';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import format from 'date-fns/format';
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
        this.dateAndTime="";
        this.fromDate="";
        this.toDate="";
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
            this.isChecked = false;
            this.fromDate = null;
            this.toDate = null;
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
            const rideDetails ={
                      source: this.source,
                      destination: this.destination,
                      from_datetime: this.fromDate,
                      is_flexible: this.isChecked,
                      to_datetime: this.toDate,
                      datetime: moment(this.dateAndTime).format("YYYY-MM-DD HH:mm:ss"),
                      no_of_seats: this.seatsAvailable,
                      luggage_quantity: this.luggageQuantity
                    };
            this.props.requestStore.onRideRequest(rideDetails);
        }
        else if(this.source.length===0||this.destination.length===0){
            this.errorMessage="Required";
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
   position:toast.POSITION.BOTTOM_CENTER,
            type:toast.TYPE.WARNING
        });
    };

  render() {
     console.log(console.log(moment(this.dateAndTime).format("YYYY-MM-DD HH:mm:ss:ms")));
    //   var result = format(
    //           this.dateAndTime,
    //           'yyyy-mm-dd hh:mm:ss'
    //                     )
    //         console.log("date - format",result)
    //   console.log("ride request app status",this.props.requestStore.getRideRequestAPIStatus)
      if(this.props.requestStore.getRideRequestAPIStatus===200){
           this.notify();
      }
      const {getUserSignInAPIStatus}=this.props;
    return (<div>
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
      <ToastContainer />
      </div>
    );
  }
}

export default withRouter(RequestRideRoute);