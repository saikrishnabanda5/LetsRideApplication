import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import {Header,FromAddress,ToAddress,DateTime,RequestRideStyle,Flexibility,UserFlexibility,DateStyle,
Operations,Availability,Counter,PageView,Mandatory,Address,Assets,Heading,Others,ErrorMessage,Field,InputField} from '../RequestAssetTransport/styledComponents';
import DateAndTime from '../../../Common/DateAndTime';
import data from '../../../i18n/strings.json';
import InputTag from '../../../Common/InputTag';
import CheckBox from '../../../Common/CheckBox';
import CounterPage from '../../../Common/CounterPage';
import ButtonComponent from '../../../Common/ButtonComponent';
import Select from '../../../Common/Select';
@observer
class RequestAssetTransport extends React.Component{
    @observable listOfAssets
    @observable listOfSensitiveItems
    constructor(props){
        super(props);
        this.listOfAssets=[data.assests.select,data.assests.others,data.assests.parcel,data.assests.bag];
        this.listOfSensitiveItems=[data.sensitivity.sensitive,data.sensitivity.highlySensitive,data.sensitivity.normal];
    }
    render(){
        const {source,destination,errorMessage,personDetails,isChecked,assetsCount,
        onChangeDateAndTime,onChangeFromDate,onChangeToDate,dateAndTime,fromDate,toDate,
        onClickCheckBox,onChangeSource,onChangeDestination,onIncrementAssetsCount,selectedAsset,
        onDecrementAssetsCount,onSelectAsset,onSelectSensitivity,onChangeUserValue,
        onChangePersonDetails,onEnterKeyPress,onSubmitDetails}=this.props;
        return(
        <PageView>
         <RequestRideStyle>
           <Header>{data.assetRequest.assetTransportRequest} </Header>
           <Address>
               <FromAddress>{data.rideRequest.from}</FromAddress>
               <Mandatory>*</Mandatory>
           </Address>
           
           <InputField> 
                <Field>
                 <InputTag type={data.type.text} placeholder={data.travel.source}  onChangeInput={onChangeSource}
                  errorMessage={errorMessage} inputValue={source}/>
                </Field>
              <ErrorMessage>{source===""?<div>{errorMessage}</div>:null}</ErrorMessage>
            </InputField>
           
           <Address>
               <ToAddress>{data.rideRequest.to}</ToAddress>
               <Mandatory>*</Mandatory>
           </Address>
           <InputField> 
                <Field>
                 <InputTag type={data.type.text} placeholder={data.travel.destination} onChangeInput={onChangeDestination}
                  errorMessage={errorMessage} inputValue={destination}/>
                </Field>
              <ErrorMessage>{destination===""?<div>{errorMessage}</div>:null}</ErrorMessage>
            </InputField>
           
           {isChecked==false?<div><Address>
                            <DateTime> {data.rideRequest.dateAndTime}</DateTime>
                            <Mandatory>*</Mandatory>
                            </Address>
                <DateAndTime onChangeDateAndTime={onChangeDateAndTime} dateAndTime={dateAndTime} isChecked={isChecked}/> </div>:
                <DateStyle>
                            <div><Address>
                                <DateTime> {data.rideRequest.from}</DateTime>
                                <Mandatory>*</Mandatory>
                            </Address>
                            <DateAndTime onChangeDate={onChangeFromDate} Date={fromDate} isChecked={isChecked}/>
                            </div>
                            <div>
                            <Address>
                                <DateTime> {data.rideRequest.to}</DateTime>
                                <Mandatory>*</Mandatory>
                            </Address>
                            <DateAndTime onChangeDate={onChangeToDate} Date={toDate} isChecked={isChecked}/>
                            </div>
                </DateStyle>
           }
          <UserFlexibility>
            <CheckBox type={data.type.checkbox} isChecked={isChecked} onClickCheckBox={onClickCheckBox}/>
            <Flexibility> {data.rideRequest.flexibleTimings}</Flexibility>
          </UserFlexibility>
          <Operations>
            <Availability>{data.assetRequest.assets}</Availability>
            <Mandatory>*</Mandatory>
            <Counter>
                <CounterPage incrementCounter={onIncrementAssetsCount} 
                decrementCounter={onDecrementAssetsCount}
                count={assetsCount}/>
            </Counter>
          </Operations>
          <Assets>
              <Address>
                   <FromAddress>{data.assetRequest.assetType}</FromAddress>
                   <Mandatory>*</Mandatory>
               </Address>
               <Select onSelect={onSelectAsset} listOfItems={this.listOfAssets}
              assetTransportRequest ={data.assetRequest.assetTransportRequest}/>
               <div>
                   {selectedAsset==="Others"?
                   <Others>
                   <Heading>{data.assetRequest.others}</Heading>
                   <InputTag type={data.type.text} onChangeInput={onChangeUserValue}/>
                   </Others>:null}
               </div>
               <Address>
                   <Heading>{data.assetRequest.assetSensitivity}</Heading>
                   <Mandatory>*</Mandatory>
               </Address>
               <Select onSelect={onSelectSensitivity} listOfItems={this.listOfSensitiveItems}
               assetTransportRequest = {data.assetRequest.assetTransportRequest}/>
               <Others>
               <Address>
                   <Heading>{data.assetRequest.whomToDeliver}</Heading>
                   <Mandatory>*</Mandatory>
               </Address>
                 <InputField> 
                    <Field>
                     <InputTag type={data.type.text} placeholder={data.assetRequest.name} onChangeInput={onChangePersonDetails}
                     errorMessage={errorMessage} inputValue={personDetails} onEnterKeyPress={onEnterKeyPress}/>
                    </Field>
                    <ErrorMessage>{personDetails===""?<div>{errorMessage}</div>:null}</ErrorMessage>
                 </InputField>  
                
               </Others>
          </Assets>
          
          <ButtonComponent text={data.requestButton} onSubmitForm={onSubmitDetails} /> 
         </RequestRideStyle>
        </PageView>
            );
    }
}
export default RequestAssetTransport;