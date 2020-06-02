import React from "react";
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import ShareRide from '../../components/ShareRide';
@observer
class ShareRideRoute extends React.Component {
    @observable source
    @observable destination
    @observable startDate
    @observable isChecked
    @observable seatsAvailable
    @observable assetsCount
    @observable selectedValue
    constructor(props){
        super(props);
        this.source="";
        this.destination="";
        this.startDate="";
        this.errorMessage="";
        this.isChecked=false;
        this.seatsAvailable=0;
        this.assetsCount=0;
        this.selectedValue="Share";
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
    onIncrementSeatsCount=()=> {
      this.seatsAvailable = this.seatsAvailable + 1;
    }
    onDecrementSeatsCount=()=> {
       if(this.seatsAvailable>0){
        this.seatsAvailable = this.seatsAvailable - 1;
       }
    }
    onClickShare=()=>{
        const {history}=this.props;
        if(this.password.length>0&&this.mobileNumber.length===10 && this.mobileNumber.search(/^[6-9]{1}[0-9]{9}$/) === 0){
            this.errorMessage="";
            this.props.authStore.userSignIn();         
            history.replace('/ride-app/');
        }
        else if(this.mobileNumber.length===0 || this.mobileNumber.search(/^[6-9]{1}[0-9]{9}$/) === -1){
            this.errorMessage="Required";
        }
        else if(this.password.length==0){
            this.errorMessage="Required";
        }
    }
  render() {
      const {history}=this.props;
    //   history.replace('/ride-app/ride-route/');
      const {getUserSignInAPIStatus}=this.props;
    return (
      <ShareRide
          apiStatus={getUserSignInAPIStatus}
          source={this.mobileNumber}
          destination={this.password}
          errorMessage={this.errorMessage}
          isChecked={this.isChecked}
          seatsAvailable={this.seatsAvailable}
          assetsCount={this.assetsCount}
          onChangeSource={this.onChangeSource}
          onChangeDestination={this.onChangeDestination}
          onIncrementAssetsCount={this.onIncrementAssetsCount}
          onDecrementAssetsCount={this.onDecrementAssetsCount}
          onIncrementSeatsCount={this.onIncrementSeatsCount}
          onDecrementSeatsCount={this.onDecrementSeatsCount}
      />
    );
  }
}

export default withRouter(ShareRideRoute);