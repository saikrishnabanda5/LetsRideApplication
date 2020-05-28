import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {Header,FromAddress,ToAddress,DateTime,RequestRideStyle,Flexibility,UserFlexibility,Operations,Availability,Counter,PageView,Mandatory,Address} from '../RideRequest/styledComponent'
import DateAndTime from '../../../../Common/DateAndTime'
import data from '../../../../i18n/strings.json'
import InputTag from '../../../../Common/inputTag'
import CheckBox from '../../../../Common/CheckBox'
import CounterPage from '../../../../Common/CounterPage'
import ButtonComponent from '../../../../Common/button/button'
@inject('requestStore')
@observer
class RideRequest extends React.Component{
    
    onSubmitDetails=()=>{
        const {getRequestStore} =this.props;
        getRequestStore.onClickRequest(getRequestStore.source,getRequestStore.destination,getRequestStore.startDate,
        getRequestStore.isChecked,getRequestStore.seatsAvailable,getRequestStore.luggageCount)
    }
    render(){
        const {getRequestStore} =this.props
        return(
        <PageView>
         <RequestRideStyle>
           <Header>{data.rideRequest.rideRequest} </Header>
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
            <Availability>{data.rideRequest.seats}</Availability>
            <Mandatory>*</Mandatory>
            <Counter>
                <CounterPage incrementCounter={getRequestStore.incrementCounter} 
                decrementCounter={getRequestStore.decrementCounter}
                count={getRequestStore.seatsAvailable}/>
            </Counter>
          </Operations>
          <Operations>
            <Availability>
            {data.rideRequest.luggageQunatity}
            </Availability>
             <Mandatory>*</Mandatory>
            <Counter>
                <CounterPage incrementCounter={getRequestStore.incrementLuggageCounter} 
                decrementCounter={getRequestStore.decrementLuggageCounter}
                count={getRequestStore.luggageCount}/>
            </Counter>
          </Operations>
          <ButtonComponent text={data.requestButton} onSubmitForm={this.onSubmitDetails}/> 
         </RequestRideStyle>
        </PageView>
            );
    }
}
export default RideRequest;