import {create} from 'apisauce';
import credentials from '../../fixtures/getRideResponse.json';
import assetCredentials from '../../fixtures/getAssetResponse.json';
import rideRequestCredentials from '../../fixtures/postRideRequest.json';
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
         setTimeout(()=>res(rideRequestCredentials),500);
     });
 }
 getAssetRequestAPI=()=>{
     return new Promise((res)=>{
         setTimeout(()=>res(assetCredentials),500);
     });
 }
  getMyRideRequestAPI=()=>{
   return new Promise((res)=>{
         setTimeout(()=>res(credentials),500);
     });
     }
     
  getMyAssetRequestAPI=()=>{
   return new Promise((res)=>{
         setTimeout(()=>res(assetRequestCredentials),500);
     });
     }
}
export default RequestService;