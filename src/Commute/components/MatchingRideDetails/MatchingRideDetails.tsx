import React from 'react';
import {observer,inject} from 'mobx-react';
import { Pagination } from 'semantic-ui-react';
import {action} from 'mobx';
import FilterLogo from '../../../Common/Icons'
import SimpleMenu from '../material.js';
import Pagenator from '../../../Common/Pagenator';
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure';
import data from '../../../i18n/strings.json';
import {Requests,Filter,Tasks,Image,SortAndFilter,NoOfTasks,Details,MyDetails,Add,AddButton,Footer,PageRange} from './styledComponents';
import ShareStore from "../../stores/ShareStore";
import MatchingRideModel from "../../stores/models/MatchingRideModel/index.js";

interface MatchingRideDetaisProps {
    headings:Array<object>
    matchingData:Array<MatchingRideModel>
}

interface InjectedProps extends MatchingRideDetaisProps {
    shareStore:ShareStore
}

@inject('shareStore')
@observer
class MatchingRideDetails extends React.Component<MatchingRideDetaisProps>{
    componentDidMount(){
        this.doNetworkCalls();
     }
     @action.bound
     doNetworkCalls(){
         this.getShareStore().onMatchingRides();
     }
    
    renderMatchingData=observer(()=>{
        const {matchingData} = this.props;
        return <div>{matchingData}</div>; 
    })
    getInjectedProps = (): InjectedProps => this.props as InjectedProps 
     
    getShareStore = () => {
       return this.getInjectedProps().shareStore
    } 
    render(){
        const {getAPIStatus,getAPIError,noOfMatchedRides,limit,onClickLeftArrow,onClickRightArrow,selectedPage} = this.getShareStore().pagenationstore;
        const {headings} = this.props;
        return(
            <Requests>
               <Tasks> 
                  <NoOfTasks>{noOfMatchedRides} {data.task} </NoOfTasks>
                   <SortAndFilter>
                       <Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/dbb6969d-a0d8-4c04-a6e1-749c29dc399a.svg" />
                       {data.sort}
                       
                      {/* <div onClick={filterRide}>*/}
                        <Filter> {<FilterLogo /> } </Filter>
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
                     <PageRange>
                        <Pagenator limit={limit}
                        onClickLeftArrow={onClickLeftArrow}
                        onClickRightArrow={onClickRightArrow}
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