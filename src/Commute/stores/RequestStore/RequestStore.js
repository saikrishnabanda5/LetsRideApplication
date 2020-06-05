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
        this.rideLimit = 2;
        this.rideOffset =1; 
        this.rideStatus = "";
    }
    @action.bound
    setRideRequestAPIResponse(rideRequestResponse){
        console.log("rideRequestResponse",rideRequestResponse);
    }
    
    @action.bound
    setAssetRequestAPIResponse(assetRequestResponse){
        console.log("assetRequestResponse",assetRequestResponse);
    }
    
    @action.bound 
    setMyRideRequestAPIResponse(rideResponse){
        console.log("my - request - ride ",rideResponse)
        this.rideDetails=[];
        this.noOfRequests = rideResponse.total_no_of_requests;
        rideResponse.ride_requests.forEach((object)=>{
            const requestModel = new RequestModel(object);
            this.rideDetails.push(requestModel);
        });
    }
    
    @action.bound 
    setMyAssetAPIResponse(assetResponse){
        console.log("my - asset - ride ",assetResponse)
        this.assetDetails=[]; 
        this.noOfAssetRequests =assetResponse.total_no_of_requests;
        assetResponse.asset_requests.forEach((object)=>{
            const assetModel = new AssetRequestModel(object);
            this.assetDetails.push(assetModel);
        });
    }
    
    @action.bound
    setRideRequestAPIStatus(apiStatus){
        console.log("rideRequestResponse-apiStatus",apiStatus);
        this.getRideRequestAPIStatus=apiStatus;
    }
    @action.bound
    setAssetRequestAPIStatus(apiStatus){
        console.log("setAssetRequestAPIStatus-apiStatus",apiStatus);
        this.getAssetRequestAPIStatus =apiStatus;
    }
    
    @action.bound
    setMyRideRequestAPIStatus(apiStatus){
        console.log("my - request - ride - apiStatus",apiStatus);
        this.getMyRideRequestAPIStatus=apiStatus;
    }
    
    @action.bound
    setMyAssetAPIStatus(apiStatus){
        this.getAssetAPIStatus=apiStatus;
    }
    
    @action.bound
    setRideRequestAPIError(error){
        console.log("rideRequestResponse-error",error);
        this.getRideRequestAPIError=error;
    }
    
    @action.bound
    setAssetRequestAPIError(error){
         console.log("setAssetRequestAPIError-error",error);
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
        const assetPromise = this.requestAPIService.getMyAssetRequestAPI(this.rideLimit,this.rideOffset);
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
