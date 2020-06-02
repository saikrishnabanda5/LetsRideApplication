import React from 'react';
import {observer} from 'mobx-react';
import data from '../../../i18n/strings.json';
import RideDetails from '../RideDetails';
import AssetDetails from '../AssetDetails';
import {Heading,Requests,TypeOfRequest,Button} from './styledComponent';
@observer
class MyRequests extends React.Component{
    
    render(){
        const {onClickRide,onClickAsset,headings,rideRequestData,tasks,onAddRequest,
        rideButton,assetButton,assetHeadings,assetRequestData,noOfAssetTasks,noOfRideTasks}=this.props;
        return(
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
        );
    }
}
export default MyRequests;