import React from 'react';
import {observer} from 'mobx-react';
import data from '../../../i18n/strings.json';
import RideDetails from '../RideDetails';
import AssetDetails from '../AssetDetails';
import MatchingResults from '../MatchingResults';
import MyRequestDetails from '../MyRequestDetails';
import SharedDetails from '../SharedDetails';
import {Heading,Requests,TypeOfRequest,Button,HomePage,Results,Request,Details,MainPage} from './styledComponent';
@observer
class MyRequests extends React.Component{
    
    render(){
        const {onClickRide,onClickAsset,headings,rideRequestData,tasks,onAddRequest,
        rideButton,assetButton,assetHeadings,assetRequestData,noOfAssetTasks,noOfRideTasks,
        OnMatchingResults,OnMyRequests,onSharedDetails,matchingResults,myRequests,sharedDetails
        }=this.props;
        console.log(matchingResults,myRequests,sharedDetails)
        return(
            <MainPage>
            <HomePage>
               <Results onClick={OnMatchingResults} matchingResults={matchingResults}> Matching Results </Results>
               <Request onClick={OnMyRequests} myRequests={myRequests}>My Requests </Request>
               <Details onClick={onSharedDetails} sharedDetails={sharedDetails}>Shared Details</Details>
            </HomePage>
            {matchingResults?<MatchingResults />:null}
            {myRequests?<MyRequestDetails />:null}
            {sharedDetails?<SharedDetails />:null}
            <Requests>
               <Heading>{data.myRequests} </Heading>
               <TypeOfRequest>
                 <Button rideButton={rideButton} onClick={onClickRide}>{data.ride} </Button>
                 <Button assetButton={assetButton}onClick={onClickAsset}> {data.asset}</Button>
               </TypeOfRequest>
                   {this.props.rideButton?<RideDetails headings={headings} rideRequestData={rideRequestData}
                   noOfRideTasks={noOfRideTasks} onAddRequest={onAddRequest}/> :null}
                   {this.props.assetButton?<AssetDetails assetHeadings={assetHeadings} assetRequestData={assetRequestData}
                   noOfAssetTasks={noOfAssetTasks} onAddRequest={onAddRequest}/> :null}
            </Requests>
            </MainPage>
        );
    }
}
export default MyRequests;