import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import AssetDetails from '../../components/AssetDetails';
import data from '../../../i18n/strings.json';
import {Header,Heading,Details} from './styledComponents';
import assetCredentials from '../../fixtures/getAssetResponse.json';
@observer
class AssetDetailsRoute extends React.Component{
    @observable tasks
    @observable listOfHeadings
    constructor(props){
        super(props);
        this.tasks = assetCredentials.total_no_of_requests;
        this.listOfHeadings=[data.assetRequest.from,data.assetRequest.to,data.assetRequest.dateAndTime,
        data.assetRequest.assets,data.assetRequest.assetType,data.assetRequest.assetSensitivity,
        data.assetRequest.whomToDeliver,data.assetRequest.acceptedDetails,data.assetRequest.status];
    }
    headings=()=>{
        const values =this.listOfHeadings.map ((name)=>{
            return ( <Header> {name}</Header>);
        });
        return values;
    }
    onAddRequest=()=>{
      const {history}=this.props;
      history.replace('/ride-app/request-ride/');
    }
    assetRequestData=()=>{
      const values = assetCredentials.asset_requests.map((name,index)=>{
            return ( 
              <Details >
                    <Heading> {name.source}</Heading>
                    <Header> {name.destination}</Header>
                    <Heading> {name.from_datetime}</Heading>
                    <Header>{name.no_of_seats}</Header>
                    <Header>{name.luggage_quantity}</Header>
                    <div>
                    <Header>{name.accepted_person.mobile_number}</Header>
                    <Header>{name.accepted_person.user_name}   </Header>
                    </div>
                    <Header>{name.status}</Header>
              </Details>
            );
        });
      return values;
    }
    render(){
        alert("asset route")
        return(
            <AssetDetails assetRequestData={this.assetRequestData()} tasks={this.tasks} headings={this.headings()} onAddRequest={this.onAddRequest}/>
        );
    }
}
export default withRouter(AssetDetailsRoute);