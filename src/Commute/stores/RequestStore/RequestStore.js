import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import RequestModel from '../models/RequestModel';
import AssetRequestModel from '../models/AssetRequestModel'
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
        this.rideDetails=[];
        this.noOfRequests =rideResponse.total_no_of_requests;
        rideResponse.ride_requests.forEach((object)=>{
            const requestModel = new RequestModel(object);
            this.rideDetails.push(requestModel);
        });
    }
    
    @action.bound 
    setClickAssetAPIResponse(assetResponse){
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
        this.getMyRideRequestAPIStatus=apiStatus;
    }
    
    @action.bound
    setClickAssetAPIStatus(apiStatus){
        this.getAssetAPIStatus=apiStatus;
    }
    
    @action.bound
    setRideRequestAPIError(error){
        console.log("rideRequestResponse-error",error);
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
    setClickAssetAPIError(error){
        this.getAssetAPIError=error;
    }
    
    @action.bound
    getCredentials(source,destination,startDate,isChecked,seatsAvailable,luggageCount){
        this.credentials={
            "source":source,
            "destination":destination,
            "dateAndTime":startDate,
            "isChecked":  isChecked,
            "seatsAvailability":seatsAvailable,
            "luggageCount":luggageCount
            };
    }
    
    
    @action.bound
    onRideRequest(apiRequest){
        alert("onRideRequest")
        const requestPromise =this.requestAPIService.getRequestARideAPI(apiRequest);
        return bindPromiseWithOnSuccess(requestPromise)
                .to(this.setRideRequestAPIStatus,this.setRideRequestAPIResponse)
                .catch(this.setRideRequestAPIError);
    }
    @action.bound
    onClickAssetRequest(assetDetails){
        console.log("assetDetails",assetDetails)
        const assetRequestPromise =this.requestAPIService.getRequestAssetAPI(assetDetails);
        return bindPromiseWithOnSuccess(assetRequestPromise)
                .to(this.setAssetRequestAPIStatus,this.setAssetRequestAPIResponse)
                .catch(this.setAssetRequestAPIError);
    }
    @action.bound
    onMyRideRequests(){
        const ridePromise = this.requestAPIService.getMyRideRequestAPI();
        return bindPromiseWithOnSuccess(ridePromise)
                .to(this.setMyRideRequestAPIStatus,this.setMyRideRequestAPIResponse)
                .catch(this.setMyRideRequestAPIError);
    }
    
    @action.bound
    onClickAsset(){
        const assetPromise = this.requestAPIService.getAssetRequestAPI();
        return bindPromiseWithOnSuccess(assetPromise)
                .to(this.setClickAssetAPIStatus,this.setClickAssetAPIResponse)
                .catch(this.setClickAssetAPIError);
    }
    
    @action
    clearStore(){
        this.init();
    }
}
export default RequestStore;
