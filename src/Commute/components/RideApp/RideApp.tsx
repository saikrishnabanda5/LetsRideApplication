import React from 'react';
import {observer} from 'mobx-react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Header,HeaderPosition,Image,RightComponent,HomeScreen,Screen,HomePage} from '../RideApp/styledComponents';
import RequestComponent from '../RequestComponent';
import ShareComponent from '../ShareComponent';
import data from '../../../i18n/strings.json';
import MyRequestRoute from '../../routes/MyRequestsRoute';
import RequestRideRoute from '../../routes/RequestRideRoute';
import RequestAssetTransportRoute from '../../routes/RequestAssetTransportRoute';
import ShareRideRoute from '../../routes/ShareRideRoute';
import ShareTravelInfoRoute from '../../routes/ShareTravelInfoRoute';

type RideAppProps = {
    selectedRequestValue: string
    selectedValue: string
    homeScreen: boolean
    initialScreen:boolean
    onSelectHomeScreen:()=>void
    onSelectShare:()=>any
    onSelectRequest:()=>any
}

@observer
class RideApp extends React.Component<RideAppProps>{ 
    
    render(){
        
        const {selectedRequestValue,selectedValue,homeScreen,initialScreen,onSelectHomeScreen,onSelectShare,onSelectRequest} = this.props;
        return(
            <div>
            <HeaderPosition>
                <Header>
                  <Image alt="iBhubsLogo" src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/3c68fdcd-f676-4971-b30c-0498c5dc880e.svg"/>
                  <RightComponent>
                      <RequestComponent  onSelectRequest={onSelectRequest} data-testid="custom-element"/>
                      <ShareComponent  onSelectShare={onSelectShare}/>
                      <HomeScreen onClick={onSelectHomeScreen}> {data.hs}</HomeScreen> 
                  </RightComponent>
                </Header>
            </HeaderPosition>
            <Screen>
                    {selectedRequestValue==="Ride"?<RequestRideRoute />: null}
                    {selectedRequestValue===data.request.assetTransport?<RequestAssetTransportRoute />:null}
                    {selectedValue==="Ride"?<ShareRideRoute />:null}
                    {selectedValue==="Travel info"?<ShareTravelInfoRoute />:null}
                    <HomePage>{homeScreen||initialScreen?<MyRequestRoute />:null}</HomePage>
                    
             </Screen>
        </div>
        );
    }
}
export default RideApp;
// {this.props.homeScreen?<MyRequestRoute myScreen={this.myScreen}/>:null}
//<MyRequestRoute myScreen={this.myScreen}/>