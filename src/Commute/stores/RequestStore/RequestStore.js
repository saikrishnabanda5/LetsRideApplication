import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import RequestModel from '../models/RequestModel';
import AssetRequestModel from '../models/AssetRequestModel';
class RequestStore {
    @observable getRideRequestAPIStatus
    @observable getAssetRequestAPIStatus
    @observable getMyRideRequestAPIStatus
    @observable getAssetAPIStatus
    
    @observable getRideRequestAPIError
    @observable getAssetRequestAPIError
    @observable getMyRideRequestAPIError
    @observable getAssetAPIError
    
    @observable rideDetails
    @observable assetDetails
    @observable noOfRequests
    @observable noOfAssetRequests
    
    @observable rideLimit
    @observable rideOffset
    @observable rideStatus
    
    @observable assetLimit
    @observable assetOffset
    @observable assetStatus
    @observable pageNumber
    
    requestAPIService
    constructor(requestService){
        this.requestAPIService=requestService;
        this.init();
    }
    @action
    init(){
        this.getRideRequestAPIStatus=API_INITIAL;
        this.getAssetRequestAPIStatus=API_INITIAL;
        this.getMyRideRequestAPIStatus =API_INITIAL;
        this.getAssetAPIStatus =API_INITIAL;
        
        this.getRideRequestAPIError=null;
        this.getAssetRequestAPIError = null;
        this.getMyRideRequestAPIError=null;
        this.getAssetAPIError=null;
        this.rideDetails=[];
        this.assetDetails=[];
        
        this.noOfRequests=0;
        this.noOfAssetRequests=0;
        this.rideLimit = 3;
        this.rideOffset = 0; 
        this.rideStatus = "Pending";
        
        this.assetLimit = 2;
        this.assetOffset =1; 
        this.assetStatus = "Confirmed";
        this.sortBy = "ASC";
        this.orderBy = "DESC";
        this.pageNumber=1;
    }
    @action.bound
    onClickLeftArrow(){
        if(this.pageNumber>1){ 
            this.pageNumber-=1;
            this.rideOffset =this.rideOffset-this.rideLimit;
            this.onMyRideRequests();
        }
    }
    @action.bound 
    onClickRightArrow(){
        if(this.pageNumber<Math.ceil(this.noOfRequests/this.rideLimit)){
            this.pageNumber+=1;
            this.rideOffset =this.rideLimit+this.rideOffset;
             this.onMyRideRequests();
        } 
    } 
    
    @action.bound
    onClickAssetLeftArrow(){
        if(this.pageNumber>1){
            this.pageNumber-=1;
            this.assetOffset =this.assetOffset-this.assetLimit;
            this.onMyAssetRequests();
        }
    }
    @action.bound 
    onClickAssetRightArrow(){
        if(this.pageNumber<Math.ceil(this.noOfAssetRequests/this.assetLimit)){
            this.pageNumber+=1;
            this.assetOffset =this.assetLimit+this.assetOffset;
             this.onMyAssetRequests();
        }
    }
    
    @action.bound
    setRideRequestAPIResponse(rideRequestResponse){
        
    }
    
    @action.bound
    setAssetRequestAPIResponse(assetRequestResponse){
    
    }
    
    @action.bound 
    setMyRideRequestAPIResponse(rideResponse){
        // console.log("assetResponse",rideResponse)
        this.rideDetails=[];
        this.noOfRequests = rideResponse.total_no_of_requests;
        rideResponse.ride_requests.forEach((object)=>{
            const requestModel = new RequestModel(object);
            // console.log("requestModel",requestModel)
            this.rideDetails.push(requestModel);
        });
    }
    
    @action.bound 
    setMyAssetAPIResponse(assetResponse){
        // console.log("assetResponse",assetResponse)
        this.assetDetails=[]; 
        this.noOfAssetRequests =assetResponse.total_no_of_requests;
        assetResponse.asset_requests.forEach((object)=>{
            const assetModel = new AssetRequestModel(object);
            this.assetDetails.push(assetModel);
        });
    }
    
    @action.bound
    setRideRequestAPIStatus(apiStatus){
        
        this.getRideRequestAPIStatus=apiStatus;
    }
    @action.bound
    setAssetRequestAPIStatus(apiStatus){
        
        this.getAssetRequestAPIStatus =apiStatus;
    }
    
    @action.bound
    setMyRideRequestAPIStatus(apiStatus){
        
        this.getMyRideRequestAPIStatus=apiStatus;
    }
    
    @action.bound
    setMyAssetAPIStatus(apiStatus){
        
        this.getAssetAPIStatus=apiStatus;
    }
    
    @action.bound
    setRideRequestAPIError(error){
        
        this.getRideRequestAPIError=error;
    }
    
    @action.bound
    setAssetRequestAPIError(error){
        
        this.getAssetRequestAPIError=error;
    }
    @action.bound
    setMyRideRequestAPIError(error){
        this.getMyRideRequestAPIError=error;
    }
    
    @action.bound
    setMyAssetAPIError(error){
        
        this.getAssetAPIError=error;
    }
    
    
    @action.bound
    onRideRequest(apiRequest){
        const requestPromise =this.requestAPIService.postRequestARideAPI(apiRequest);
        return bindPromiseWithOnSuccess(requestPromise)
                .to(this.setRideRequestAPIStatus,this.setRideRequestAPIResponse)
                .catch(this.setRideRequestAPIError);
    }
    @action.bound
    onClickAssetRequest(assetDetails){
        const assetRequestPromise =this.requestAPIService.postRequestAssetAPI(assetDetails);
        return bindPromiseWithOnSuccess(assetRequestPromise)
                .to(this.setAssetRequestAPIStatus,this.setAssetRequestAPIResponse)
                .catch(this.setAssetRequestAPIError);
    }
    @action.bound 
    onMyRideRequests(){
        const ridePromise = this.requestAPIService.getMyRideRequestAPI(this.rideLimit,this.rideOffset,this.rideStatus);
        return bindPromiseWithOnSuccess(ridePromise)
                .to(this.setMyRideRequestAPIStatus,this.setMyRideRequestAPIResponse)
                .catch(this.setMyRideRequestAPIError);
    }
    
    @action.bound
    onMyAssetRequests(){
        const assetPromise = this.requestAPIService.getMyAssetRequestAPI(this.assetLimit,this.assetOffset,this.assetStatus);
        return bindPromiseWithOnSuccess(assetPromise)
                .to(this.setMyAssetAPIStatus,this.setMyAssetAPIResponse)
                .catch(this.setMyAssetAPIError);
    }
    
    @action
    clearStore(){
        this.init();
    }
}
export default RequestStore;
