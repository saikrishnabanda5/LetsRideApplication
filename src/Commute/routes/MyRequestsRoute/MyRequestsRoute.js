import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import data from '../../../i18n/strings.json';
import {withRouter} from "react-router-dom";
import MyRequests from '../../components/MyRequests';
import {Header,Heading,Details} from './styledComponent';
import assetCredentials from '../../fixtures/getAssetResponse.json';
@inject('requestStore')
@observer
class MyRequestsRoute extends React.Component {
  @observable rideButton
  @observable assetButton
    constructor(props){
        super(props);
        this.rideButton=false;
        this.assetButton=false;
    }
    componentDidMount(){
        this.doNetworkCalls();
    }
    doNetworkCalls=()=>{
        this.props.requestStore.onClickRequest();
    }
    
    assetRequestData=()=>{
      const values = assetCredentials.asset_requests.map((name,index)=>{
            return ( 
              <Details >
                    <Heading> {name.source}</Heading>
                    <Header> {name.destination}</Header>
                    <Heading> {name.from_datetime}</Heading>
                    <Header>{name.no_of_seats}</Header>
                    <Header>{name.luggage_quantity}</Header>
                    <Header>
                    <Header>{name.accepted_person.mobile_number}</Header>
                    <Header>{name.accepted_person.user_name}   </Header>
                    </Header>
                    <Header>{name.status}</Header>
              </Details>
            );
        });
      return values;
    }
    onClickRide=()=>{
      this.rideButton=true;
      this.assetButton=false;
    }
    onClickAsset=()=>{
      this.rideButton=false;
      this.assetButton=true;
    }
  render() {
    return (
       <MyRequests 
       assetRequestData={this.assetRequestData()} rideButton={this.rideButton}  assetButton={this.assetButton}
       onAddRequest={this.onAddRequest} onClickRide={this.onClickRide} onClickAsset={this.onClickAsset}
       doNetworkCalls={this.doNetworkCalls} renderMyRequests={this.obtainedData}
       />
    );
  }
}

export default withRouter(MyRequestsRoute);