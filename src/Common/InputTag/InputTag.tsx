import  React from 'react';
import {observer} from 'mobx-react';
import {Input} from './styledComponents';
type InputTagProps ={
    type: string
    placeholder: string
    onChangeInput: any
    refs: any
    onEnterKeyPress: () => any
    errorMessage: string
    inputValue: string|any
    
}
@observer 
class InputTag extends React.Component<InputTagProps>{
    render(){
    const {type,placeholder,onChangeInput,refs,errorMessage,inputValue,onEnterKeyPress}=this.props;
        return(
            <Input type={type} placeholder={placeholder} inputValue={inputValue}  error={errorMessage} onChange={onChangeInput} onKeyPress={onEnterKeyPress} 
            ref={refs}/> 
             );
    }
}
export default InputTag;