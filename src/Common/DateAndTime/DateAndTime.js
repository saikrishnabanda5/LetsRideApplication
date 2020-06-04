import React from "react";
import {observer} from 'mobx-react';
import DatePicker from "react-datepicker";
import {DateTimeStyle} from './styledComponent';
import "react-datepicker/dist/react-datepicker.css";
@observer
 class DateAndTime extends React.Component {
  render() {
    return (
        
       <DateTimeStyle>
       {this.props.isChecked===false?
          <DatePicker 
          className="border border-gray-400 outline-none border-gray-500 w-auto pl-1 pr-32 pt-1 pb-1"
          placeholderText={'Select date and time'}
          selected={this.props.dateAndTime}
          onChange={this.props.onChangeDateAndTime}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
          
          />:
          <div>
          <DatePicker 
          className="border border-gray-400 outline-none border-gray-500 w-40 p-1"
          placeholderText={'Select'}
          selected={this.props.Date}
          onChange={this.props.onChangeDate}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"/>
          </div>
       }
       </DateTimeStyle>
    );
  }
}
export default DateAndTime;
