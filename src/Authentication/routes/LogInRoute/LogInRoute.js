import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import LogInPage from '../../components/LogInPage';
import { Redirect } from "react-router-dom";
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
    // getSignInPage=()=>{
    //     alert("login again")
    //   return(<Redirect to={{ pathname:"/login/v1/" }}/>)
    //   }
    //   getLetsRidePage=()=>{
    //       alert("lets_ride")
    //       const {history}=this.props;
    //       window.setTimeout(() => {
    //               history.replace('/ride-app/'); 
    //             }, 2000);
    //     // return(<Redirect to={{ pathname:"/ride-app/" }}/>)
    //   }
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
                  window.setTimeout(() => {
                  history.replace('/ride-app/'); 
                }, 2000);
            }
            else{
                 const {history}=this.props;
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
//search(/^[0-9]{1}[0-9]{9}$/) === -1)

///uer login = && this.mobileNumber.search(/^[5-9]{1}[0-9]{9}$/) === 0