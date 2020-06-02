import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import RideDetails from '../../components/RideDetails';
import data from '../../../i18n/strings.json';
import {Header,Heading,Details,Status} from './styledComponents';
import rideCredentials from '../../fixtures/getRideResponse.json';
@inject('requestStore')
@observer
class RideDetailsRoute extends React.Component{
    @observable tasks
    @observable listOfHeadings
    constructor(props){
        super(props);
        this.tasks = rideCredentials.total_no_of_requests;
        this.listOfHeadings=[data.rideRequest.from,data.rideRequest.to,data.rideRequest.dateAndTime,
        data.rideRequest.people,data.rideRequest.luggageQunatity,data.rideRequest.acceptedDetails,data.rideRequest.status];
    }
     componentDidMount(){
         alert("componentDidMount")
        this.props.requestStore.onClickRide();
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
    rideRequestData=()=>{
      const values = rideCredentials.ride_requests.map((name,index)=>{
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
                    <Status status={name.status}>{name.status}</Status>
              </Details>
            );
        });
      return values;
    }
    render(){
        console.log("RideDetailsRoute",this.props)
        return(
            <RideDetails rideRequestData={this.rideRequestData()} tasks={this.tasks} headings={this.headings()} onAddRequest={this.onAddRequest}/>
        );
    }
}
export default withRouter(RideDetailsRoute);