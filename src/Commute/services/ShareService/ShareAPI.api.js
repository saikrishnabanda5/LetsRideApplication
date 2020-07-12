import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../../Common/utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'
import {
   shareRideEndPoint,
   shareTravelEndPoint,
   matchingRide,
   matchingAssets
} from '../endpoints'
import config from '../../../Common/constants/EnviromentConstants'

class ShareRideService {
   api
   constructor() {
      this.api = create({
         baseURL: config.BASE_URL
      })
   }
   postShareRideAPI(shareRideDetails) {
      return networkCallWithApisauce(
         this.api,
         shareRideEndPoint.endpoint,
         shareRideDetails,
         apiMethods.post
      )
   }
   getShareTravelInfoAPI(sharedInfo) {
      return networkCallWithApisauce(
         this.api,
         shareTravelEndPoint.endpoint,
         sharedInfo,
         apiMethods.post
      )
   }
   getMatchingRides = requestObject => {
      return networkCallWithApisauce(
         this.api,
         `${matchingRide.endpoint}?limit=${3}&offset=${0}&status=${status}`,
         {},
         apiMethods.get
      )
   }
   getMatchingAssets = requestObject => {
      return networkCallWithApisauce(
         this.api,
         `${matchingAssets.endpoint}?limit=${3}&offset=${0}`,
         {},
         apiMethods.get
      )
   }
}
export default ShareRideService
