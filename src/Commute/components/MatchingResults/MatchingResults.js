import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {Requests,TypeOfRequest,Button,Details,Header,Heading,Headings,Status,Headers} from './styledComponents';
import data from '../../../i18n/strings.json';
import MatchingRideDetails from '../MatchingRideDetails';
import MatchingAssetDetails from '../MatchingAssetDetails';
@inject('shareStore')
@observer
class MatchingResults extends React.Component{
  @observable rideButton
  @observable assetButton
  @observable noOfMatchedRides
  @observable noOfMatchedAssets
  @observable noOfAssetTasks
  @observable initialScreen
    constructor(props){
        super(props);
        this.rideButton=false;
        this.assetButton=false;
        this.initialScreen = true;
        this.noOfMatchedRides = this.props.shareStore.noOfMatchedRides;
        this.noOfMatchedAssets = this.props.shareStore.noOfMatchedAssets;
        this.listOfMatchingRides=[data.rideRequest.acceptedDetails,data.rideRequest.from,data.rideRequest.to,data.rideRequest.dateAndTime,
        data.rideRequest.seats,data.rideRequest.luggageQunatity,data.rideRequest.status];
        
        this.listOfMatchingAssets=[data.assetRequest.acceptedDetails,data.assetRequest.from,data.assetRequest.to,data.assetRequest.dateAndTime,
        data.assetRequest.assets,data.assetRequest.assetType,data.assetRequest.assetSensitivity,
        data.assetRequest.whomToDeliver,data.assetRequest.status];
    }
    onClickRide=()=>{
      console.log(11)
      this.rideButton=true;
      this.assetButton=false;
    }
    onClickAsset=()=>{
      this.initialScreen=false;
      this.rideButton=false;
      this.assetButton=true;
    }
    headings=()=>{
        const values =this.listOfMatchingRides.map ((name)=>{
            return ( <Header key={Math.random()}> {name}</Header>);
        });
        return values;
    }
    
    assetHeadings=()=>{
      const values =this.listOfMatchingAssets.map ((name)=>{
            return ( <Headers key={Math.random()}> {name}</Headers>);
        });
        return values;
    }
    matchingAssetData=()=>{
      const values = this.props.shareStore.matchedAssetDetails.map((name,index)=>{
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
    matchingData=()=>{
      const values = this.props.shareStore.pagenationstore.matchedRideDetails.map((name)=>{
            return ( 
              <Details key={Math.random()}>
                    <div>
                      <Header>{name.mobile_number}</Header>
                      <Header>{name.user_name}   </Header>
                    </div>
                    <Heading> {name.source}</Heading>
                    <Header> {name.destination}</Header> 
                    {name.is_flexible?<div>
                    <Headings> {name.from_datetime}</Headings>
                    <Headings>{name.to_datetime}</Headings>
                    </div>:<Headings>{name.datetime}</Headings>}
                    <Header>{name.no_of_seats}</Header>
                    <Header>{name.luggage_quantity}</Header>
                    
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
                   {this.rideButton||this.initialScreen?<MatchingRideDetails headings={this.headings()} matchingData={this.matchingData()}
                   noOfMatchedRides={this.noOfMatchedRides} onAddRequest={this.props.onAddRequest}/> :null}
                   {this.assetButton?<MatchingAssetDetails assetHeadings={this.assetHeadings()} matchingAssetData={this.matchingAssetData()}
                   noOfMatchedAssets={this.noOfMatchedAssets} onAddRequest={this.props.onAddRequest}/> :null}
            </Requests>
            );
    }
}
export default MatchingResults;