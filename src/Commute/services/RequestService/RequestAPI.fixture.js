import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../../Common/utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import credentials from '../../fixtures/getRideResponse.json';
import assetCredentials from '../../fixtures/getAssetResponse.json';
import rideRequestCredentials from '../../fixtures/getRideRequestCredentials.json'

class RequestService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://virtserver.swaggerhub.com/IB-HUBS2/lets_ride/1.0.0/"
     });
 }
 postRequestARideAPI=()=>{
     alert("onRideRequest -fixture")
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
   console.log("getMyRideRequestAPI-fixture",credentials)
   return new Promise((res)=>{
         setTimeout(()=>{res(credentials),10000});
     });
     }
}
export default RequestService;