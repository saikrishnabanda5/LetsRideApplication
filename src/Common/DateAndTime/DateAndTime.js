import React from "react";
import Moment from 'react-moment'
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import DatePicker from "react-datepicker";
import {DateTimeStyle} from './styledComponent'
import "react-datepicker/dist/react-datepicker.css";
@observer
 class DateAndTime extends React.Component {
   @observable startDate
   constructor(props){
     super(props);
     this.startDate=new Date();
   }
  // state = {
  //   startDate: this.props.onChangeDateAndTime
  // };
 
  onChangeDateAndTime = date => {
    // Moment( new Date()).format("YYYY/dd/MM hh:mm:ss")
    // const dateToFormat = '1976-04-19T12:59-0500';
            <Moment format="YYYY/MM/DD">
            1976-04-19T12:59-0500
            </Moment>;
 
    this.startDate = date;
    // return this.startDate
  };
 
  render() {
      console.log("dthn",this.startDate)
    // const {startDate, setStartDate} = useState(new Date());
    return (
       <DateTimeStyle>
      <DatePicker 
      selected={this.startDate}
      onChange={this.props.onChangeDateAndTime}
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
