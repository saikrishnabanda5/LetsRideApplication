import React from 'react';
import {observer, inject} from 'mobx-react';
import {observable} from 'mobx';
import {Requests,TypeOfRequest,Button,Details,Header,Heading,Headings,Status,Headers} from './styledComponents';
import data from '../../../i18n/strings.json';
import MatchingRideDetails from '../MatchingRideDetails';
import MatchingAssetDetails from '../MatchingAssetDetails';
import ShareStore from "../../stores/ShareStore";

interface MatchingResultsProps {

}

interface InjectedProps extends MatchingResultsProps {
    shareStore:ShareStore
}    
@inject('shareStore')
@observer
class MatchingResults extends React.Component<MatchingResultsProps>{
    
    @observable rideButton: boolean 
    @observable assetButton: boolean 
    @observable initialScreen: boolean 
    @observable noOfMatchedRides: number
    @observable noOfMatchedAssets: number
    @observable listOfMatchingRides:Array<string>
    @observable listOfMatchingAssets:Array<string>
  
    constructor(props) {
        super(props);
        this.rideButton = false;
        this.assetButton = false;
        this.initialScreen = true;
        this.noOfMatchedRides = this.getShareStore().noOfMatchedRides;
        this.noOfMatchedAssets = this.getShareStore().noOfMatchedAssets;
        this.listOfMatchingRides = [
            data.rideRequest.acceptedDetails,
            data.rideRequest.from,
            data.rideRequest.to,
            data.rideRequest.dateAndTime,
            data.rideRequest.seats,
            data.rideRequest.luggageQunatity,
            data.rideRequest.status
        ];

        this.listOfMatchingAssets = [
            data.assetRequest.acceptedDetails,
            data.assetRequest.from,
            data.assetRequest.to,
            data.assetRequest.dateAndTime,
            data.assetRequest.assets,
            data.assetRequest.assetType,
            data.assetRequest.assetSensitivity,
            data.assetRequest.whomToDeliver,
            data.assetRequest.status
        ];
    }
    getInjectedProps = (): InjectedProps => this.props as InjectedProps 
    
    getShareStore = () => {
        return this.getInjectedProps().shareStore
    }

    onClickRide = () => {
        this.rideButton = true;
        this.assetButton = false;
    }
    onClickAsset = () => {
        this.initialScreen = false;
        this.rideButton = false;
        this.assetButton = true;
    }
    headings = () => {
        const values = this.listOfMatchingRides.map((name) => {
            return (
                <Header key={Math.random()}>{name}</Header>
            );
        });
        return values;
    }

    assetHeadings = () => {
        const values = this.listOfMatchingAssets.map((name) => {
            return (
                <Headers key={Math.random()}>{name}</Headers>
            );
        });
        return values;
    }
    matchingAssetData = () => {
        const values = this.getShareStore().matchedAssetDetails.map((name) => {
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
    matchingData = () => {
        const values = this.getShareStore().pagenationstore.matchedRideDetails.map((name) => {
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
    onAddRequest=()=>{

    }
    render() {
        return (
            <Requests>
               <TypeOfRequest>
                 <Button rideButton={this.rideButton} assetButton={this.assetButton} onClick={this.onClickRide}>{data.ride} </Button>
                 <Button assetButton={this.assetButton} rideButton={this.rideButton} onClick={this.onClickAsset}> {data.asset}</Button>
               </TypeOfRequest>
                  {this.rideButton||this.initialScreen?<MatchingRideDetails  matchingData={this.matchingData()} headings={this.headings()}
                   /> :null}  
                   {this.assetButton?<MatchingAssetDetails assetHeadings={this.assetHeadings()} matchingAssetData={this.matchingAssetData()}
                   noOfMatchedAssets={this.noOfMatchedAssets} /> :null}
            </Requests>
        )
    }
}
export default MatchingResults;
