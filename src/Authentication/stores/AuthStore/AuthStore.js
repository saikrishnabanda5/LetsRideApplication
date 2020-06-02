import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {setAccessToken,clearUserSession} from '../../utils/StorageUtils.js';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
class AuthStore {
    @observable getUserSignInAPIStatus       
    @observable getUserSignInAPIError
    @observable errorMessage
    @observable apiRequest = []
    authAPIService
    constructor(authService){
        this.authAPIService=authService;
        this.init();
    }
    @action
    init(){
        this.getUserSignInAPIStatus=API_INITIAL;
        this.getUserSignInAPIError=null;
        this.errorMessage="";
    }
    @action.bound
    setUserSignInAPIResponse(authResponse){
      setAccessToken(1);
      
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
        console.log(userName,password,confirmPassword);
        this.getApiRequest(userName,password,confirmPassword);
        const authenticationPromise =this.authAPIService.signInAPI(this.apiRequest);
        return bindPromiseWithOnSuccess(authenticationPromise)
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