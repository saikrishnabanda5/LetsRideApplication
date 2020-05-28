import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {Header,HeaderPosition,Image,RightComponent,HomeScreen,Screen} from '../RideApp/styledComponent'
import RequestComponent from '../RequestComponent'
import ShareComponent from '../ShareComponent';
import ButtonComponent from '../../../Common/button/button.js'
import data from '../../../i18n/strings.json'
import RideRequest from '../Requests/RideRequest'
import AssetTransportRequest from '../Requests/AssetTransportRequest'
@inject('requestStore')
@observer
class RideApp extends React.Component{

    render(){
        return(
            <div>
            <HeaderPosition>
                <Header>
                  <Image alt="iBhubsLogo" src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/3c68fdcd-f676-4971-b30c-0498c5dc880e.svg"/>
                  <RightComponent>
                      <RequestComponent  getRequestStore={this.props.requestStore}/>
                      <ShareComponent  getRequestStore={this.props.requestStore}/>
                      <HomeScreen> {data.hs}</HomeScreen> 
                  </RightComponent>
                </Header>
            </HeaderPosition>
            <Screen>
                {this.props.requestStore.selectedValue=="Ride"?<RideRequest getRequestStore={this.props.requestStore}/>:
                <AssetTransportRequest getRequestStore={this.props.requestStore} />} 
             </Screen>
        </div>
        );
    }
}
export default RideApp;

