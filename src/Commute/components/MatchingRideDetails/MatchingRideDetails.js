import React from 'react';
import {observer,inject} from 'mobx-react';
import { Pagination } from 'semantic-ui-react';
import {action} from 'mobx';
import FilterLogo from '../../../Common/Icons'
import SimpleMenu from '../material.js';
import Pagenator from '../../../Common/Pagenator';
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure';
import data from '../../../i18n/strings.json';
import {Requests,Tasks,Image,SortAndFilter,NoOfTasks,Details,MyDetails,Add,AddButton,Footer,PageRange} from './styledComponents';
import ShareStore from "../../stores/ShareStore";
import config from "../../../Common/constants/EnviromentConstants";
// import MatchingRideModel from "../../stores/models/MatchingRideModel/index.js";

// interface MatchingRideDetaisProps {
//     headings:()=>any
//     matchingData:Array<MatchingRideModel>
// }

// interface InjectedProps extends MatchingRideDetaisProps {
//     shareStore:ShareStore
// }

@inject('shareStore')
@observer
class MatchingRideDetails extends React.Component{
    // <MatchingRideDetaisProps>
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
    //getInjectedProps = (): InjectedProps => this.props as InjectedProps 
     
    getShareStore = () => {
       // return this.getInjectedProps().shareStore
       return this.props.shareStore
    } 
    render(){
        const {getAPIStatus,getAPIError,noOfMatchedRides,limit,offset,onClickLeftArrow,onClickRightArrow,selectedPage} = this.getShareStore().pagenationstore;
        const {headings,matchingData} = this.props;
        return(
            <Requests>
               <Tasks> 
                  <NoOfTasks>{noOfMatchedRides} {data.task} </NoOfTasks>
                   <SortAndFilter>
                        
                       <Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/dbb6969d-a0d8-4c04-a6e1-749c29dc399a.svg" />
                       {data.sort}
                      {/* <div onClick={filterRide}>*/}
                          <Image> <FilterLogo /> </Image>
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
                        <Pagenator limit={limit} offset={offset}
                        onClickRightArrow={onClickRightArrow}
                        onClickLeftArrow={onClickLeftArrow}
                        total={noOfMatchedRides}
                        pageNumber={selectedPage}
                        details={this.getShareStore().matchedRideDetails}
                        />
                    </PageRange> 
                </Footer>
            </Requests>
        );
    }
}
export default MatchingRideDetails;