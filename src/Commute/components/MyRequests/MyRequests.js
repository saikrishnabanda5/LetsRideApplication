import React from 'react';
import {observer,inject} from 'mobx-react';
import { Pagination } from 'semantic-ui-react';
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure';
import data from '../../../i18n/strings.json';
import RideDetailsRoute from '../../routes/RideDetailsRoute';
import AssetDetailsRoute from '../../routes/AssetDetailsRoute';
import {Heading,Requests,TypeOfRequest,Button,Tasks,Image,SortAndFilter,NoOfTasks,Header,Details,MyDetails,Add,AddButton} from './styledComponent';
@inject('requestStore')
@observer
class MyRequests extends React.Component{
    
    render(){
        const {onClickRide,onClickAsset}=this.props;
        return(
            <Requests>
               <Heading>{data.myRequests} </Heading>
               <TypeOfRequest>
                 <Button onClick={onClickRide}>{data.ride} </Button>
                 <Button onClick={onClickAsset}> {data.asset}</Button>
               </TypeOfRequest>
                   {this.props.rideButton?<RideDetailsRoute /> :null}
                   {this.props.assetButton?<AssetDetailsRoute />:null}
            </Requests>
        );
    }
}
export default MyRequests;

{/* <LoadingWrapperWithFailure
                        apiStatus={getRequestAPIStatus}
                        apiError={getRequestAPIError}
                        onRetryClick={doNetworkCalls}
                        renderSuccessUI={renderMyRequests}
                    /> */}