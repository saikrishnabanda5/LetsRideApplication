import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import RequestModel from '../models/RequestModel';
import AssetRequestModel from '../models/AssetRequestModel'
class RequestStore {
    @observable getRequestAPIStatus
    @observable getRideAPIStatus
    @observable getAssetAPIStatus
    
    @observable getRequestAPIError
    @observable getRideAPIError
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
        this.getRequestAPIStatus=API_INITIAL;
        this.getRideAPIStatus =API_INITIAL;
        this.getAssetAPIStatus =API_INITIAL;
        
        this.getRequestAPIError=null;
        this.getRideAPIError=null;
        this.getAssetAPIError=null;
        this.rideDetails=[];
        this.assetDetails=[];
        this.noOfRequests=0;
        this.noOfAssetRequests=0;
    }
    @action.bound 
    setClickRideAPIResponse(rideResponse){
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
    setRequestAPIStatus(apiStatus){
        this.getRequestAPIStatus=apiStatus;
    }
    
    @action.bound
    setClickRideAPIStatus(apiStatus){
        this.getRideAPIStatus=apiStatus;
    }
    
    @action.bound
    setClickAssetAPIStatus(apiStatus){
        this.getAssetAPIStatus=apiStatus;
    }
    
    @action.bound
    setRequestAPIError(error){
        this.getRequestAPIError=error;
    }
    
    @action.bound
    setClickRideAPIError(error){
        this.getRideAPIError=error;
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
    onClickAssetRequest(){
        alert("assetRequest")
    }
    
    @action.bound
    onClickRequest(source,destination,startDate,isChecked,seatsAvailable,luggageCount){
        // this.validation(source,destination,startDate,isChecked,seatsAvailable,luggageCount);
        const requestPromise =this.requestAPIService.getRequestAPI(this.credentials);
        return bindPromiseWithOnSuccess(requestPromise)
                .to(this.setRequestAPIStatus,this.setRequestAPIResponse)
                .catch(this.setRequestAPIError);
    }
    @action.bound
    onClickRide(){
        const ridePromise = this.requestAPIService.getRideRequestAPI();
        return bindPromiseWithOnSuccess(ridePromise)
                .to(this.setClickRideAPIStatus,this.setClickRideAPIResponse)
                .catch(this.setClickRideAPIError);
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
