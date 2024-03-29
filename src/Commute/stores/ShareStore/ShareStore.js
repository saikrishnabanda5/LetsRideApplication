import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import MatchingRideModel from '../models/MatchingRideModel';
import MatchingAssetModel from '../models/MatchingAssetModel';
import PagenationStore from '../../../Common/Stores/PagenationStore';
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
    pagenationstore
    constructor(requestService){
        // console.log("requestService",requestService)
        this.requestAPIService=requestService;
        this.matchingRideLimit = 2;
        this.matchingRideOffset =0; 
        this.pagenationstore = new PagenationStore(MatchingRideModel,requestService.getMatchingRides,this.matchingRideLimit);
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
        this.matchingRideStatus = "";
        
        this.matchingAssetLimit = 2;
        this.matchingAssetOffset =0; 
        this.matchingAssetStatus = "Confirmed";
        this.pageNumber=1;
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
    
        this.response=shareRideresponse;
    }
    @action.bound
    setShareTravelInfoAPIResponse(travelInfoResponse){
    }

    @action.bound 
    setMatchingAssetAPIResponse(matchingResponse){
        // console.log("matching asset response",matchingResponse)
        this.matchedAssetDetails=[]; 
        this.noOfMatchedAssets =  matchingResponse.matching_asset_requests.length;
        matchingResponse.matching_asset_requests.forEach((object)=>{
            const assetModel = new MatchingAssetModel(object);
            this.matchedAssetDetails.push(assetModel);
        });
    }
    @action.bound
    setShareRideAPIStatus(apiStatus){
        this.getShareRideAPIStatus=apiStatus;
    }
    @action.bound
    setShareTravelInfoAPIStatus(apiStatus){ 
         this.getShareTravelInfoAPIStatus=apiStatus;
    }
    
    @action.bound
    setMatchingAssetAPIStatus(apiStatus){
        this.getMatchingAssetAPIStatus=apiStatus;
    }
    
    @action.bound
    setShareRidetAPIError(error){
        this.getShareRideAPIError=error;
    }
    @action.bound
    setShareTravelInfotAPIError(error){
        this.getShareTravelInfoAPIError =error;
    }
   
    @action.bound
    setMatchingAssetAPIError(error){
        this.getMatchingAssetAPIError=error;
    }
    
    @action.bound
    onShareRide(shareRideDetails){
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
          this.pagenationstore.getTheData();
          }
    
    @action.bound
    onMatchingAssets(){
        
        const assetPromise = this.requestAPIService.getMatchingAssets(this.matchingAssetLimit,this.matchingAssetOffset);
        return bindPromiseWithOnSuccess(assetPromise)
                .to(this.setMatchingAssetAPIStatus,this.setMatchingAssetAPIResponse) 
                .catch(this.setMatchingAssetAPIError);
    }
    @action
    clearStore(){
        this.init();
    }
}
export default ShareStore;
