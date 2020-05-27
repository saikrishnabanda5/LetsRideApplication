import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {SignIn,Input,Details,ErrorMessage,SignInButton,SignInStyle,Header,ClickLogin} from '../SignInPage/styledComponent.js';
import {getAccessToken} from '../../utils/StorageUtils.js';
import InputTag from '../../../Common/inputTag'
import ButtonComponent from '../../../Common/button/button.js'
import data from '../../../i18n/strings.json'
import {Typo32DarkBlueGreyRubikRegular,Typo12SteelHKGroteskSemiBold,Typo14DarkBlueGreyHKGroteskRegular} from '../../../Common/styleGuide/Typos'

@observer
class SignInPage extends React.Component{
    usernameRef = React.createRef()
    componentDidMount(){
      this.usernameRef.current.focus();
    }
    render(){
          const {
          apiStatus,
          username,
          password,
          confirmPassword,
          errorMessage,
          onChangeUsername,
          onChangePassword,
          onChangeConfirmPassword,
          onClickSignIn,
          onEnterKeyPress} = this.props;
        return(
        <div className="flex justify-center items-center h-screen bg-gray-200">
        <SignInStyle >
          <img src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/ecca87bf-3005-41c9-aa87-d8a5dd3741ff.svg" />
          <Header >{data.signupHeader}</Header>
          <Typo12SteelHKGroteskSemiBold>{data.userName}</Typo12SteelHKGroteskSemiBold>
          <InputTag type="text" placeholder="Enter Username" refs={this.usernameRef} onChangeInput={onChangeUsername}/>
          <Typo12SteelHKGroteskSemiBold>{data.password}</Typo12SteelHKGroteskSemiBold>
          <InputTag type="password" placeholder="Enter Password" onChangeInput={onChangePassword}/>
          <Typo12SteelHKGroteskSemiBold> {data.confirmPassword}</Typo12SteelHKGroteskSemiBold>
          <InputTag type="password" placeholder="Confirm Password" onChangeInput={onChangeConfirmPassword}/>
          <ButtonComponent text={data.signup} onClickSignIn={onClickSignIn} onEnterKeyPress={onEnterKeyPress}/> 
          {errorMessage !== "" && errorMessage !== undefined ? (
            <span className="text-red-700 mt-2 w-48 text-sm">
              {errorMessage}
            </span>
          ) : null}
          <ClickLogin>
          {data.alreadyhaveaccount}{data.login}
         </ClickLogin>
        </SignInStyle>
        </div>
            );
    }
}
export default SignInPage;