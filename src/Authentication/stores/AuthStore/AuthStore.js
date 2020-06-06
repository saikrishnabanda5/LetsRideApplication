import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {setAccessToken,clearUserSession,getAccessToken} from '../../../Common/utils/StorageUtils.js';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
class AuthStore {
    @observable getUserLogInAPIStatus       
    @observable getUserLogInAPIError
    @observable errorMessage
    @observable accessToken
    constructor(authService){
        this.authAPIService=authService;
        this.init();
    }
    @action
    init(){
        this.getUserLogInAPIStatus=API_INITIAL;
        this.getUserLogInAPIError=null;
        this.errorMessage="";
        this.accessToken = null;
    }
    @action.bound
    setUserLogInAPIResponse(authResponse){
      setAccessToken(authResponse.access_token);
      this.accessToken=getAccessToken();
    } 
    @action.bound
    setGetUserLogInAPIStatus(apiStatus){
        this.getUserLogInAPIStatus=apiStatus;
    }
    @action.bound
    setGetUserLogInAPIError(error){
        this.getUserLogInAPIError=error;
    }
    @action.bound
    userLogIn(apiRequest){
        const authenticationPromise =this.authAPIService.LogInAPI(apiRequest);
        return bindPromiseWithOnSuccess(authenticationPromise)
                .to(this.setGetUserLogInAPIStatus,this.setUserLogInAPIResponse)
                .catch(this.setGetUserLogInAPIError);
    }
    @action.bound
    userSignOut(){
        this.clearStore();
    }
    @action
    clearStore(){
        this.init();
    }
}
export default AuthStore;