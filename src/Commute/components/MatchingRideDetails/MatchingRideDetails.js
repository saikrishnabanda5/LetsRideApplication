import React from 'react';
import {observer,inject} from 'mobx-react';
import { Pagination } from 'semantic-ui-react';
import {action} from 'mobx';
import SimpleMenu from '../material.js';
import Pagenator from '../../../Common/Pagenator';
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure';
import data from '../../../i18n/strings.json';
import {Requests,Tasks,Image,SortAndFilter,NoOfTasks,Details,MyDetails,Add,AddButton,Footer,PageRange} from './styledComponents';
@inject('shareStore')
@observer
class MatchingRideDetails extends React.Component{
    componentDidMount(){
        this.doNetworkCalls();
     }
     @action.bound
     doNetworkCalls(){
         this.props.shareStore.onMatchingRides();
     }
    
    renderMatchingData=observer(()=>{
        return this.props.matchingData; 
    })
    
    render(){
        const {getMatchingRideAPIStatus,getMatchingRideAPIError,noOfMatchedRides} = this.props.shareStore;
        const {headings,matchingData,onAddRequest,filterRide} = this.props;
        return(
            <Requests>
               <Tasks> 
                  <NoOfTasks>{noOfMatchedRides} {data.task} </NoOfTasks>
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
                        apiStatus={getMatchingRideAPIStatus}
                        apiError={getMatchingRideAPIError}
                        onRetryClick={this.doNetworkCalls}
                        renderSuccessUI={this.renderMatchingData}
                    /> 
               </MyDetails>
               
               <Footer>
                   <AddButton onClick={onAddRequest}>
                       <img src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/6f392220-75d7-480c-8866-49c77b338ec3.svg" />
                       <Add> {data.addRequest}</Add>
                    </AddButton>
                     <PageRange>
                        <Pagenator limit={this.props.shareStore.matchingRideLimit} offset={this.props.shareStore.matchingRideOffset}
                        details={this.props.shareStore.matchedRideDetails} onClickRightArrow={this.props.shareStore.onClickRideRightArrow}
                        onClickLeftArrow={this.props.shareStore.onClickRideLeftArrow}
                        total={this.props.shareStore.noOfMatchedRides}
                        pageNumber={this.props.shareStore.pageNumber}
                        />
                    </PageRange> 
                </Footer>
            </Requests>
        );
    }
}
export default MatchingRideDetails;