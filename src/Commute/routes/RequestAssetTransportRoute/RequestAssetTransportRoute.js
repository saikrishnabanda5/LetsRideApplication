import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import RequestAssetTransport from '../../components/RequestAssetTransport';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        this.selectedAsset="parcel";
        this.selectSensitivity="Sensitive";
        this.otherAssets ="";
        this.personDetails='';
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
    onSubmitDetails=async(event)=>{
        if(this.source.length>0&&this.destination.length>0&&this.assetsCount>=1&&this.personDetails.length>0){
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
                
            await this.props.requestStore.onClickAssetRequest(assetDetails);
            this.toaster();
        }
        else if(this.source.length===0||this.destination.length===0||this.personDetails.length===0){
            this.errorMessage="Required";
        }
    }
    toaster=()=>{
     if(this.props.requestStore.getAssetRequestAPIStatus===200){
           this.notify();
      }
     }
    notify = () =>{
        toast.success("Your Request has been accepted",{
            className: {
              color: '#4299e1',
              minHeight: '60px',
              borderRadius: '8px',
              background: 'red',
              boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3)'
            },
           position:toast.POSITION.TOP_CENTER,
                    type:toast.TYPE.SUCCESS
                });
            };
  render() {
    return (
        <div>
      <RequestAssetTransport
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
      <ToastContainer
        className='toast-container'
  toastClassName="dark-toast"
//   progressClassName={css({
//     height: "2px"
//   })}
        
      />
      </div>
    );
  }
}

export default withRouter(RequestAssetTransportRoute);