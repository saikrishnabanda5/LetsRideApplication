import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx'
import {Header,FromAddress,ToAddress,DateTime,RequestRideStyle,Flexibility,UserFlexibility,DateStyle,
Operations,Availability,Counter,PageView,Mandatory,Address,
Assets,Heading,Others,ErrorMessage,Field,InputField} from '../ShareTravelInfo/styledComponent';
import DateAndTime from '../../../Common/DateAndTime'
import data from '../../../i18n/strings.json'
import InputTag from '../../../Common/InputTag'
import CheckBox from '../../../Common/CheckBox'
import CounterPage from '../../../Common/CounterPage'
import ButtonComponent from '../../../Common/ButtonComponent';
import Select from '../../../Common/Select';
@inject('shareStore')
@observer
class ShareTravelInfo extends React.Component{
    @observable listOfMediums
    constructor(props){
        super(props);
        this.listOfMediums=[data.medium.bus,data.medium.car,data.medium.flight];
    }
    render(){
        const {source,destination,errorMessage,isChecked,onClickCheckBox,onSubmitDetails,
        assetsCount,onChangeSource,onChangeDestination,onIncrementAssetsCount,onSelectMedium,
        onChangeDateAndTime,onChangeFromDate,onChangeToDate,dateAndTime,fromDate,toDate
        ,onDecrementAssetsCount}=this.props;
        return(
        <PageView>
         <RequestRideStyle>
           <Header>{data.shareTravel.shareTravel} </Header>
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
                <DateAndTime onChangeDateAndTime={onChangeDateAndTime} dateAndTime={dateAndTime} isChecked={isChecked}/> 
                <ErrorMessage>{dateAndTime===null?<div>{errorMessage}</div>:null}</ErrorMessage></div>:
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
          
               <Address>
                   <Heading>{data.shareTravel.medium}</Heading>
                   <Mandatory>*</Mandatory>
               </Address>
               <Select onSelect={onSelectMedium} listOfItems={this.listOfMediums}
               assetTransportRequest ={data.assetRequest.assetTransportRequest}/>
          
          <Operations>
            <Availability>
            {data.shareTravel.assetsQuantity}
            </Availability>
             <Mandatory>*</Mandatory>
            <Counter>
                <CounterPage incrementCounter={onIncrementAssetsCount} 
                decrementCounter={onDecrementAssetsCount}
                count={assetsCount}/>
            </Counter>
          </Operations>
          <ButtonComponent text={data.shareButton} onSubmitForm={onSubmitDetails}/> 
         </RequestRideStyle>
        </PageView>
            );
    }
}
export default ShareTravelInfo;