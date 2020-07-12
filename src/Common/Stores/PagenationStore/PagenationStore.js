import { observable, action } from 'mobx'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class PagenationStore {
   // @observable limit!:number
   // @observable selectedPage!:number
   // @observable offset!:number
   // @observable matchedRideDetails!:Array<T>
   // @observable getAPIStatus!: APIStatus
   // @observable getAPIError!:Error | null
   // @observable getAPIService
   // @observable noOfMatchedRides:number
   // @observable itemModel
   @observable limit
   @observable selectedPage
   @observable offset
   @observable matchedRideDetails
   @observable getAPIStatus
   @observable getAPIError
   @observable getAPIService
   @observable noOfMatchedRides
   @observable itemModel
   constructor(itemModel, getAPIService, ItemsPerPage) {
      this.itemModel = itemModel
      this.getAPIService = getAPIService
      this.limit = ItemsPerPage
      this.init()
   }
   @action.bound
   init() {
      this.selectedPage = 1
      this.offset = 0
      this.matchedRideDetails = []
      this.getAPIStatus = API_INITIAL
      this.getAPIError = null
      this.noOfMatchedRides = 0
   }
   @action.bound
   onClickLeftArrow() {
      if (this.selectedPage > 1) {
         this.selectedPage -= 1
         this.offset = this.offset - this.limit
         this.getTheData()
      }
   }
   @action.bound
   onClickRightArrow() {
      if (this.selectedPage < Math.ceil(this.noOfMatchedRides / this.limit)) {
         this.selectedPage += 1
         this.offset = this.limit + this.offset
         this.getTheData()
      }
   }

   @action.bound
   setAPIResponse(matchingResponse) {
      this.matchedRideDetails = []
      this.noOfMatchedRides = 6
      // matchingResponse.length;
      matchingResponse.forEach(object => {
         const matchingRideModel = new this.itemModel(object)
         this.matchedRideDetails.push(matchingRideModel)
      })
   }

   @action.bound
   setAPIStatus(apiStatus) {
      this.getAPIStatus = apiStatus
   }

   @action.bound
   setAPIError(error) {
      this.getAPIError = error
   }

   @action.bound
   getTheData() {
      const ridePromise = this.getAPIService(this.limit, this.offset)
      return bindPromiseWithOnSuccess(ridePromise)
         .to(this.setAPIStatus, this.setAPIResponse)
         .catch(this.setAPIError)
   }

   @action
   clearStore() {
      this.init()
   }
}

export default PagenationStore

// constructor(model:Class<T>,config){
//     //config ={
//         dataAccessor : "forms" || "results",
//         showPerPage:
//     }
//     @observable
//     currentFilters:ObservableMap<ObservableArray>
//     {
//         "size":["L","M","S"],
//         "COLOR":["RED","BLUE"]
//     }
// }
