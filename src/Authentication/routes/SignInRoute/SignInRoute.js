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
    @observable error
    constructor(props){
        super(props);
        this.mobileNumber="";
        this.password="";
        this.confirmPassword="";
        this.errorMessage="";
        this.error = "";
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
            this.onClickSignUp();
        }
    }
    onClickLogIn=()=>{
      const {history}=this.props;
      history.replace('/login/v1');
    }
    onClickSignUp=()=>{
        const {history}=this.props; 
        console.log(this.password,this.mobileNumber,this.confirmPassword);
        if(this.password.length>0&&this.mobileNumber.length===10&&this.confirmPassword.length>0
        &&this.password===this.confirmPassword){
             console.log(this.password,this.confirmPassword)
            this.errorMessage="";
            // this.props.authStore.userSignIn(this.mobileNumber,this.password,this.confirmPassword);         
            history.replace('/login/v1');
        }
        else if(this.password!==this.confirmPassword){
            console.log("no match",this.password,this.confirmPassword)
            this.error="Password didn't match";
        }
        else if(this.mobileNumber.length===0||this.password.length==0||this.confirmPassword.length==0){
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
      onClickLogIn={this.onClickLogIn}
      onEnterKeyPress={this.onEnterKeyPress}
      onClickSignUp={this.onClickSignUp}
      error={this.error}
      />
    );
  }
}

export default withRouter(SignInRoute);
