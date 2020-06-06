import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import MatchingRideModel from '../models/MatchingRideModel';
import MatchingAssetModel from '../models/MatchingAssetModel';
class ShareStore {
    @observable getShareRideAPIStatus
    @observable getShareTravelInfoAPIStatus
    @observable getMatchingRideAPIStatus
    @observable getMatchingAssetAPIStatus
    
    @observable getShareRideAPIError
    @observable getShareTravelInfoAPIError
    @observable getMatchingRideAPIError
    @observable getMatchingAssetAPIError
    @observable response
    
    @observable matchedRideDetails
    @observable matchedAssetDetails
    @observable noOfMatchedRides
    @observable noOfSharedTravelDetails
    
    @observable matchingRideLimit
    @observable matchingRideOffset
    @observable matchingRideStatus
    @observable pageNumber
    
    requestAPIService
    constructor(requestService){
        this.requestAPIService=requestService;
        this.init();
    }
    @action
    init(){
        this.getShareRideAPIStatus=API_INITIAL;
        this.getShareTravelInfoAPIStatus=API_INITIAL;
        this.getMatchingRideAPIStatus=API_INITIAL;
        this.getMatchingAssetAPIStatus =API_INITIAL;
        this.getShareRideAPIError=null;
        this.getShareTravelInfoAPIError=null;
        this.getMatchingRideAPIError=null;
        this.getMatchingAssetAPIError = null;
        this.response='';
        
        this.matchedRideDetails=[];
        this.matchedAssetDetails=[];
        
        this.noOfMatchedRides=0;
        this.noOfMatchedAssets=0; 
        this.matchingRideLimit = 2;
        this.matchingRideOffset =0; 
        this.matchingRideStatus = "";
        
        this.matchingAssetLimit = 2;
        this.matchingAssetOffset =0; 
        this.matchingAssetStatus = "Confirmed";
        this.pageNumber=1;
    }
    @action.bound
    onClickRideLeftArrow(){
        if(this.pageNumber>1){
            this.pageNumber-=1;
            this.matchingRideOffset =this.matchingRideOffset-this.matchingAssetLimit;
            this.onMatchingRides();
        }
    }
    @action.bound 
    onClickRideRightArrow(){
        if(this.pageNumber<Math.ceil(this.noOfMatchedRides/this.matchingAssetLimit)){
            this.pageNumber+=1;
            this.matchingRideOffset =this.matchingAssetLimit+this.matchingRideOffset;
             this.onMatchingRides();
        } 
    } 
    
    @action.bound
    onClickAssetLeftArrow(){ 
        if(this.pageNumber>1){
            this.pageNumber-=1;
            this.matchingAssetOffset =this.matchingAssetOffset-this.matchingAssetLimit;
            this.onMatchingAssets();
        }
    }
    @action.bound 
    onClickAssetRightArrow(){
        if(this.pageNumber<Math.ceil(this.noOfMatchedAssets/this.matchingAssetLimit)){
            this.pageNumber+=1;
            this.matchingAssetOffset =this.matchingAssetLimit+this.matchingAssetOffset;
             this.onMatchingAssets();
        }
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
    setMatchingRideAPIResponse(matchingResponse){
        console.log("my - request - ride ",matchingResponse);
        this.matchedRideDetails=[];
        this.noOfMatchedRides =10;
        // matchingResponse.total_no_of_requests;
        matchingResponse.matching_ride_requests.forEach((object)=>{ 
            const requestModel = new MatchingRideModel(object);
            this.matchedRideDetails.push(requestModel);
        });
    }

    @action.bound 
    setMatchingAssetAPIResponse(matchingResponse){
        console.log("my - asset - ride ",matchingResponse);
        this.matchedAssetDetails=[]; 
        this.noOfMatchedAssets = 10;
        matchingResponse.total_no_of_requests;
        matchingResponse.asset_requests.forEach((object)=>{
            const assetModel = new MatchingAssetModel(object);
            this.matchedAssetDetails.push(assetModel);
        });
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
    setMatchingRideAPIStatus(apiStatus){
        console.log("my - request - ride - apiStatus",apiStatus);
        this.getMatchingRideAPIStatus=apiStatus;
    }
    
    @action.bound
    setMatchingAssetAPIStatus(apiStatus){
        this.getMatchingAssetAPIStatus=apiStatus;
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
    setMatchingRideAPIError(error){
        this.getMatchingRideAPIError=error;
    }
    
    @action.bound
    setMatchingAssetAPIError(error){
        this.getMatchingAssetAPIError=error;
    }
    
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
    onMatchingRides(){
        const ridePromise = this.requestAPIService.getMatchingRides(this.matchingRideLimit,this.matchingRideOffset,this.matchingRideStatus);
        return bindPromiseWithOnSuccess(ridePromise)
                .to(this.setMatchingRideAPIStatus,this.setMatchingRideAPIResponse)
                .catch(this.setMatchingRideAPIError);
    }
    
    @action.bound
    onMatchingAssets(){
        const travelInfoPromise = this.requestAPIService.getMatchingAssets(this.rideLimit,this.rideOffset);
        return bindPromiseWithOnSuccess(travelInfoPromise)
                .to(this.setMatchingAssetAPIStatus,this.setMatchingAssetAPIResponse) 
                .catch(this.setMatchingAssetAPIError);
    }
    @action
    clearStore(){
        this.init();
    }
}
export default ShareStore;
