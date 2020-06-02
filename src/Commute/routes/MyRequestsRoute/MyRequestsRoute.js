import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import data from '../../../i18n/strings.json';
import {withRouter} from "react-router-dom";
import MyRequests from '../../components/MyRequests';
import {Header,Heading,Details,Status} from './styledComponent';
import assetCredentials from '../../fixtures/getAssetResponse.json';
@inject('requestStore')
@observer
class MyRequestsRoute extends React.Component {
  @observable rideButton
  @observable assetButton
  @observable tasks
  @observable listOfHeadings
    constructor(props){
        super(props);
        this.rideButton=false;
        this.assetButton=false;
        this.tasks = this.props.requestStore.noOfRequests;
        this.listOfHeadings=[data.rideRequest.from,data.rideRequest.to,data.rideRequest.dateAndTime,
        data.rideRequest.people,data.rideRequest.luggageQunatity,data.rideRequest.acceptedDetails,data.rideRequest.status];
    }
    headings=()=>{
        const values =this.listOfHeadings.map ((name)=>{
            return ( <Header> {name}</Header>);
        });
        return values;
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
      history.replace('/ride-app/request-ride/');
    }
  render() {
    return (
       <MyRequests 
       assetRequestData={this.assetRequestData()} rideButton={this.rideButton}  assetButton={this.assetButton}
       onAddRequest={this.onAddRequest} onClickRide={this.onClickRide} onClickAsset={this.onClickAsset}
       headings={this.headings()} rideRequestData={this.rideRequestData()} tasks={this.tasks}
       />
    );
  }
}

export default withRouter(MyRequestsRoute);