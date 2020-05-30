import  React from 'react';
import {Input} from './styledComponent';

class CheckBox extends React.Component{
    render(){
    const {type,isChecked,onClickCheckBox} =this.props;
        return(
            <Input type={type} checked={isChecked} onChange={onClickCheckBox}/> 
             );
    }
}
export default CheckBox;