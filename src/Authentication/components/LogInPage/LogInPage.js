import React from 'react';
import {observer} from 'mobx-react';
import {withRouter} from "react-router-dom";
import {ErrorMessage,Header,ClickLogIn,LogInStyle,LogInView,UserName,
Password,SignUp,Account,ForSignUp,InputField,Image,Field,Icon,ImageIbhubs} from '../LogInPage/styledComponent.js';
import InputTag from '../../../Common/inputTag';
import ButtonComponent from '../../../Common/button/button.js';
import data from '../../../i18n/strings.json';

@observer
class LogInPage extends React.Component{
    usernameRef = React.createRef()
    componentDidMount(){
      this.usernameRef.current.focus();
    }
    signInPage=()=>{
       const {history}=this.props;
       history.replace('/signup/v1');
    }
    render(){
          const {
          mobileNumber,
          password,
          errorMessage,
          onChangeMobileNumber,
          onChangePassword,
          onClickSignIn,
          onEnterKeyPress} = this.props;
        return(
        <LogInView>
          <LogInStyle >
            <ImageIbhubs alt="iBhubsLogo" src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/ecca87bf-3005-41c9-aa87-d8a5dd3741ff.svg" />
            <Header >{data.signupHeader}</Header>
            <UserName>{data.mobileNumber}</UserName>
             <InputField> 
                <Field>
                  <InputTag type={data.type.text} placeholder={data.mobileNumber} refs={this.usernameRef} onChangeInput={onChangeMobileNumber}
                  errorMessage={errorMessage} inputValue={mobileNumber}/>
                  <Icon>{errorMessage==data.required &&mobileNumber===""?<Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/a68ce0bc-26a7-4037-94f4-f8461b2efea8.svg"/>:""}</Icon>
                </Field> 
              <ErrorMessage>{mobileNumber===""?<div>{errorMessage}</div>:mobileNumber.length===10?null:"should contain only digits"}</ErrorMessage>
            </InputField>
            
            <Password>{data.password}</Password>
             <InputField> 
                <Field>
                  <InputTag type={data.type.password} placeholder={data.enterPassword} onChangeInput={onChangePassword}
                  errorMessage={errorMessage} inputValue={password}/>
                  <Icon>{errorMessage==data.required &&password===""?<Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/a68ce0bc-26a7-4037-94f4-f8461b2efea8.svg"/>:""}</Icon>
                </Field>
              <ErrorMessage>{password==""?<div>{errorMessage}</div>:null}</ErrorMessage>
            </InputField>
         
            <ButtonComponent text={data.clickLogIn} onSubmitForm={onClickSignIn} onEnterKeyPress={onEnterKeyPress}/>
            <ClickLogIn>
              <ForSignUp>
                <Account>{data.dontHaveAccount}</Account>
               <SignUp onClick={this.signInPage}>{data.clickSignUp}</SignUp>
              </ForSignUp>
            </ClickLogIn>
            
          </LogInStyle>
        </LogInView>
            );
    }
}
export default withRouter(LogInPage);