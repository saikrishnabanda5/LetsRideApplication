import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import ShareRide from '../../components/ShareRide';
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
            alert("success")
            const shareRideDetails ={
                      source: this.source,
                      destination: this.destination,
                      from_datetime: this.fromDate,
                      flexible: this.isChecked,
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
  render() {
      const {getUserSignInAPIStatus}=this.props;
    return (
      <ShareRide
          apiStatus={getUserSignInAPIStatus}
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
    );
  }
}

export default withRouter(ShareRideRoute);