import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import ShareTravelInfo from '../../components/ShareTravelInfo';
@inject('shareStore')
@observer
class ShareTravelInfoRoute extends React.Component {
    @observable source
    @observable destination
    @observable startDate
    @observable isChecked
    @observable assetsCount
    @observable selectedValue
    @observable errorMessage
    @observable dateAndTime
    @observable fromDate
    @observable toDate
    constructor(props){
        super(props);
        this.source="";
        this.destination="";
        this.startDate="";
        this.errorMessage="";
        this.isChecked=false;
        this.assetsCount=0;
        this.selectedValue="Share";
        this.dateAndTime=new Date();
        this.fromDate=new Date();
        this.toDate=new Date();
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
    onClickCheckBox=(event)=>{
        if(this.isChecked){
            this.isChecked =false;
        }
        else{
            this.isChecked =true;
        }
    }
    onIncrementAssetsCount=()=> {
        alert()
      this.assetsCount = this.assetsCount + 1;
    }
    onDecrementAssetsCount=()=> {
       if(this.assetsCount>0){
        this.assetsCount = this.assetsCount - 1;
       }
    }
    
    onSubmitDetails=(event)=>{
        event.preventDefault();
        if(this.source.length>0&&this.destination.length>0&&this.assetsCount>=1){
            alert("success")
            this.props.shareStore.onShareTravelInfo();
        }
        else if(this.source.length===0||this.destination.length===0||this.personDetails.length===0){
            this.errorMessage="Required";
        }
    }
  render() {
      
      const {getUserSignInAPIStatus}=this.props;
    return (
      <ShareTravelInfo
          apiStatus={getUserSignInAPIStatus}
          source={this.source}
          destination={this.destination}
          errorMessage={this.errorMessage}
          isChecked={this.isChecked}
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
          onSubmitDetails={this.onSubmitDetails}
      />
    );
  }
}

export default withRouter(ShareTravelInfoRoute);