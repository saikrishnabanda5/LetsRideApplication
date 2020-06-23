import React from 'react';
import {observer} from 'mobx-react';
import InputTag from '../../../Common/InputTag';
import ButtonComponent from '../../../Common/ButtonComponent';
import data from '../../../i18n/strings.json';
import {ErrorMessage,SignInStyle,Header,ClickLogIn,Account,Login,ForLogIn,
  SignUpView,Heading,InputField,Image,Field,Icon,ImageIbhubs} from '../SignInPage/styledComponents';

type SignUpProps = {
  mobileNumber:string|any,
  password:string,
  confirmPassword:string
  errorMessage:string,
  onChangeMobileNumber:Function
  onChangePassword: Function
  onChangeConfirmPassword: Function
  onClickLogIn: () => void
  onEnterKeyPress: Function
  onClickSignUp: () => void,
  error:string
}

@observer
class SignInPage extends React.Component<SignUpProps>{
    // mobileNumberRef = React.createRef()
    private mobileNumberRef= React.createRef<HTMLDivElement>()
    componentDidMount(){
      this.mobileNumberRef.current!.focus();
    }
    render(){
          const {
          mobileNumber,
          password,
          confirmPassword,
          errorMessage,
          onChangeMobileNumber,
          onChangePassword,
          onChangeConfirmPassword,
          onClickSignUp,
          onClickLogIn,error,
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
                errorMessage={errorMessage} inputValue={confirmPassword} onEnterKeyPress={onEnterKeyPress}/>
                  <Icon>{errorMessage===data.required &&confirmPassword===""?<Image src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/a68ce0bc-26a7-4037-94f4-f8461b2efea8.svg"/>:""}</Icon>
                </Field>
              <ErrorMessage>
              {confirmPassword===""?<div>{errorMessage}</div>:null}
              {confirmPassword!==password?<div>{error}</div>:""}
              </ErrorMessage>
            </InputField>
          
          <ButtonComponent text={data.signup} onSubmitForm={onClickSignUp} onEnterKeyPress={onEnterKeyPress}/>
          <ClickLogIn>
             <ForLogIn>
               <Account>{data.alreadyhaveaccount}</Account>
               <Login onClick={onClickLogIn}>{data.login}</Login>
             </ForLogIn>
         </ClickLogIn>
         
        </SignInStyle>
        </SignUpView>
            );
    }
}
export default SignInPage;