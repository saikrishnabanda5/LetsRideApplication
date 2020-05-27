import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx';
import {ErrorMessage,Header,ClickLogIn,LogInStyle,LogInView,Image,UserName,Password} from '../LogInPage/styledComponent.js';
import {getAccessToken} from '../../utils/StorageUtils.js';
import InputTag from '../../../Common/inputTag'
import ButtonComponent from '../../../Common/button/button.js'
import data from '../../../i18n/strings.json'
import {Typo32DarkBlueGreyRubikRegular,Typo12SteelHKGroteskSemiBold,Typo14DarkBlueGreyHKGroteskRegular} from '../../../Common/styleGuide/Typos'

@observer
class LogInPage extends React.Component{
    usernameRef = React.createRef()
    componentDidMount(){
      this.usernameRef.current.focus();
    }
    render(){
          const {
          apiStatus,
          username,
          password,
          errorMessage,
          onChangeUsername,
          onChangePassword,
          onClickSignIn,
          onEnterKeyPress} = this.props;
        return(
        <LogInView>
          <LogInStyle >
            <Image alt="iBhubsLogo" src="https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/ecca87bf-3005-41c9-aa87-d8a5dd3741ff.svg" />
            <Header >{data.signupHeader}</Header>
            <UserName>{data.userName}</UserName>
            <InputTag type="text" placeholder="Enter Username"  refs={this.usernameRef} onChangeInput={onChangeUsername}/>
            <Password>{data.password}</Password>
            <InputTag type="password" placeholder="Enter Password" onChangeInput={onChangePassword}/>
         
            <ButtonComponent text={data.signup} onClickSignIn={onClickSignIn} onEnterKeyPress={onEnterKeyPress}/> 
            {errorMessage !== "" && errorMessage !== undefined ? (
              <span className="text-red-700 mt-2 w-48 text-sm">
                {errorMessage}
              </span>
            ) : null}
            <ClickLogIn>
            {data.alreadyhaveaccount}{data.login}
           </ClickLogIn>
          </LogInStyle>
        </LogInView>
            );
    }
}
export default LogInPage;