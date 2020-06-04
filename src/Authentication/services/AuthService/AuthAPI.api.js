import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {authServiceEndpoint} from '../endpoints';
class AuthService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://virtserver.swaggerhub.com/IB-HUBS2/lets_ride/1.0.0/"
     });
 }
 LogInAPI(apiRequest){
     return networkCallWithApisauce(
            this.api,
            authServiceEndpoint.endpoint,
            {apiRequest},
            apiMethods.post
        );
     }
}

export default AuthService;