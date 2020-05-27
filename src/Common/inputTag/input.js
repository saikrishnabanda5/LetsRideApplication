import  React from 'react';
import {Input} from './styledComponent';

class InputTag extends React.Component{
    render(){
        console.log(this.props)
    const {type,placeholder,onChangeInput,refs} =this.props;
        return(
           
            <Input type={type} placeholder={placeholder} onChange={onChangeInput} ref={refs}/> 
             );
    }
}
export default InputTag;