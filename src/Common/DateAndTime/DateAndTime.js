import React from "react";
import Moment from 'react-moment';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import DatePicker from "react-datepicker";
import {DateTimeStyle} from './styledComponent';
import "react-datepicker/dist/react-datepicker.css";
@observer
 class DateAndTime extends React.Component {
   @observable startDate
   constructor(props){
     super(props);
     this.startDate=new Date();
   }
   state = {
     startDate: this.props.onChangeDateAndTime
   };
 
  setStartDate = date => {
    // Moment( new Date()).format("YYYY/dd/MM hh:mm:ss")
    // const dateToFormat = '1976-04-19T12:59-0500';
            <Moment format="YYYY/MM/DD">
            </Moment>; <Moment format="YYYY/MM/DD">
            </Moment>;
 
    this.startDate = date;
    // return this.startDate
  };
 
  render() {
    return (
       <DateTimeStyle>
       
          <DatePicker 
          selected={this.startDate}
          onChange={this.setStartDate}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
          />
          
       </DateTimeStyle>
    );
  }
}
export default DateAndTime;
