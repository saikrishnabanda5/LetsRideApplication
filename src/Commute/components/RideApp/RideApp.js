import React from 'react';
import {observer,inject} from 'mobx-react';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Header,HeaderPosition,Image,RightComponent,HomeScreen,Screen} from '../RideApp/styledComponent';
import RequestComponent from '../RequestComponent';
import ShareComponent from '../ShareComponent';
import ButtonComponent from '../../../Common/button/button.js';
import data from '../../../i18n/strings.json';
import RideRequest from '../Requests/RideRequest';
import AssetTransportRequest from '../Requests/AssetTransportRequest';
import ShareRide from '../Share/ShareRide';
import ShareTravelInfo from '../Share/ShareTravelInfo';
@inject('requestStore')
@inject('shareStore')
@observer
class RideApp extends React.Component{
    render(){
        const {requestStore,shareStore}=this.props;
        return(
            <div>
            <HeaderPosition>
                <Header>
                  <Image alt="iBhubsLogo" src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/3c68fdcd-f676-4971-b30c-0498c5dc880e.svg"/>
                  <RightComponent>
                      <RequestComponent  getRequestStore={requestStore}/>
                      <ShareComponent  getShareStore={shareStore}/>
                      <HomeScreen> {data.hs}</HomeScreen> 
                  </RightComponent>
                </Header>
            </HeaderPosition>
            <Screen>
            
            {requestStore.selectedValue===data.request.ride?<RideRequest getRequestStore={requestStore}/>:null}
            {requestStore.selectedValue===data.request.assetTransport?<AssetTransportRequest getRequestStore={requestStore}/>:null} 
                
                
             </Screen>
        </div>
        );
    }
}
export default RideApp;

//{this.props.shareStore.selectedValue==="Ride"?<ShareRide getShareStore={this.props.shareStore}/>:null}


// {this.props.requestStore.selectedValue==="REQUEST"?<RideRequest getRequestStore={this.props.requestStore}/>:null}
//                 {this.props.requestStore.selectedValue==="Asset Transport"?<AssetTransportRequest getRequestStore={this.props.requestStore}/>:null} 