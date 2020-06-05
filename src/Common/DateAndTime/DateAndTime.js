import React,{useState} from "react";
import {observer} from 'mobx-react';
import DatePicker from "react-datepicker";
import {DateTimeStyle} from './styledComponent';
import "react-datepicker/dist/react-datepicker.css";
function DateAndTime(props){
 
   const [startDate, setStartDate] = useState(null);
    return (
       <DateTimeStyle>
       {props.isChecked===false?
          <DatePicker 
           className="border border-gray-400 outline-none border-gray-500 w-auto pl-1 pr-32 pt-1 pb-1"
           placeholderText={'Select date and time'}
           selected={startDate}
           onChange={date=>{
            setStartDate(date);
            props.onChangeDateAndTime(date);
           }}
           showTimeSelect
           timeIntervals={15}
           timeCaption="time"
           dateFormat="yyyy-mm-dd HH:mm:ss" />:
          <div>
          <DatePicker 
           className="border border-gray-400 outline-none border-gray-500 w-40 p-1"
           placeholderText={'Select'}
           selected={startDate}
           onChange={date=>{
            setStartDate(date);
            props.onChangeDate(date);
           }}
           showTimeSelect
           timeFormat="HH:mm:ss"
           timeIntervals={15}
           timeCaption="time"
           dateFormat="yyyy-mm-dd HH:mm:ss"/>
          </div>
       }
       </DateTimeStyle>
    );
  }
export default DateAndTime;
//timeFormat="HH:mm:ss"