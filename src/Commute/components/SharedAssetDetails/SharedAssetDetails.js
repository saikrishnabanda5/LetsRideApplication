import React from 'react';
import {observer,inject} from 'mobx-react';
// import { Pagination } from 'semantic-ui-react';
import {action} from 'mobx';
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure';
import data from '../../../i18n/strings.json';
import {Requests,Tasks,Image,SortAndFilter,NoOfTasks,Details,MyDetails,Add,AddButton,Footer,PageRange} from './styledComponents';
@inject('requestStore')
@observer
class SharedAssetDetails extends React.Component{
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
    
    render(){
        const {getAssetAPIStatus,getAssetAPIError} = this.props.requestStore;
        const {assetHeadings,noOfAssetTasks,onAddRequest} = this.props;
        return(
            <Requests>
            
              <Tasks> 
                  <NoOfTasks>{noOfAssetTasks} {data.task} </NoOfTasks>
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
                        apiStatus={getAssetAPIStatus}
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
                    <PageRange>PAGE 1 OF 5 </PageRange>
                    <div
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
export default SharedAssetDetails;