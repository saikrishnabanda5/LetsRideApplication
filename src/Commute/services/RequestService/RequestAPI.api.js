import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {assetRequestEndPoint,rideRequestEndPoint,assetRequestAPIEndPoint} from '../endpoints';

class RequestService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://virtserver.swaggerhub.com/IB-HUBS2/lets_ride/1.0.0/"
     });
 }
 getRequestARideAPI=(apiRequest)=>{
   alert("getRequestARideAPI")
   console.log(apiRequest)
   return networkCallWithApisauce(
            this.api,
            rideRequestEndPoint.endpoint,
            {apiRequest},
            apiMethods.post
        );
     }
  getRequestAssetAPI=(assetDetails)=>{
    alert("getRequestAssetAPI")
   console.log(assetDetails)
   return networkCallWithApisauce(
            this.api,
            assetRequestAPIEndPoint.endpoint,
            {assetDetails},
            apiMethods.post
        );
  }
 getMyRideRequestAPI=(credentials)=>{
     return networkCallWithApisauce(
            this.api,
            assetRequestEndPoint.endpoint,
            {credentials},
            apiMethods.post
        );
     }
}

export default RequestService;