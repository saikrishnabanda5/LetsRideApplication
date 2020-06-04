import React from 'react';
import {observer} from 'mobx-react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Header,HeaderPosition,Image,RightComponent,HomeScreen,Screen} from '../RideApp/styledComponent';
import RequestComponent from '../RequestComponent';
import ShareComponent from '../ShareComponent';
import data from '../../../i18n/strings.json';
import MyRequestRoute from '../../routes/MyRequestsRoute';
import RequestRideRoute from '../../routes/RequestRideRoute';
import RequestAssetTransportRoute from '../../routes/RequestAssetTransportRoute';
import ShareRideRoute from '../../routes/ShareRideRoute';
import ShareTravelInfoRoute from '../../routes/ShareTravelInfoRoute';
@observer
class RideApp extends React.Component{
    render(){
        console.log("request",this.props.selectedRequestValue,"share",this.props.selectedValue);
        return(
            <div>
            <HeaderPosition>
                <Header>
                  <Image alt="iBhubsLogo" src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/3c68fdcd-f676-4971-b30c-0498c5dc880e.svg"/>
                  <RightComponent>
                      <RequestComponent  onSelectRequest={this.props.onSelectRequest} />
                      <ShareComponent  onSelectShare={this.props.onSelectShare}/>
                      <HomeScreen onClick={this.props.onSelectHomeScreen}> {data.hs}</HomeScreen> 
                  </RightComponent>
                </Header>
            </HeaderPosition>
            <Screen>
                    {this.props.selectedRequestValue==="Ride"?<RequestRideRoute />: null}
                    {this.props.selectedRequestValue===data.request.assetTransport?<RequestAssetTransportRoute />:null}
                    {this.props.selectedValue==="Ride"?<ShareRideRoute />:null}
                    {this.props.selectedValue==="Travel info"?<ShareTravelInfoRoute />:null}
                    <MyRequestRoute myScreen={this.myScreen}/>
                    
             </Screen>
        </div>
        );
    }
}
export default RideApp;
// {this.props.homeScreen?<MyRequestRoute myScreen={this.myScreen}/>:null}