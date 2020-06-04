import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {shareRideEndPoint,shareTravelEndPoint} from '../endpoints';

class ShareRideService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://virtserver.swaggerhub.com/IB-HUBS2/lets_ride/1.0.0/"
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