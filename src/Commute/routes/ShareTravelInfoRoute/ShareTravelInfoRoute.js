import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import ShareTravelInfo from '../../components/ShareTravelInfo';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
@inject('shareStore')
@observer
class ShareTravelInfoRoute extends React.Component {
    @observable source
    @observable destination
    @observable isChecked
    @observable assetsCount
    @observable selectMedium
    @observable errorMessage
    @observable dateAndTime
    @observable fromDate
    @observable toDate
    @observable shareTravelDetails
    constructor(props){
        super(props);
        this.source="";
        this.destination="";
        this.errorMessage="";
        this.isChecked=false;
        this.assetsCount=0;
        this.selectMedium="Bus";
        this.dateAndTime=null;
        this.fromDate=null;
        this.toDate=null;
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
    onSelectMedium=(event)=>{
        this.selectMedium=event.target.value;
    }
    
    onSubmitDetails=(event)=>{
        event.preventDefault();
        if(this.source.length>0&&this.destination.length>0&&this.assetsCount>=1){
            const shareTravelDetails ={
                      source: this.source,
                      destination: this.destination,
                      from_datetime: this.fromDate,
                      is_flexible: this.isChecked,
                      to_datetime: this.toDate,
                      datetime: this.dateAndTime,
                      assets_quantity: this.assetsCount,
                      medium: this.selectMedium
                     };
            if(this.isChecked){
                this.dateAndTime = "None";
                if(this.fromDate!==null&&this.toDate!==null){
                    this.props.shareStore.onShareTravelInfo(shareTravelDetails);
                }
            }
            else{
                this.fromDate = "None";
                this.toDate = "None";
                if(this.dateAndTime!==null){
                         this.props.shareStore.onShareTravelInfo(shareTravelDetails);
                }
            }
            
        }
        else if(this.source.length===0||this.destination.length===0||this.dateAndTime===null){
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
      if(this.props.shareStore.getShareTravelInfoAPIStatus===200){
           this.notify();
      }
    return (<div>
      <ShareTravelInfo
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
          onSelectMedium={this.onSelectMedium}
          onSubmitDetails={this.onSubmitDetails}
      />
      <ToastContainer />
      </div>
    );
  }
}

export default withRouter(ShareTravelInfoRoute);