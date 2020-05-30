import React from 'react';
import {observer} from 'mobx-react';
import {withRouter} from "react-router-dom";
import {ErrorMessage,SignInStyle,Header,
ClickLogIn,Account,Login,ForLogIn,SignUpView,Heading,InputField,Image,Field,Icon,ImageIbhubs} from '../SignInPage/styledComponent.js';
import InputTag from '../../../Common/inputTag';
import ButtonComponent from '../../../Common/button/button.js';
import data from '../../../i18n/strings.json';

@observer
class SignInPage extends React.Component{
    mobileNumberRef = React.createRef()
    componentDidMount(){
      this.mobileNumberRef.current.focus();
    }
    SignInPage=()=>{
       const {history}=this.props;
       history.replace('/login/v1');
    }
    render(){
          const {
          apiStatus,
          mobileNumber,
          password,
          confirmPassword,
          errorMessage,
          onChangeMobileNumber,
          onChangePassword,
          onChangeConfirmPassword,
          onClickSignIn,
          onEnterKeyPress} = this.props;
        return(
        <SignUpView>
        <SignInStyle >
          <ImageIbhubs src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/ecca87bf-3005-41c9-aa87-d8a5dd3741ff.svg" />
          <Header >{data.signupHeader}</Header>
            <Heading>{data.mobileNumber}</Heading>
            
            <InputField> 
                <Field>
                  <InputTag type={data.type.text} placeholder={data.mobileNumber} refs={this.mobileNumberRef} onChangeInput={onChangeMobileNumber} pattern="\d{10}" 
                  errorMessage={errorMessage} inputValue={mobileNumber}/>
                  <Icon>{errorMessage===data.required &&mobileNumber===""?<Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/a68ce0bc-26a7-4037-94f4-f8461b2efea8.svg"/>:""}</Icon>
                </Field>
              <ErrorMessage>{mobileNumber===""?<div>{errorMessage}</div>:mobileNumber.length===10?null:"should contain 10 digits"}</ErrorMessage>
            </InputField>
            
            <Heading>{data.password}</Heading>
            
            <InputField>
              <Field>
                  <InputTag type={data.type.password} placeholder={data.enterPassword} onChangeInput={onChangePassword}
                  errorMessage={errorMessage} inputValue={password}/>
                  <Icon>{errorMessage===data.required &&password===""?<Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/a68ce0bc-26a7-4037-94f4-f8461b2efea8.svg"/>:""}</Icon>
                </Field>
              <ErrorMessage>{password===""?<div>{errorMessage}</div>:null}</ErrorMessage>
            </InputField>
            
            <Heading> {data.confirmPassword}</Heading>
            <InputField>
                <Field>
                   <InputTag type={data.type.password} placeholder={data.confirmPassword} onChangeInput={onChangeConfirmPassword}
              errorMessage={errorMessage} inputValue={confirmPassword}/>
                  <Icon>{errorMessage===data.required &&confirmPassword===""?<Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/a68ce0bc-26a7-4037-94f4-f8461b2efea8.svg"/>:""}</Icon>
                </Field>
              <ErrorMessage>{confirmPassword===""?<div>{errorMessage}</div>:null}</ErrorMessage>
            </InputField>
          
          <ButtonComponent text={data.signup} onSubmitForm={onClickSignIn} onEnterKeyPress={onEnterKeyPress}/> 
          <ClickLogIn>
             <ForLogIn>
               <Account>{data.alreadyhaveaccount}</Account>
               <Login onClick={this.SignInPage}>{data.login}</Login>
             </ForLogIn>
         </ClickLogIn>
         
        </SignInStyle>
        </SignUpView>
            );
    }
}
export default withRouter(SignInPage);