import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import credentials from '../../fixtures/getRideResponse.json';
import assetCredentials from '../../fixtures/getAssetResponse.json';

class RequestService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/"
     });
 }
 getRideRequestAPI=()=>{
     return new Promise((res)=>{
         setTimeout(()=>{res(credentials),1000});
     });
 }
 getAssetRequestAPI=()=>{
     return new Promise((res)=>{
         setTimeout(()=>{res(assetCredentials),1000});
     });
 }
}

export default RequestService;