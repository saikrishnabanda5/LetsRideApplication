import React from 'react';
import {observer,inject} from 'mobx-react';
import {action} from 'mobx';
import Pagenator from '../../../Common/Pagenator';
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure';
import data from '../../../i18n/strings.json';
import {Requests,Tasks,Image,SortAndFilter,NoOfTasks,Details,MyDetails,Add,AddButton,Footer,PageRange} from './styledComponents';
@inject('shareStore')
@observer
class MatchingAssetDetails extends React.Component{
    componentDidMount(){
        this.doNetworkCalls();
     }
     @action.bound
     doNetworkCalls(){
         this.props.shareStore.onMatchingAssets();
     }
    
    renderMyAssetRequests=observer(()=>{
        return this.props.matchingAssetData;
    })
    
    render(){
        const {getMatchingAssetAPIStatus,getMatchingAssetAPIError,noOfMatchedAssets} = this.props.shareStore;
        const {assetHeadings,noOfAssetTasks,onAddRequest} = this.props;
        return(
            <Requests>
            
              <Tasks> 
                  <NoOfTasks>{noOfMatchedAssets} {data.task} </NoOfTasks>
                  <SortAndFilter>
                      <Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/dbb6969d-a0d8-4c04-a6e1-749c29dc399a.svg" />
                      {data.sort}
                      <Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/7b1bfd15-1e70-4d41-a538-5bc0840dc69b.svg" />
                        {data.filter}
                  </SortAndFilter>
              </Tasks>
              <MyDetails>
                  <Details>{assetHeadings} </Details>
                    <LoadingWrapperWithFailure
                        apiStatus={getMatchingAssetAPIStatus}
                        apiError={getMatchingAssetAPIError}
                        onRetryClick={this.doNetworkCalls}
                        renderSuccessUI={this.renderMyAssetRequests}
                    /> 
              </MyDetails>
              
               
              <Footer>
                  <AddButton onClick={onAddRequest}>
                      <img src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/6f392220-75d7-480c-8866-49c77b338ec3.svg" />
                      <Add> {data.addRequest}</Add>
                    </AddButton>
                    <PageRange>
                        <Pagenator limit={this.props.shareStore.matchingRideLimit} offset={this.props.shareStore.matchingRideOffset}
                        details={this.props.shareStore.matchedRideDetails} onClickRightArrow={this.props.shareStore.onClickAssetRightArrow}
                        onClickLeftArrow={this.props.shareStore.onClickAssetLeftArrow}
                        total={this.props.shareStore.noOfMatchedRides}
                        pageNumber={this.props.shareStore.pageNumber}
                     />
                    </PageRange> 
                </Footer>
            </Requests>
        );
    }
}
export default MatchingAssetDetails;

