import  React from 'react';
import {observer} from 'mobx-react';
import {Input} from './styledComponents';
import { observable } from "mobx";
type ValidationInputProps ={
    type: string
    placeholder: string
    ValidationInput:Function
}
@observer 
class Validation extends React.Component<ValidationInputProps>{
    @observable textInput:string
    @observable shouldShowError :{
        errorMessage:string
        showError:boolean
    }
    constructor(props){
        super(props)
        this.textInput=''
        this.shouldShowError={
            errorMessage:"",
            showError:false
        }
    }
    onChangeInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
        this.textInput  = event.target.value
    }
    onBlurInput=(event)=>{
        this.shouldShowError = this.props.ValidationInput(this.textInput)
        console.log(this.shouldShowError,this.shouldShowError)
    }
    render(){``
    const {type,placeholder}=this.props;
        return(<div>
            <Input type={type} placeholder={placeholder} inputValue={this.textInput}   error = {this.shouldShowError.errorMessage} onBlur={this.onBlurInput} onChange={this.onChangeInput} /> 
             <div>{this.shouldShowError.showError===false?<div>{this.shouldShowError.errorMessage}</div>:null}</div>
             </div>
             );
    }
}
export default Validation;

// /text input , shouldShowError,errorMessage