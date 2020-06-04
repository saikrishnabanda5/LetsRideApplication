import React from 'react';
import {observer,inject} from 'mobx-react';
import { Pagination } from 'semantic-ui-react';
import {action} from 'mobx';
import SimpleMenu from '../material.js';
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure';
import data from '../../../i18n/strings.json';
import {Requests,Tasks,Image,SortAndFilter,NoOfTasks,Details,MyDetails,Add,AddButton,Footer,PageRange} from './styledComponents';
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
    
    render(){
        const {getMyRideRequestAPIStatus,getMyRideRequestAPIError} = this.props.requestStore;
        const {headings,rideRequestData,noOfRideTasks,onAddRequest,filterRide} = this.props;
        return(
            <Requests>
               <Tasks> 
                  <NoOfTasks>{noOfRideTasks} {data.task} </NoOfTasks>
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
                   <AddButton onClick={onAddRequest}>
                       <img src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/6f392220-75d7-480c-8866-49c77b338ec3.svg" />
                       <Add> {data.addRequest}</Add>
                    </AddButton>
                    <PageRange>PAGE 1 OF 5 </PageRange>
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={10} /> 
                </Footer>
            </Requests>
        );
    }
}
export default RideDetails;