import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {Header,FromAddress,ToAddress,DateTime,RequestRideStyle,Flexibility,UserFlexibility,Operations,Availability,Counter,PageView,Mandatory,Address,Assets,Heading,Others} from '../AssetTransportRequest/styledComponent'
import DateAndTime from '../../../../Common/DateAndTime'
import data from '../../../../i18n/strings.json'
import InputTag from '../../../../Common/inputTag'
import CheckBox from '../../../../Common/CheckBox'
import CounterPage from '../../../../Common/CounterPage'
import ButtonComponent from '../../../../Common/button/button'
import Select from '../../../../Common/Select'
@observer
class RideRequest extends React.Component{
    @observable listOfAssets
    @observable listOfSensitiveItems
    constructor(props){
        super(props);
        this.listOfAssets=[data.assests.select,data.assests.others,data.assests.parcel,data.assests.bag];
        this.listOfSensitiveItems=[data.sensitivity.sensitive,data.sensitivity.highlySensitive,data.sensitivity.normal];
    }
    render(){
        console.log("asset item",this.props.getRequestStore.selectedAsset)
        const {getRequestStore} =this.props
        return(
        <PageView>
         <RequestRideStyle>
           <Header>{data.assetRequest.assetTransportRequest} </Header>
           <Address>
               <FromAddress>{data.rideRequest.from}</FromAddress>
               <Mandatory>*</Mandatory>
           </Address>
           <InputTag type={data.type.text} placeholder={data.travel.source}  onChangeInput={getRequestStore.onChangeSource} />
           <Address>
               <ToAddress>{data.rideRequest.to}</ToAddress>
               <Mandatory>*</Mandatory>
           </Address>
           <InputTag type={data.type.text} placeholder={data.travel.destination} onChangeInput={getRequestStore.onChangeDestination} />
           {getRequestStore.isChecked==false?<Address>
                <DateTime> {data.rideRequest.dateAndTime}</DateTime>
                <Mandatory>*</Mandatory>
            </Address>:null}
             {getRequestStore.isChecked==false? <DateAndTime onChangeDateAndTime={getRequestStore.onChangeDateAndTime}/>:null}
          <UserFlexibility>
            <CheckBox type={data.type.checkbox} isChecked={getRequestStore.isChecked} onClickCheckBox={getRequestStore.onClickCheckBox}/>
            <Flexibility> {data.rideRequest.flexibleTimings}</Flexibility>
          </UserFlexibility>
          <Operations>
            <Availability>{data.assetRequest.assets}</Availability>
            <Mandatory>*</Mandatory>
            <Counter>
                <CounterPage incrementCounter={getRequestStore.incrementAssetsCount} 
                decrementCounter={getRequestStore.decrementAssetsCount}
                count={getRequestStore.assetsCount}/>
            </Counter>
          </Operations>
          <Assets>
              <Address>
                   <FromAddress>{data.assetRequest.assetType}</FromAddress>
                   <Mandatory>*</Mandatory>
               </Address>
               <Select onSelect={this.props.getRequestStore.onSelectAsset} listOfItems={this.listOfAssets}
              assetTransportRequest ={data.assetRequest.assetTransportRequest}/>
               <div>
                   {this.props.getRequestStore.selectedAsset=="Others"?
                   <Others>
                   <Heading>{data.assetRequest.others}</Heading>
                   <InputTag type={data.type.text} onChangeInput={getRequestStore.onChangeUserValue}/>
                   </Others>:null}
               </div>
               <Address>
                   <Heading>{data.assetRequest.assetSensitivity}</Heading>
                   <Mandatory>*</Mandatory>
               </Address>
               <Select onSelect={this.props.getRequestStore.onSelectSensitivity} listOfItems={this.listOfSensitiveItems}
               assetTransportRequest ={data.assetRequest.assetTransportRequest}/>
               <Others>
               <Address>
                   <Heading>{data.assetRequest.whomToDeliver}</Heading>
                   <Mandatory>*</Mandatory>
               </Address>
                   
                   <InputTag type={data.type.text} placeholder={data.assetRequest.name} onChangeInput={getRequestStore.onChangePersonName}/>
               </Others>
          </Assets>
          
          <ButtonComponent text={data.requestButton} onSubmitForm={getRequestStore.onClickRequest} onEnterKeyPress={getRequestStore.onEnterKeyPress}/> 
         </RequestRideStyle>
        </PageView>
            );
    }
}
export default RideRequest;