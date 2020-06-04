import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import LogInPage from '../../components/LogInPage';
@inject('authStore')
@observer
class LogInRoute extends React.Component {
    @observable mobileNumber
    @observable password 
    @observable errorMessage
    @observable isValid
    @observable status
    constructor(props){
        super(props);
        this.mobileNumber="";
        this.password="";
        this.errorMessage="";
        this.isValid = false;
        this.status = null;
    }
    onChangeMobileNumber=(event)=>{
        this.mobileNumber=event.target.value;
    }    
    onChangePassword=(event)=>{
        this.password=event.target.value;
    }
    onEnterKeyPress=(event)=>{
        if(event.key==="Enter"){
            this.onClickLogIn();
        }
    }
    onClickLogIn=()=>{
        const {history}=this.props;
        if(this.password.length>0&&this.mobileNumber.length===10 && this.mobileNumber.search(/^[6-9]{1}[0-9]{9}$/) === 0){
            this.errorMessage="";
            this.isValid = true;
            
            const apiRequest={
              mobile_number: this.mobileNumber,
              password: this.password
            };
            
            this.props.authStore.userLogIn(apiRequest);
            if(this.props.authStore.accessToken){
                window.setTimeout(() => {
                  history.replace('/ride-app/'); 
                }, 2000);
            }
            if(this.props.authStore.getUserLogInAPIStatus===400){
                this.status=this.props.authStore.getUserLogInAPIStatus;
            }
        }
        else if(this.mobileNumber.length===0 || this.mobileNumber.search(/^[6-9]{1}[0-9]{9}$/) === -1){
            this.errorMessage="Required";
        }
        else if(this.password.length==0){
            this.errorMessage="Required";
        }
    }
    onClickSignUp=()=>{
        const {history}=this.props;
        history.replace('/signup/v1');
    }
  render() {
      console.log("token",this.props.authStore.accessToken);
      const {getUserSignInAPIStatus}=this.props;
    return (
      <LogInPage
          apiStatus={getUserSignInAPIStatus}
          mobileNumber={this.mobileNumber}
          password={this.password}
          errorMessage={this.errorMessage}
          onChangeMobileNumber={this.onChangeMobileNumber}
          onChangePassword={this.onChangePassword}
          onClickLogIn={this.onClickLogIn}
          onClickSignUp={this.onClickSignUp}
          onEnterKeyPress={this.onEnterKeyPress}
          status={this.status}
          isValid ={this.isValid}
      />
    );
  }
}

export default withRouter(LogInRoute);