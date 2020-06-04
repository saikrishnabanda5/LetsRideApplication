import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
class ShareStore {
    @observable getShareRideAPIStatus
    @observable getShareTravelInfoAPIStatus
    @observable getShareRideAPIError
    @observable getShareTravelInfoAPIError
    @observable response
    requestAPIService
    constructor(requestService){
        this.requestAPIService=requestService;
        this.init();
    }
    @action
    init(){
        this.getShareRideAPIStatus=API_INITIAL;
        this.getShareTravelInfoAPIStatus=API_INITIAL;
        this.getShareRideAPIError=null;
        this.getShareTravelInfoAPIError=null;
        this.response='';
    }
    @action.bound
    setShareAPIResponse(shareRideresponse){
        console.log("shareRideresponse",shareRideresponse)
        this.response=shareRideresponse;
    }
    @action.bound
    setShareTravelInfoAPIResponse(travelInfoResponse){
         console.log("shareRideresponse",travelInfoResponse)
    }
    @action.bound
    setShareRideAPIStatus(apiStatus){
        console.log("setShareRideAPIStatus---apiStatus",apiStatus)
        this.getShareRideAPIStatus=apiStatus;
    }
    @action.bound
    setShareTravelInfoAPIStatus(apiStatus){
        console.log("setShareTravelInfo----APIStatus",apiStatus)
         this.getShareTravelInfoAPIStatus=apiStatus;
    }
    @action.bound
    setShareRidetAPIError(error){
        console.log("setShareRideAPIStatus---error",error)
        this.getShareRideAPIError=error;
    }
    @action.bound
    setShareTravelInfotAPIError(error){
        this.getShareTravelInfoAPIError =error;
    }
    
    @action.bound
    onShareTravelInfo(shareTravelDetails){
        const travelInfoPromise =this.requestAPIService.getShareTravelInfoAPI(shareTravelDetails);
        return bindPromiseWithOnSuccess(travelInfoPromise)
                .to(this.setShareTravelInfoAPIStatus,this.setShareTravelInfoAPIResponse)
                .catch(this.setShareTravelInfotAPIError);
    }
    @action.bound
    onShareRide(shareRideDetails){
        alert("share-ride")
        const rideSharePromise =this.requestAPIService.getShareRideAPI(shareRideDetails);
        return bindPromiseWithOnSuccess(rideSharePromise)
                .to(this.setShareRideAPIStatus,this.setShareAPIResponse)
                .catch(this.setShareRidetAPIError);
    }
    @action
    clearStore(){
        this.init();
    }
}
export default ShareStore;
