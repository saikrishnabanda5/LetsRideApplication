import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import RequestModel from '../models/RequestModel';
class RequestStore {
    @observable getRequestAPIStatus
    @observable getRequestAPIError
    @observable rideDetails
    @observable noOfRequests
    requestAPIService
    constructor(requestService){
        this.requestAPIService=requestService;
        this.init();
    }
    @action
    init(){
        this.getRequestAPIStatus=API_INITIAL;
        this.getRequestAPIError=null;
        this.rideDetails=[];
        this.noOfRequests=0;
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
    setRequestAPIStatus(apiStatus){
        this.getRequestAPIStatus=apiStatus;
    }
    
    @action.bound
    setClickRideAPIStatus(apiStatus){
        this.getRideAPIStatus=200;
    }
    @action.bound
    setClickRideAPIError(error){
        this.getRideAPIError=400;
    }
    @action.bound
    setRequestAPIError(error){
        this.getRequestAPIError=error;
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
        const ridePromise = this.requestAPIService.getRequestAPI();
        return bindPromiseWithOnSuccess(ridePromise)
                .to(this.setClickRideAPIStatus,this.setClickRideAPIResponse)
                .catch(this.setClickRideAPIError);
    }
    @action
    clearStore(){
        this.init();
    }
}
export default RequestStore;
