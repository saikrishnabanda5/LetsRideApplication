import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {ShareTravelInfoServiceEndpoint} from '../endpoints';

class ShareTravelInfoService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/"
     });
 }
 getShareTravelInfoAPI(limit,offset){
     return networkCallWithApisauce(
            this.api,
            `products?limit=${limit}&offset=${offset}`,
            {},       
            apiMethods.get
        );
 }
}

export default ShareTravelInfoService;
