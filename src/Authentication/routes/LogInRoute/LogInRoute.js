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
    @observable text
    constructor(props){
        super(props);
        this.mobileNumber="";
        this.password="";
        this.errorMessage="";
        this.isValid = false;
        this.status = null;
        this.text = "Button";
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
    onClickLogIn= async ()=>{
        const {history}=this.props;
        if(this.password.length>0&&this.mobileNumber.length>0 ){
            this.errorMessage="";
            this.isValid = true;
            
            const apiRequest={
              mobile_number: this.mobileNumber,
              password: this.password
            };
             await this.props.authStore.userLogIn(apiRequest);
             if(this.props.authStore.accessToken){
                const {history}=this.props;
                this.status = true
                  window.setTimeout(() => {
                  history.replace('/ride-app/'); 
                }, 3000);
            }
            else{
                 const {history}=this.props;
                 this.text = "Retry";
                 this.status = false;
                history.replace('/login/v1/'); 
            }
            
        }
        else if(this.mobileNumber.length===0 || this.mobileNumber.length==0){
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
    

  render(){
    return (
      <LogInPage
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
          text = {this.text}
      />
    );
  }
}

export default withRouter(LogInRoute);