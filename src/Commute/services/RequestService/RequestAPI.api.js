import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {RequestAssetServiceEndpoint} from '../endpoints';

class RequestService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/"
     });
 }
 getRequestAPI=()=>{
   alert("api")
     return networkCallWithApisauce(
            this.api,
            `products`,
            {},       
            apiMethods.post
        );
 }
}

export default RequestService;
