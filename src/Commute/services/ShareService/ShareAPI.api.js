import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../../Common/utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {shareRideEndPoint,shareTravelEndPoint} from '../endpoints';

class ShareRideService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://15bb3c5bb8b6.ngrok.io/api/lets_ride"
     });
 }
 getRequestRideAPI(limit,offset){
     return networkCallWithApisauce(
            this.api,
            `products?limit=${limit}&offset=${offset}`,
            {},       
            apiMethods.get
        );
 }
 getShareRideAPI(shareRideDetails){
   console.log("service",shareRideDetails)
   return networkCallWithApisauce(
            this.api,
            shareRideEndPoint.endpoint,
            {shareRideDetails},
            apiMethods.post
        );
 }
 getShareTravelInfoAPI(sharedInfo){
   console.log("indo",sharedInfo)
   return networkCallWithApisauce(
            this.api,
            shareTravelEndPoint.endpoint,
            {sharedInfo},
            apiMethods.post
        );
 }
}

export default ShareRideService;

// 2020-09-09 14:24:00:00.00000