import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {Requests,TypeOfRequest,Button,Details,Header,Heading,Status} from './styledComponent';
import data from '../../../i18n/strings.json';
import RideDetails from '../RideDetails';
import AssetDetails from '../AssetDetails';
@inject('requestStore')
@observer
class MyRequestDetails extends React.Component{
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
    onClickRide=()=>{
      this.rideButton=true;
      this.assetButton=false;
    }
    onClickAsset=()=>{
      this.rideButton=false;
      this.assetButton=true;
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
    render(){
        return(
            <Requests>
               <TypeOfRequest>
                 <Button rideButton={this.rideButton} onClick={this.onClickRide}>{data.ride} </Button>
                 <Button assetButton={this.assetButton}onClick={this.onClickAsset}> {data.asset}</Button>
               </TypeOfRequest>
                   {this.rideButton?<RideDetails headings={this.headings()} rideRequestData={this.rideRequestData()}
                   noOfRideTasks={this.noOfRideTasks} onAddRequest={this.props.onAddRequest}/> :null}
                   {this.assetButton?<AssetDetails assetHeadings={this.assetHeadings} assetRequestData={this.assetRequestData}
                   noOfAssetTasks={this.noOfAssetTasks} onAddRequest={this.onAddRequest}/> :null}
            </Requests>
            );
    }
}
export default MyRequestDetails;