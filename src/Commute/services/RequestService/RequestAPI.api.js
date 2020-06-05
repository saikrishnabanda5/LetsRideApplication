import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../../Common/utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {rideRequestEndPoint,assetRequestEndPoint,myRideRequestEndPoint,assetRequestAPIEndPoint,myAssetRequestEndPoint} from '../endpoints';

class RequestService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://d03007df0ee1.ngrok.io/api/lets_ride/"
     });
 }
 postRequestARideAPI=(apiRequest)=>{
   return networkCallWithApisauce(
            this.api,
            rideRequestEndPoint.endpoint,
            apiRequest,
            apiMethods.post
        );
     }
     
  postRequestAssetAPI=(apiRequest)=>{
   return networkCallWithApisauce(
            this.api,
            assetRequestEndPoint.endpoint,
            apiRequest,
            apiMethods.post
        );
     }
  getMyAssetRequestAPI=(limit,offset)=>{
   return networkCallWithApisauce(
            this.api,
            `${myAssetRequestEndPoint.endpoint}?limit=${limit}&offset=${offset}`,
            {},
            apiMethods.get
        );
  }
 getMyRideRequestAPI=(limit,offset,status)=>{
     return networkCallWithApisauce(
            this.api,
            `${myRideRequestEndPoint.endpoint}?limit=${200}&offset=${0}&status=${status}`,
            {},
            apiMethods.get
        );
 }
}

export default RequestService;