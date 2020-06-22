import React from 'react';
import {observer,inject} from 'mobx-react';
import {action,computed} from 'mobx';
import {getLoadingStatus} from '@ib/api-utils';
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure';
import data from '../../../i18n/strings.json';
import Pagenator from '../../../Common/Pagenator';
import {Requests,Tasks,Image,SortAndFilter,NoOfTasks,Details,MyDetails,Add,AddButton,Footer,PageRange} from './styledComponents';
@inject('requestStore')
@observer
class AssetDetails extends React.Component{
    componentDidMount(){
        this.doNetworkCalls();
     }
     @action.bound
     doNetworkCalls(){
         this.props.requestStore.onMyAssetRequests();
     }
    
    renderMyAssetRequests=observer(()=>{
        return this.props.assetRequestData;
    })
    @computed
    get getBothAPIStatus(){
         const {getMyRideRequestAPIStatus,getAssetAPIStatus}= this.props.requestStore;
        return getLoadingStatus(getMyRideRequestAPIStatus,getAssetAPIStatus);
    }
    render(){
        const {getAssetAPIStatus,getAssetAPIError,noOfAssetRequests} = this.props.requestStore;
        const {getMyRideRequestAPIStatus} = this.props.requestStore;
        const {assetHeadings,noOfAssetTasks,onAddRequest} = this.props;
        return(
            <Requests>
            
              <Tasks> 
                  <NoOfTasks>{noOfAssetRequests} {data.task} </NoOfTasks>
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
                        apiStatus={this.getBothAPIStatus}
                        apiError={getAssetAPIError}
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
                        <Pagenator limit={this.props.requestStore.assetLimit} offset={this.props.requestStore.assetOffset}
                        details={this.props.requestStore.assetDetails} onClickRightArrow={this.props.requestStore.onClickAssetRightArrow}
                        onClickLeftArrow={this.props.requestStore.onClickAssetLeftArrow}
                        total={this.props.requestStore.noOfAssetRequests}
                        pageNumber={this.props.requestStore.pageNumber}
                        />
                    </PageRange> 
                </Footer>
            </Requests>
        );
    }
}
export default AssetDetails;