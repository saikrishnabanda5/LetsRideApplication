import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {Requests,TypeOfRequest,Button,Details,Header,Heading,Headings,Status,Headers} from './styledComponent';
import data from '../../../i18n/strings.json';
import SharedRideDetails from '../SharedRideDetails';
import SharedAssetDetails from '../SharedAssetDetails';
@inject('shareStore')
@observer
class MyRequestDetails extends React.Component{
  @observable rideButton
  @observable assetButton
  @observable noOfRideTasks
  @observable listOfShareRideHeadings
  @observable listOfShareTravelHeadings
  @observable noOfTravelTasks
    constructor(props){
        super(props);
        this.rideButton=false;
        this.assetButton=false;
        // this.noOfRideTasks = this.props.shareStore.noOfRequests;
        // this.noOfTravelTasks = this.props.shareStore.noOfAssetRequests;
        this.listOfShareRideHeadings=[data.shareTravel.from,data.shareTravel.to,data.shareTravel.dateAndTime,
        data.shareTravel.seats,data.shareTravel.assetsQuantity,data.shareTravel.status];
        
        this.listOfShareTravelHeadings=[data.shareTravel.from,data.shareTravel.to,data.shareTravel.dateAndTime,
        data.shareTravel.medium,data.shareTravel.assetsQuantity,data.shareTravel.status];
    }
    onClickRide=()=>{
      this.rideButton=true;
      this.assetButton=false;
    }
    onClickTravelInfo=()=>{
      this.rideButton=false;
      this.assetButton=true;
    }
    rideheadings=()=>{
        const values =this.listOfShareRideHeadings.map ((name)=>{
            return ( <Header> {name}</Header>);
        });
        return values;
    }
    
    assetHeadings=()=>{
      const values =this.listOfShareTravelHeadings.map ((name)=>{
            return ( <Headers> {name}</Headers>);
        });
        return values;
    }
    assetRequestData=()=>{
      const values = this.props.shareStore.assetDetails.map((name,index)=>{
            return ( 
              <Details key={Math.random()}>
              
                    <Headings> {name.source}</Headings>
                    <Headers> {name.destination}</Headers>
                    {name.is_flexible?<div>
                    <Headings> {name.from_datetime}</Headings>
                    <Headings>{name.to_datetime}</Headings>
                    </div>:<Headings>{name.datetime}</Headings>}
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
    sharedRideData=()=>{
      const values = this.props.shareStore.rideDetails.map((name)=>{
            return ( 
              <Details key={Math.random()}>
                    <Heading> {name.source}</Heading>
                    <Header> {name.destination}</Header> 
                    {name.is_flexible?<div>
                    <Headings> {name.from_datetime}</Headings>
                    <Headings>{name.to_datetime}</Headings>
                    </div>:<Headings>{name.datetime}</Headings>}
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
                 <Button rideButton={this.rideButton}  onClick={this.onClickRide}>{data.shareTravel.ride} </Button>
                 <Button assetButton={this.assetButton} onClick={this.onClickTravelInfo}> {data.shareTravel.travelInfo}</Button>
               </TypeOfRequest>
                   {this.rideButton?<SharedRideDetails rideheadings={this.rideheadings()} sharedRideData={this.sharedRideData()}
                   noOfRideTasks={this.noOfRideTasks} onAddShareRide={this.props.onAddShareRide}/> :null}
                   {this.assetButton?<SharedAssetDetails assetHeadings={this.assetHeadings()} assetRequestData={this.assetRequestData()}
                   noOfTravelTasks={this.noOfTravelTasks} onAddShareTravel={this.props.onAddShareTravel}/> :null}
            </Requests>
            );
    }
}
export default MyRequestDetails;