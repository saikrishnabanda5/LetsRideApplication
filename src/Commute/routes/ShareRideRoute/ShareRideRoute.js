import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import ShareRide from '../../components/ShareRide';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
@inject('shareStore')
@observer
class ShareRideRoute extends React.Component {
    @observable source
    @observable destination
    @observable isChecked
    @observable seatsAvailable
    @observable assetsCount
    @observable errorMessage
    @observable dateAndTime
    @observable fromDate
    @observable toDate
    constructor(props){
        super(props);
        this.source="";
        this.destination="";
        this.errorMessage="";
        this.dateAndTime=null;
        this.fromDate=null;
        this.toDate=null;
        this.isChecked=false;
        this.seatsAvailable=0;
        this.assetsCount=0;
    }
     onChangeDateAndTime=(date)=>{
        this.dateAndTime=moment(date).format("YYYY-MM-DD HH:mm:ss");
    }
    onChangeFromDate=(date)=>{
        this.fromDate=moment(date).format("YYYY-MM-DD HH:mm:ss");
    }
    onChangeToDate=(date)=>{
        this.toDate=moment(date).format("YYYY-MM-DD HH:mm:ss");
    }
    onChangeSource=(event)=>{
        this.source=event.target.value;
    }    
    onChangeDestination=(event)=>{
        this.destination=event.target.value;
    }
    onIncrementAssetsCount=()=> {
      this.assetsCount = this.assetsCount + 1;
    }
    onDecrementAssetsCount=()=> {
       if(this.assetsCount>0){
        this.assetsCount = this.assetsCount - 1;
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
        if(this.source.length>0&&this.destination.length>0&&this.seatsAvailable>=1&&this.assetsCount>=1){
            const shareRideDetails ={
                      source: this.source,
                      destination: this.destination,
                      from_datetime: this.fromDate,
                      is_flexible: this.isChecked,
                      to_datetime: this.toDate,
                      datetime: this.dateAndTime,
                      assets_quantity: this.assetsCount,
                      no_of_seats_available: this.seatsAvailable
                    };
            this.props.shareStore.onShareRide(shareRideDetails);
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
      if(this.props.shareStore.getShareRideAPIStatus===200){
           this.notify();
      }
    return (<div>
      <ShareRide
          source={this.source}
          destination={this.destination}
          errorMessage={this.errorMessage}
          isChecked={this.isChecked}
          seatsAvailable={this.seatsAvailable}
          assetsCount={this.assetsCount}
          dateAndTime={this.dateAndTime}
          fromDate={this.fromDate}
          toDate={this.toDate}
          onChangeSource={this.onChangeSource}
          onChangeDestination={this.onChangeDestination}
          onClickCheckBox={this.onClickCheckBox}
          onChangeDateAndTime={this.onChangeDateAndTime}
          onChangeFromDate={this.onChangeFromDate}
          onChangeToDate={this.onChangeToDate}
          onIncrementAssetsCount={this.onIncrementAssetsCount}
          onDecrementAssetsCount={this.onDecrementAssetsCount}
          onIncrementSeatsCount={this.onIncrementSeatsCount}
          onDecrementSeatsCount={this.onDecrementSeatsCount}
          onSubmitDetails={this.onSubmitDetails}
      />
      <ToastContainer />
      </div>
    );
  }
}

export default withRouter(ShareRideRoute);