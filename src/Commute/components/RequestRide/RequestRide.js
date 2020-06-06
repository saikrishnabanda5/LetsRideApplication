import React from 'react';
import {observer,inject} from 'mobx-react';
import {Header,FromAddress,ToAddress,DateTime,RequestRideStyle,DateStyle,
Flexibility,UserFlexibility,Operations,Availability,Counter,PageView,Mandatory,Address,ErrorMessage,Field,InputField} from '../RequestRide/styledComponents';
import DateAndTime from '../../../Common/DateAndTime';
import data from '../../../i18n/strings.json';
import InputTag from '../../../Common/InputTag';
import CheckBox from '../../../Common/CheckBox';
import CounterPage from '../../../Common/CounterPage';
import ButtonComponent from '../../../Common/ButtonComponent';
@inject('requestStore')
@observer
class RequestRide extends React.Component{
    
    render(){
    const {source,destination,errorMessage,isChecked,seatsAvailable,onChangeDateAndTime,dateAndTime,fromDate,
        luggageQuantity,onClickCheckBox,onChangeSource,onChangeDestination,onIncrementLuggageCount,onChangeFromDate
        ,onDecrementLuggageCount,onIncrementSeatsCount,onDecrementSeatsCount,onSubmitDetails,
        onChangeToDate,toDate}=this.props;
        
    return(
        <PageView >
         <RequestRideStyle>
           <Header>{data.rideRequest.rideRequest} </Header>
           <Address>
               <FromAddress>{data.rideRequest.from}</FromAddress>
               <Mandatory>*</Mandatory>
           </Address>
           
            <InputField> 
                <Field>
                  <InputTag type={data.type.text} placeholder={data.travel.source}  onChangeInput={onChangeSource}
                  errorMessage={errorMessage} inputValue={source}/>
                </Field>
              <ErrorMessage>{source==""?<div>{errorMessage}</div>:null}</ErrorMessage>
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
                <ErrorMessage>{dateAndTime===""?<div>{errorMessage}</div>:null}</ErrorMessage>
                </div>:
                
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
                </DateStyle>}
             
          <UserFlexibility>
            <CheckBox type={data.type.checkbox} isChecked={isChecked} onClickCheckBox={onClickCheckBox}/>
            <Flexibility> {data.rideRequest.flexibleTimings}</Flexibility>
          </UserFlexibility>
          <Operations>
            <Availability>{data.rideRequest.seats}</Availability>
            <Mandatory>*</Mandatory>
            <Counter>
                <CounterPage incrementCounter={onIncrementSeatsCount} 
                decrementCounter={onDecrementSeatsCount}
                count={seatsAvailable}/>
            </Counter>
          </Operations>
          <Operations>
            <Availability>
            {data.rideRequest.luggageQunatity}
            </Availability>
             <Mandatory>*</Mandatory>
            <Counter>
                <CounterPage incrementCounter={onIncrementLuggageCount} 
                decrementCounter={onDecrementLuggageCount}
                count={luggageQuantity}/>
            </Counter>
          </Operations>
          <ButtonComponent text={data.requestButton} onSubmitForm={onSubmitDetails}/> 
         </RequestRideStyle>
        </PageView>
        
            );
    }
}
export default RequestRide;