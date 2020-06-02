import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import data from '../../../i18n/strings.json';
import {withRouter} from "react-router-dom";
import MyRequests from '../../components/MyRequests';
import {Header,Heading,Details,Status,Headings,Headers} from './styledComponent';
@inject('requestStore')
@observer
class MyRequestsRoute extends React.Component {
  @observable rideButton
  @observable assetButton
  @observable noOfRideTasks
  @observable listOfRideHeadings
  @observable listOfAssetHeadings
  @observable noOfAssetTasks
  constructor(props){
        super(props);
        this.rideButton=false;
        this.assetButton=false;
        this.noOfRideTasks = this.props.requestStore.noOfRequests;
        this.noOfAssetTasks = this.props.requestStore.noOfAssetRequests;
        this.listOfRideHeadings=[data.rideRequest.from,data.rideRequest.to,data.rideRequest.dateAndTime,
        data.rideRequest.people,data.rideRequest.luggageQunatity,data.rideRequest.acceptedDetails,data.rideRequest.status];
        
        this.listOfAssetHeadings=[data.assetRequest.from,data.assetRequest.to,data.assetRequest.dateAndTime,
        data.assetRequest.assets,data.assetRequest.assetType,data.assetRequest.assetSensitivity,
        data.assetRequest.whomToDeliver,data.assetRequest.acceptedDetails,data.assetRequest.status];
    }
    headings=()=>{
        const values =this.listOfRideHeadings.map ((name)=>{
            return ( <Header> {name}</Header>);
        });
        return values;
    }
    
    assetHeadings=()=>{
      const values =this.listOfAssetHeadings.map ((name)=>{
            return ( <Headers> {name}</Headers>);
        });
        return values;
    }
    assetRequestData=()=>{
      const values = this.props.requestStore.assetDetails.map((name,index)=>{
            return ( 
              <Details >
                    <Headings> {name.source}</Headings>
                    <Headers> {name.destination}</Headers>
                    <Headings> {name.from_datetime}</Headings>
                    <Headers>{name.no_of_assets}</Headers>
                    <Headers>{name.asset_type}</Headers>
                    <Headers>{name.sensitivity}</Headers>
                    <Headers>{name.deliver_person}</Headers>
                    <div>
                    <Headers>{name.mobile_number}</Headers>
                    <Headers>{name.user_name}   </Headers>
                    </div>
                    <Status status={name.status}>{name.status}</Status>
              </Details>
            );
        });
      return values;
    }
    rideRequestData=()=>{
      const values = this.props.requestStore.rideDetails.map((name)=>{
            return ( 
              <Details >
                    <Heading> {name.source}</Heading>
                    <Header> {name.destination}</Header> 
                    <Heading> {name.from_datetime}</Heading>
                    <Header>{name.no_of_seats}</Header>
                    <Header>{name.luggage_quantity}</Header>
                    <div>
                    <Header>{name.mobile_number}</Header>
                    <Header>{name.user_name}   </Header>
                    </div>
                    <Status status={name.status}>{name.status}</Status>
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
    onAddRequest=()=>{
      const {history}=this.props;
      history.push('/ride-app/request-ride/');
    }
  render() {
    return (
       <MyRequests 
        rideButton={this.rideButton}
        headings={this.headings()}
        onAddRequest={this.onAddRequest}
        onClickRide={this.onClickRide}
        rideRequestData={this.rideRequestData()} 
        noOfRideTasks={this.noOfRideTasks}
       
       assetButton={this.assetButton}
       assetHeadings={this.assetHeadings()}
       assetRequestData={this.assetRequestData()}
       noOfAssetTasks={this.noOfAssetTasks}
       onClickAsset={this.onClickAsset}
       />
    );
  }
}

export default withRouter(MyRequestsRoute);