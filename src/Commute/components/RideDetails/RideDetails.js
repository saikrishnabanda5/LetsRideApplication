import React from 'react';
import {observer,inject} from 'mobx-react';
import { Pagination } from 'semantic-ui-react';
import LoadingWrapperWithFailure from '../../../Common/components/LoadingWrapperWithFailure';
import data from '../../../i18n/strings.json';
import {Heading,Requests,TypeOfRequest,Button,Tasks,Image,SortAndFilter,NoOfTasks,Header,Details,MyDetails,Add,AddButton,Data} from './styledComponents';
@inject('requestStore')
@observer
class MyRequests extends React.Component{
    
    render(){
        const {rideRequestData,tasks,headings,onAddRequest}=this.props;
        const {getRequestAPIStatus,getRequestAPIError} =this.props.requestStore;
        return(
            <Requests>
               <Tasks> 
                   <NoOfTasks>{tasks} {data.task} </NoOfTasks>
                   <SortAndFilter>
                       <Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/dbb6969d-a0d8-4c04-a6e1-749c29dc399a.svg" />
                       {data.sort}
                       <Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/7b1bfd15-1e70-4d41-a538-5bc0840dc69b.svg" />
                        {data.filter}
                   </SortAndFilter>
               </Tasks>
               <MyDetails>
                   <Details>{headings} </Details>
                    <Data>{rideRequestData} </Data>
                  
               </MyDetails>
               
               <AddButton onClick={onAddRequest}>
                   <img src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/6f392220-75d7-480c-8866-49c77b338ec3.svg" />
                   <Add> {data.addRequest}</Add>
                   <i>ghj </i>
               </AddButton>
               <Pagination
                boundaryRange={0}
                defaultActivePage={1}
                ellipsisItem={null}
                firstItem={null}
                lastItem={null}
                siblingRange={1}
                totalPages={10} />
            </Requests>
        );
    }
}
export default MyRequests;