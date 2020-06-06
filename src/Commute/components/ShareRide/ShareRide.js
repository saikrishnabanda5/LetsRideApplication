import React from 'react';
import {observer} from 'mobx-react';
import {Header,FromAddress,ToAddress,DateTime,RequestRideStyle,DateStyle,
Flexibility,UserFlexibility,Operations,Availability,Counter,PageView,Mandatory,Address,ErrorMessage,Field,InputField} from '../ShareRide/styledComponents';
import DateAndTime from '../../../Common/DateAndTime';
import data from '../../../i18n/strings.json';
import InputTag from '../../../Common/InputTag';
import CheckBox from '../../../Common/CheckBox';
import CounterPage from '../../../Common/CounterPage';
import ButtonComponent from '../../../Common/ButtonComponent';
@observer
class ShareRide extends React.Component{
    render(){
        const {source,destination,errorMessage,isChecked,seatsAvailable,
        assetsCount,onChangeSource,onChangeDestination,onIncrementAssetsCount,onClickCheckBox,
        onChangeDateAndTime,onChangeFromDate,onChangeToDate,dateAndTime,fromDate,toDate
        ,onDecrementAssetsCount,onIncrementSeatsCount,onDecrementSeatsCount,onSubmitDetails}=this.props;
        return(
        <PageView>
         <RequestRideStyle>
           <Header>{data.rideShare.rideShare} </Header>
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
            {data.rideShare.assetsQuantity}
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
export default ShareRide;