import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import { Pagination } from 'semantic-ui-react';
import {action} from 'mobx';
import SimpleMenu from '../material.js';
import {withRouter} from "react-router-dom";
import {Route,Redirect} from "react-router-dom";
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure';
import Pagenation from '../../../Common/Pagenation/index.js';
import Pagenator from '../../../Common/Pagenator';
import data from '../../../i18n/strings.json';
import {Requests,Tasks,Image,SortAndFilter,NoOfTasks,Details,MyDetails,Add,AddButton,Footer,PageRange,PageAlignment} from './styledComponents';
@inject('requestStore')
@observer
class RideDetails extends React.Component{
    componentDidMount(){
        this.doNetworkCalls();
     }
     @action.bound
     doNetworkCalls(){
         this.props.requestStore.onMyRideRequests();
     }
    
    renderMyRequests=observer(()=>{
        return this.props.rideRequestData; 
    })
    onAddRideRequest=()=>{
        const {history} = this.props;
        history.replace('/ride-app/request-ride/')
    }
    render(){
        const {getMyRideRequestAPIStatus,getMyRideRequestAPIError,noOfRequests} = this.props.requestStore;
        const {headings,rideRequestData,noOfRideTasks,onAddRideRequest,filterRide} = this.props;
        return(
            <Requests>
               <Tasks> 
                  <NoOfTasks>{noOfRequests} {data.task} </NoOfTasks>
                   <SortAndFilter>
                       
                       <Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/dbb6969d-a0d8-4c04-a6e1-749c29dc399a.svg" />
                       {data.sort}
                      {/* <div onClick={filterRide}>*/}
                           <Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/7b1bfd15-1e70-4d41-a538-5bc0840dc69b.svg" />
                            {data.filter}
                            {/*<SimpleMenu />*/}
                        {/*</div>*/}
                   </SortAndFilter>
               </Tasks>
               <MyDetails>
                   <Details>{headings} </Details>
                    <LoadingWrapperWithFailure
                        apiStatus={getMyRideRequestAPIStatus} 
                        apiError={getMyRideRequestAPIError} 
                        onRetryClick={this.doNetworkCalls}
                        renderSuccessUI={this.renderMyRequests}
                    /> 
               </MyDetails>
               
               <Footer> 
                   <AddButton onClick={this.onAddRideRequest}>
                       <img src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/6f392220-75d7-480c-8866-49c77b338ec3.svg" />
                       <Add> {data.addRequest}</Add>
                    </AddButton>

                      <PageRange>
                        <Pagenator limit={this.props.requestStore.rideLimit} offset={this.props.requestStore.rideOffset}
                        details={this.props.requestStore.rideDetails} onClickRightArrow={this.props.requestStore.onClickRightArrow}
                        onClickLeftArrow={this.props.requestStore.onClickLeftArrow}
                        total={this.props.requestStore.noOfRequests}
                        pageNumber={this.props.requestStore.pageNumber}
                        onMyRideRequests={this.props.requestStore.onMyRideRequests}/>
                    </PageRange> 
                    
                </Footer>
            </Requests>
        );
    }
}
export default withRouter(RideDetails);
