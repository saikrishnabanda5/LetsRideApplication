import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import SignInPage from '../../components/SignInPage';
import AuthStore from '../../stores/AuthStore'
type SignInRouteProps={
    authStore: AuthStore
    history: {
        replace(url: string): void;
    }
}

@inject('authStore')
@observer
class SignInRoute extends React.Component<SignInRouteProps> {
    @observable mobileNumber: string | any
    @observable password: string 
    @observable errorMessage: string
    @observable confirmPassword: string 
    @observable error: string
    constructor(props: Readonly<SignInRouteProps>){
        super(props);
        this.mobileNumber="";
        this.password="";
        this.confirmPassword="";
        this.errorMessage="";
        this.error = "";
    }
    onChangeMobileNumber=(event: React.ChangeEvent<HTMLInputElement>)=>{
        this.mobileNumber=event.target.value;
    }    
    onChangePassword=(event: React.ChangeEvent<HTMLInputElement>)=>{
        this.password=event.target.value;
    }
    onChangeConfirmPassword=(event: React.ChangeEvent<HTMLInputElement>)=>{
        this.confirmPassword=event.target.value;
    }
    onEnterKeyPress=(event: KeyboardEvent)=>{
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
      
    return (
      <SignInPage
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
