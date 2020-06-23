import React from "react";
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {withRouter} from "react-router-dom";
import LogInPage from '../../components/LogInPage';
import AuthStore from '../../stores/AuthStore'
    type Props={
        authStore: AuthStore
        history: {
            replace(url: string): void;
        }
    }

@inject('authStore')
@observer
class LogInRoute extends React.Component<Props>{
    @observable mobileNumber:string
    @observable password:string   
    @observable errorMessage: string
    @observable isValid: boolean
    @observable status: boolean | null
    @observable text: string
    constructor(props: Readonly<Props>){
        super(props);
        this.mobileNumber="";
        this.password="";
        this.errorMessage="";
        this.isValid = false;
        this.status = null;
        this.text = "Button";
        
    }
    onChangeMobileNumber=(event: React.ChangeEvent<HTMLInputElement>):void=>{
        this.mobileNumber=event.target.value;
    }       
    onChangePassword=(event: React.ChangeEvent<HTMLInputElement>)=>{
        this.password=event.target.value;
    }
    onEnterKeyPress=(event: KeyboardEvent):any=>{
        if(event.key==="Enter"){
            this.onClickLogIn();
        }
    }
    onClickLogIn = async ()=>{
        if(this.password.length>0&&this.mobileNumber.length>0 ){
            console.log("login-1")
            this.errorMessage="";
            this.isValid = true;
            
            const apiRequest={
              mobile_number: this.mobileNumber,
              password: this.password
            };
             await this.props.authStore.userLogIn(apiRequest);
             //this.props.authStore.accessToken
             if(this.props.authStore.accessToken)
             {
                const {history}=this.props;
                this.status = true;

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
        else if(this.mobileNumber.length===0 || this.password.length==0){
            this.errorMessage="Required";
        }
        // else if(this.password.length==0){
        //     this.errorMessage="Required";
        // }
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