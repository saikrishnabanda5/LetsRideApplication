import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../../Common/utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {shareRideEndPoint,shareTravelEndPoint,matchingRide,matchingAssets} from '../endpoints';

class ShareRideService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://c0b321343071.ngrok.io/api/lets_ride"
     });
 }
 postShareRideAPI(shareRideDetails){
   return networkCallWithApisauce(
            this.api,
            shareRideEndPoint.endpoint,
            shareRideDetails,
            apiMethods.post
        );
 }
 getShareTravelInfoAPI(sharedInfo){
   return networkCallWithApisauce(
            this.api,
            shareTravelEndPoint.endpoint,
            sharedInfo,
            apiMethods.post
        );
 }
 getMatchingRides=(limit,offset,status)=>{
     return networkCallWithApisauce(
            this.api,
            `${matchingRide.endpoint}?limit=${3}&offset=${0}&status=${status}`,
            {},
            apiMethods.get
        );
 }
getMatchingAssets=(limit,offset,status)=>{
   return networkCallWithApisauce(
             this.api,
             `${matchingAssets.endpoint}?limit=${3}&offset=${0}`,
             {},
             apiMethods.get
         );
   }
}
export default ShareRideService;