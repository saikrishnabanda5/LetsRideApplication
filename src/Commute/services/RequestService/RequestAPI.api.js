import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../../Common/utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {assetRequestEndPoint,rideRequestEndPoint,myRideRequestEndPoint,assetRequestAPIEndPoint} from '../endpoints';

class RequestService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://15bb3c5bb8b6.ngrok.io/api/lets_ride/"
     });
 }
 postRequestARideAPI=(apiRequest)=>{
   console.log("postRequestARideAPI",apiRequest);
   return networkCallWithApisauce(
            this.api,
            rideRequestEndPoint.endpoint,
            apiRequest,
            apiMethods.post
        );
     }
  getRequestAssetAPI=(assetDetails)=>{
    alert("getRequestAssetAPI");
   console.log(assetDetails);
   return networkCallWithApisauce(
            this.api,
            assetRequestAPIEndPoint.endpoint,
            assetDetails,
            apiMethods.post
        );
  }
 getMyRideRequestAPI=(limit,offset)=>{
   console.log(limit,offset);
     return networkCallWithApisauce(
            this.api,
            `${myRideRequestEndPoint.endpoint}?limit=${limit}&offset=${offset}`,
            {},
            apiMethods.get
        );
     }
}

export default RequestService;
//https://virtserver.swaggerhub.com/IB-HUBS2/lets_ride/1.0.0/
// https://352d764d4207.ngrok.io/
//      my_requests/ride/v1
// /?limit=${limit}&offset=${offset}
//myRideRequestEndPoint.endpoint
//`products?limit=${limit}&offset=${offset}`,