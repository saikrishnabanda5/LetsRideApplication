import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../../Common/utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {shareRideEndPoint,shareTravelEndPoint,mySharedRideEndPoint} from '../endpoints';

class ShareRideService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://d03007df0ee1.ngrok.io/api/lets_ride"
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
 getMyShareRideAPI=(limit,offset,status)=>{
     return networkCallWithApisauce(
            this.api,
            `${mySharedRideEndPoint.endpoint}?limit=${200}&offset=${0}&status=${status}`,
            {},
            apiMethods.get
        );
 }
// getMyAssetRequestAPI=(limit,offset)=>{
//   return networkCallWithApisauce(
//             this.api,
//             `${myAssetRequestEndPoint.endpoint}?limit=${limit}&offset=${offset}`,
//             {},
//             apiMethods.get
//         );
//   }
}

export default ShareRideService;