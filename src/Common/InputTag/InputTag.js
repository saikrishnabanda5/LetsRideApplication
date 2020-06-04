import  React from 'react';
import {observer} from 'mobx-react';
import {Input} from './styledComponent';
@observer 
class InputTag extends React.Component{
    render(){
    const {type,placeholder,onChangeInput,refs,errorMessage,inputValue,onEnterKeyPress}=this.props;
        return(
            <Input type={type} placeholder={placeholder} inputValue={inputValue} onKeyPress={onEnterKeyPress} error={errorMessage} onChange={onChangeInput} ref={refs}/> 
             );
    }
}
export default InputTag;