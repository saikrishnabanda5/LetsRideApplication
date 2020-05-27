import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import SignInPage from '../../components/SignInPage';
@inject('authStore')
@observer
class SignInRoute extends React.Component {
    @observable username
    @observable password  
    @observable errorMessage
    @observable confirmPassword
    // signInFormRef = React.createRef()
    constructor(props){
        super(props);
        this.username="";
        this.password="";
        this.confirmPassword=""
        this.errorMessage="";
    }
    onChangeUsername=(event)=>{
        this.username=event.target.value;
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
        if(this.password.length>0&&this.username.length>0&&this.confirmPassword.length>0&&
        this.password===this.confirmPassword){
            this.errorMessage=null;
            console.log(this.props.authStore)
            this.props.authStore.userSignIn(this.username,this.password,this.confirmPassword);         
            // history.replace('/userpage');
        }
        else if(this.username.length==0){
            this.errorMessage="Please enter username";
        }
        else if(this.password.length==0){
            this.errorMessage="Please enter password";
        }
        else if(this.confirmPassword.length==0){
            this.errorMessage="Please confirm password";
        }
        else if(this.password!==this.confirmPassword){
            this.errorMessage="Password didnot match";
        }
    }
  render() {
      const {getUserSignInAPIStatus}=this.props;
    return (
      <SignInPage
      apiStatus={getUserSignInAPIStatus}
      username={this.username}
      password={this.password}
      confirmPassword={this.confirmPassword}
      errorMessage={this.errorMessage}
      onChangeUsername={this.onChangeUsername}
      onChangePassword={this.onChangePassword}
      onChangeConfirmPassword={this.onChangeConfirmPassword}
      onClickSignIn={this.onClickSignIn}
      onEnterKeyPress={this.onEnterKeyPress}
      />
    );
  }
}

export default withRouter(SignInRoute);
//ref ={this.signInFormRef}


// this.password.length==0&&this.username.length==0&&this.confirmPassword.length==0||
//         this.password===this.confirmPassword