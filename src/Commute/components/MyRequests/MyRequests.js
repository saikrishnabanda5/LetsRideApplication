import React from 'react';
import {observer} from 'mobx-react';
import data from '../../../i18n/strings.json';
import MatchingResults from '../MatchingResults';
import MyRequestDetails from '../MyRequestDetails';
// import SharedDetails from '../SharedDetails';
import {Navigation,HomePage,Results,Request,Details,MainPage} from './styledComponent';

// interface MyRequestsProps{
//     OnMatchingResults:()=>void
//     OnMyRequests:()=>void
//     onSharedDetails:()=>void
//     matchingResults:boolean 
//     myRequests:boolean
//     sharedDetails:boolean
//     onAddRequest:()=>void
//     onAddRideRequest:()=>void
// }
@observer
class MyRequests extends React.Component{
    //<MyRequestsProps>
    
      render(){
        const {OnMatchingResults,OnMyRequests,onSharedDetails,matchingResults,myRequests,sharedDetails,onAddRequest,onAddRideRequest}=this.props;
        return(
            <MainPage>
                <HomePage>
                   <Results matchingResults= {matchingResults} onClick={OnMatchingResults}> Matching Results </Results>
                    <Request myRequests={myRequests} onClick={OnMyRequests} >My Requests </Request>
                   <Details sharedDetails={sharedDetails} onClick={onSharedDetails} >Shared Details</Details>
                </HomePage>
            <Navigation>
                <div>{matchingResults?<MatchingResults  />:null}</div>
                {myRequests?<MyRequestDetails onAddRideRequest={onAddRideRequest}/>:null}
                {/*{sharedDetails?<SharedDetails onAddRequest={this.props.onAddRequest}/>:null}*/}
            </Navigation>
            </MainPage>
        );

    }
}
export default MyRequests;