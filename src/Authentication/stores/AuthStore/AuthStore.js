import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {setAccessToken,clearUserSession} from '../../utils/StorageUtils.js';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import AuthService from '../../services/AuthService/AuthAPI.js';
class AuthStore {
    @observable getUserSignInAPIStatus       
    @observable getUserSignInAPIError
    @observable apiRequest = []
    authAPIService
    constructor(AuthService){
        this.authAPIService=AuthService;
        this.init();
    }
    @action
    init(){
        this.getUserSignInAPIStatus=API_INITIAL;
        this.getUserSignInAPIError=null;
    }
    @action.bound
    setUserSignInAPIResponse(authResponse){
      setAccessToken(1);
      //authResponse[0].access_token
    } 
    @action.bound
    setGetUserSignInAPIStatus(apiStatus){
        this.getUserSignInAPIStatus=apiStatus;
    }
    @action.bound
    setGetUserSignInAPIError(error){
        this.getUserSignInAPIError=error;
    }
    @action.bound
    getApiRequest(userName,password,confirmPassword){
        this.apiRequest=[{
        username:userName,
        password:password,
        confirmPassword:confirmPassword
        }];
    }
    @action.bound
    userSignIn(userName,password,confirmPassword){
        this.getApiRequest(userName,password,confirmPassword);
        const AuthenticationPromise =this.authAPIService.signInAPI(this.apiRequest);
        return bindPromiseWithOnSuccess(AuthenticationPromise)
                .to(this.setGetUserSignInAPIStatus,this.setUserSignInAPIResponse)
                .catch(this.setGetUserSignInAPIError);
    }
    @action.bound
    userSignOut(){
        clearUserSession();
    }
    @action
    clearStore(){
        this.init();
    }
}
export default AuthStore;