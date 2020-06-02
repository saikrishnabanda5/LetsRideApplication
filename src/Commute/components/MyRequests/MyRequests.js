import React from 'react';
import {observer} from 'mobx-react';
import data from '../../../i18n/strings.json';
import RideDetails from '../RideDetails';
import AssetDetails from '../AssetDetails';
import {Heading,Requests,TypeOfRequest,Button,Tasks,Image,SortAndFilter,NoOfTasks,Header,Details,MyDetails,Add,AddButton} from './styledComponent';
@observer
class MyRequests extends React.Component{
    
    render(){
        const {onClickRide,onClickAsset,headings,rideRequestData,tasks,onAddRequest}=this.props;
        return(
            <Requests>
               <Heading>{data.myRequests} </Heading>
               <TypeOfRequest>
                 <Button onClick={onClickRide}>{data.ride} </Button>
                 <Button onClick={onClickAsset}> {data.asset}</Button>
               </TypeOfRequest>
                   {this.props.rideButton?<RideDetails headings={headings} rideRequestData={rideRequestData}
                   tasks={tasks} onAddRequest={onAddRequest}/> :null}
                   {this.props.assetButton?<AssetDetails />:null}
            </Requests>
        );
    }
}
export default MyRequests;