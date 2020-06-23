import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {setAccessToken,clearUserSession,getAccessToken} from '../../../Common/utils/StorageUtils.js';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
class AuthStore {
    @observable getUserLogInAPIStatus: number | undefined 
    @observable getUserLogInAPIError: null 
    @observable errorMessage: string | undefined
    @observable accessToken: null
    authAPIService: import("/home/ib_developer/Desktop/LetsRideApplication/src/Authentication/services/AuthService/AuthAPI.api").default | import("/home/ib_developer/Desktop/LetsRideApplication/src/Authentication/services/AuthService/AuthAPI.fixture").default;
    
    constructor(authService: import("../../services/AuthService/AuthAPI.api").default | import("../../services/AuthService/AuthAPI.fixture").default){
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
    setUserLogInAPIResponse(authResponse: { access_token: any; }){
      setAccessToken(authResponse.access_token);
      this.accessToken=getAccessToken();
    } 
    @action.bound
    setGetUserLogInAPIStatus(apiStatus: number | undefined){
        this.getUserLogInAPIStatus=apiStatus;
    }
    @action.bound
    setGetUserLogInAPIError(error: null){
        this.getUserLogInAPIError=error;
    }
    @action.bound
    userLogIn(apiRequest: { mobile_number: string; password: string; }){
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