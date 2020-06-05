import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
class ShareStore {
    @observable getShareRideAPIStatus
    @observable getShareTravelInfoAPIStatus
    @observable getMySharedRidesAPIStatus
    
    @observable getShareRideAPIError
    @observable getShareTravelInfoAPIError
    @observable getMySharedRidesAPIError
    @observable response
    
    @observable rideDetails
    @observable travelDetails
    @observable noOfSharedRides
    @observable noOfSharedTravelDetails
    
    @observable sharedLimit
    @observable sharedOffset
    @observable sharedStatus
    
    requestAPIService
    constructor(requestService){
        this.requestAPIService=requestService;
        this.init();
    }
    @action
    init(){
        this.getShareRideAPIStatus=API_INITIAL;
        this.getShareTravelInfoAPIStatus=API_INITIAL;
        this.getMySharedRidesAPIStatus=API_INITIAL;
        this.getShareRideAPIError=null;
        this.getShareTravelInfoAPIError=null;
        this.getMySharedRidesAPIError=null;
        this.response='';
        
        this.rideDetails=[];
        this.travelDetails=[];
        
        this.noOfSharedRides=0;
        this.noOfSharedTravelDetails=0;
        this.sharedLimit = 2;
        this.sharedOffset =1; 
        this.sharedStatus = "";
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
    setMySharedRidesAPIResponse(sharedResponse){
        console.log("my - request - ride ",sharedResponse);
        this.rideDetails=[];
        this.noOfSharedRides = sharedResponse.total_no_of_requests;
        sharedResponse.ride_requests.forEach((object)=>{
            const requestModel = new RequestModel(object);
            this.rideDetails.push(requestModel);
        });
    }
    
    // @action.bound 
    // setMyAssetAPIResponse(assetResponse){
    //     console.log("my - asset - ride ",assetResponse)
    //     this.assetDetails=[]; 
    //     this.noOfAssetRequests =assetResponse.total_no_of_requests;
    //     assetResponse.asset_requests.forEach((object)=>{
    //         const assetModel = new AssetRequestModel(object);
    //         this.assetDetails.push(assetModel);
    //     });
    // }
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
    setMySharedRidesAPIStatus(apiStatus){
        console.log("my - request - ride - apiStatus",apiStatus);
        this.getMySharedRidesAPIStatus=apiStatus;
    }
    
    // @action.bound
    // setMyAssetAPIStatus(apiStatus){
    //     this.getAssetAPIStatus=apiStatus;
    // }
    
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
    setMySharedRidesAPIError(error){
        this.getMySharedRidesAPIError=error;
    }
    
    // @action.bound
    // setMyAssetAPIError(error){
    //     this.getAssetAPIError=error;
    // }
    
    @action.bound
    onShareRide(shareRideDetails){
        alert("share-ride")
        const rideSharePromise =this.requestAPIService.postShareRideAPI(shareRideDetails);
        return bindPromiseWithOnSuccess(rideSharePromise)
                .to(this.setShareRideAPIStatus,this.setShareAPIResponse)
                .catch(this.setShareRidetAPIError);
    }
    
    @action.bound
    onShareTravelInfo(shareTravelDetails){
        const travelInfoPromise =this.requestAPIService.getShareTravelInfoAPI(shareTravelDetails);
        return bindPromiseWithOnSuccess(travelInfoPromise)
                .to(this.setShareTravelInfoAPIStatus,this.setShareTravelInfoAPIResponse)
                .catch(this.setShareTravelInfotAPIError);
    }
    
    @action.bound
    onMyShareRide(){
        const ridePromise = this.requestAPIService.getMyShareRideAPI(this.rideLimit,this.rideOffset,this.rideStatus);
        return bindPromiseWithOnSuccess(ridePromise)
                .to(this.setMySharedRidesAPIStatus,this.setMySharedRidesAPIResponse)
                .catch(this.setMySharedRidesAPIError);
    }
    
    @action.bound
    onMyTravelShare(){
        const travelInfoPromise = this.requestAPIService.getMyAssetRequestAPI(this.rideLimit,this.rideOffset);
        return bindPromiseWithOnSuccess(travelInfoPromise)
                .to(this.setMyAssetAPIStatus,this.setMyAssetAPIResponse)
                .catch(this.setMyAssetAPIError);
    }
    @action
    clearStore(){
        this.init();
    }
}
export default ShareStore;
