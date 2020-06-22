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
        const {getAPIStatus,getAPIError,noOfMatchedRides,limit,offset,onClickLeftArrow,onClickRightArrow,selectedPage} = this.props.shareStore.pagenationstore;
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
                        apiStatus={getAPIStatus}
                        apiError={getAPIError}
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
                        <Pagenator limit={limit} offset={offset}
                        details={this.props.shareStore.matchedRideDetails} onClickRightArrow={onClickRightArrow}
                        onClickLeftArrow={onClickLeftArrow}
                        total={noOfMatchedRides}
                        pageNumber={selectedPage}
                        />
                    </PageRange> 
                </Footer>
            </Requests>
        );
    }
}
export default MatchingRideDetails;