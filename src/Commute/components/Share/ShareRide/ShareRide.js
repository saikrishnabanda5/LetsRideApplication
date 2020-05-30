import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {Header,FromAddress,ToAddress,DateTime,RequestRideStyle,Flexibility,UserFlexibility,Operations,Availability,Counter,PageView,Mandatory,Address} from '../ShareRide/styledComponent'
import DateAndTime from '../../../../Common/DateAndTime'
import data from '../../../../i18n/strings.json'
import InputTag from '../../../../Common/inputTag'
import CheckBox from '../../../../Common/CheckBox'
import CounterPage from '../../../../Common/CounterPage'
import ButtonComponent from '../../../../Common/button/button'
@inject('requestStore')
@observer
class ShareRide extends React.Component{
    onSubmitDetails=()=>{
        const {getShareStore} =this.props;
        getShareStore.onClickRequest(getShareStore.source,getShareStore.destination,getShareStore.startDate,
        getShareStore.isChecked,getShareStore.seatsAvailable,getShareStore.luggageCount);
    }
    render(){
        const {getShareStore} =this.props;
        return(
        <PageView>
         <RequestRideStyle>
           <Header>{data.rideRequest.rideRequest} </Header>
           <Address>
               <FromAddress>{data.rideRequest.from}</FromAddress>
               <Mandatory>*</Mandatory>
           </Address>
           <InputTag type={data.type.text} placeholder={data.travel.source}  onChangeInput={getShareStore.onChangeSource} />
           <Address>
               <ToAddress>{data.rideRequest.to}</ToAddress>
               <Mandatory>*</Mandatory>
           </Address>
           <InputTag type={data.type.text} placeholder={data.travel.destination} onChangeInput={getShareStore.onChangeDestination} />
           {getShareStore.isChecked==false?<Address>
                <DateTime> {data.rideRequest.dateAndTime}</DateTime>
                <Mandatory>*</Mandatory>
            </Address>:null}
             {getShareStore.isChecked==false? <DateAndTime onChangeDateAndTime={getShareStore.onChangeDateAndTime}/>:null}
          <UserFlexibility>
            <CheckBox type={data.type.checkbox} isChecked={getShareStore.isChecked} onClickCheckBox={getShareStore.onClickCheckBox}/>
            <Flexibility> {data.rideRequest.flexibleTimings}</Flexibility>
          </UserFlexibility>
          <Operations>
            <Availability>{data.rideRequest.seats}</Availability>
            <Mandatory>*</Mandatory>
            <Counter>
                <CounterPage incrementCounter={getShareStore.incrementCounter} 
                decrementCounter={getShareStore.decrementCounter}
                count={getShareStore.seatsAvailable}/>
            </Counter>
          </Operations>
          <Operations>
            <Availability>
            {data.rideRequest.luggageQunatity}
            </Availability>
             <Mandatory>*</Mandatory>
            <Counter>
                <CounterPage incrementCounter={getShareStore.incrementLuggageCounter} 
                decrementCounter={getShareStore.decrementLuggageCounter}
                count={getShareStore.luggageCount}/>
            </Counter>
          </Operations>
          <ButtonComponent text={data.requestButton} onSubmitForm={this.onSubmitDetails}/> 
         </RequestRideStyle>
        </PageView>
            );
    }
}
export default ShareRide;