import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../../Common/utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {authServiceEndpoint} from '../endpoints';
class AuthService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://c0b321343071.ngrok.io/api/lets_ride/"
     });
 }
 LogInAPI(apiRequest){
     return networkCallWithApisauce(
            this.api,
            authServiceEndpoint.endpoint,
            apiRequest,
            apiMethods.post
        );
     }
}

export default AuthService;