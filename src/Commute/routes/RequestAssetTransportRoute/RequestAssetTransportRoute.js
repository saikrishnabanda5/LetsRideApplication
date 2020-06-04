import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import RequestAssetTransport from '../../components/RequestAssetTransport';
@inject('requestStore')
@observer
class RequestAssetTransportRoute extends React.Component {
    @observable source
    @observable destination
    @observable isChecked
    @observable assetsCount
    @observable errorMessage
    @observable selectedAsset
    @observable selectSensitivity
    @observable otherAssets
    @observable personDetails
    @observable dateAndTime
    @observable fromDate
    @observable toDate
    constructor(props){
        super(props);
        this.source="";
        this.destination="";
        this.errorMessage="";
        this.isChecked=false;
        this.assetsCount=0;
        this.dateAndTime=null;
        this.fromDate=null;
        this.toDate=null;
        this.selectedAsset="Select asset";
        this.selectSensitivity="Sensitive";
        this.otherAssets ="";
        this.personDetails='';
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
      this.assetsCount = this.assetsCount + 1;
    }
    onDecrementAssetsCount=()=> {
       if(this.assetsCount>0){
        this.assetsCount = this.assetsCount - 1;
       }
    }
    onSelectAsset=(event)=>{
        this.selectedAsset=event.target.value;
    }
    onSelectSensitivity=(event)=>{
        this.selectSensitivity=event.target.value;
    }
    onChangeUserValue=(event)=>{
        this.otherAssets = event.target.value;   
    }
    onChangePersonDetails=(event)=>{
        this.personDetails = event.target.value;
    }
    onEnterKeyPress=(event)=>{
        if(event.key==="Enter"){
            this.onSubmitDetails();
        }
    }
    onSubmitDetails=(event)=>{
        alert("requsey -asset ")
        if(this.source.length>0&&this.destination.length>0&&this.assetsCount>=1&&this.personDetails.length>0){
            alert("success");
            const assetDetails ={
                      source: this.source,
                      destination: this.destination,
                      from_datetime: this.fromDate,
                      is_flexible: this.isChecked,
                      to_datetime: this.toDate,
                      datetime: this.dateAndTime,
                      no_of_assets: this.assetsCount,
                      asset_type: this.selectedAsset,
                      sensitivity:this.selectSensitivity,
                      deliver_person:this.personDetails
                    };
                
            this.props.requestStore.onClickAssetRequest(assetDetails);
        }
        else if(this.source.length===0||this.destination.length===0||this.personDetails.length===0){
            this.errorMessage="Required";
        }
    }
  render() {
      const {getUserSignInAPIStatus}=this.props;
    return (
      <RequestAssetTransport
          apiStatus={getUserSignInAPIStatus}
          source={this.source}
          destination={this.destination}
          errorMessage={this.errorMessage}
          personDetails={this.personDetails}
          isChecked={this.isChecked}
          assetsCount={this.assetsCount}
          otherAssets={this.otherAssets}
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
          selectedAsset={this.selectedAsset}
          onSelectAsset={this.onSelectAsset}
          onSelectSensitivity={this.onSelectSensitivity}
          onChangeUserValue={this.onChangeUserValue}
          onChangePersonDetails={this.onChangePersonDetails}
          onEnterKeyPress={this.onEnterKeyPress}
          onSubmitDetails={this.onSubmitDetails}
      />
    );
  }
}

export default withRouter(RequestAssetTransportRoute);