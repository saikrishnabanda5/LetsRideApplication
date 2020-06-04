import React from 'react';
import {observer} from 'mobx-react';
import data from '../../../i18n/strings.json';
import MatchingResults from '../MatchingResults';
import MyRequestDetails from '../MyRequestDetails';
import SharedDetails from '../SharedDetails';
import {Navigation,HomePage,Results,Request,Details,MainPage} from './styledComponent';
@observer
class MyRequests extends React.Component{
    
    render(){
        const {OnMatchingResults,OnMyRequests,onSharedDetails,matchingResults,myRequests,sharedDetails}=this.props;
        return(
            <MainPage>
                <HomePage>
                   <Results onClick={OnMatchingResults} matchingResults={matchingResults}> Matching Results </Results>
                   <Request onClick={OnMyRequests} myRequests={myRequests}>My Requests </Request>
                   <Details onClick={onSharedDetails} sharedDetails={sharedDetails}>Shared Details</Details>
                </HomePage>
            <Navigation>
                <div>{matchingResults?<MatchingResults />:null}</div>
                {myRequests?<MyRequestDetails onAddRequest={this.props.onAddRequest}/>:null}
                {sharedDetails?<SharedDetails />:null}
            </Navigation>
            </MainPage>
        );
    }
}
export default MyRequests;