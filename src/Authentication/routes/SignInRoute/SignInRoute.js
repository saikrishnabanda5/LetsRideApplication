import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import SignInPage from '../../components/SignInPage';
@inject('authStore')
@observer
class SignInRoute extends React.Component {
    @observable mobileNumber
    @observable password  
    @observable errorMessage
    @observable confirmPassword
    constructor(props){
        super(props);
        this.mobileNumber="";
        this.password="";
        this.confirmPassword="";
        this.errorMessage="";
    }
    onChangeMobileNumber=(event)=>{
        this.mobileNumber=event.target.value;
    }    
    onChangePassword=(event)=>{
        
        this.password=event.target.value;
    }
    onChangeConfirmPassword=(event)=>{
        this.confirmPassword=event.target.value;
    }
    onEnterKeyPress=(event)=>{
        if(event.key==="Enter"){
            this.onClickSignIn();
        }
    }
    onClickSignIn=()=>{
        const {history}=this.props; 
        if(this.password.length>10&&this.mobileNumber.length===10&&this.confirmPassword.length>0&&
        this.password===this.confirmPassword){
            this.errorMessage="";
            this.props.authStore.userSignIn(this.mobileNumber,this.password,this.confirmPassword);         
            history.replace('/login/v1');
        }
        else if(this.mobileNumber.length===0){
            this.errorMessage="Required";
           
        }
        else if(this.password.length==0){
            this.errorMessage="Required";
    
        }
        else if(this.confirmPassword.length==0){
            this.errorMessage="Required";
    
        }
    }
  render() {
      const {getUserSignInAPIStatus}=this.props;
    return (
      <SignInPage
      apiStatus={getUserSignInAPIStatus}
      mobileNumber={this.mobileNumber}
      password={this.password}
      confirmPassword={this.confirmPassword}
      errorMessage={this.errorMessage}
      onChangeMobileNumber={this.onChangeMobileNumber}
      onChangePassword={this.onChangePassword}
      onChangeConfirmPassword={this.onChangeConfirmPassword}
      onClickSignIn={this.onClickSignIn}
      onEnterKeyPress={this.onEnterKeyPress}
      />
    );
  }
}

export default withRouter(SignInRoute);
