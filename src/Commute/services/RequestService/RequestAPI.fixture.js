import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../../Common/utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import credentials from '../../fixtures/getRideResponse.json';
import assetCredentials from '../../fixtures/getAssetResponse.json';
import rideRequestCredentials from '../../fixtures/getRideRequestCredentials.json';
import assetRequestCredentials from '../../fixtures/getAssetRequestCredentials.json';

class RequestService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://virtserver.swaggerhub.com/IB-HUBS2/lets_ride/1.0.0/"
     });
 }
 postRequestARideAPI=()=>{
    return new Promise((res)=>{
         setTimeout(()=>{res(rideRequestCredentials),5000});
     });
 }
 getAssetRequestAPI=()=>{
     return new Promise((res)=>{
         setTimeout(()=>{res(assetCredentials),5000});
     });
 }
  getMyRideRequestAPI=()=>{
   return new Promise((res)=>{
         setTimeout(()=>{res(credentials),5000});
     });
     }
     
  getMyAssetRequestAPI=()=>{
   return new Promise((res)=>{
         setTimeout(()=>{res(assetRequestCredentials),5000});
     });
     }
}
export default RequestService;