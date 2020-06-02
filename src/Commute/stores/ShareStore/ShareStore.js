import {observable,action} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
class RequestStore {
    @observable getRequestAPIStatus
    @observable getRequestAPIError
    @observable response
    requestAPIService
    constructor(requestService){
        this.requestAPIService=requestService;
        this.init();
    }
    @action
    init(){
        this.getRequestAPIStatus=API_INITIAL;
        this.getRequestAPIError=null;
        this.response='';
    }
    @action.bound
    setRequestAPIResponse(response){
        this.response=response;
    }
    
    @action.bound
    setRequestAPIStatus(apiStatus){
        this.getRequestAPIStatus=apiStatus;
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
    onShareTravelInfo(){
        alert("shar info")
    }
    @action.bound
    onClickRideShare(source,destination,startDate,isChecked,seatsAvailable,luggageCount){
        alert("cluck")
        this.validation(source,destination,startDate,isChecked,seatsAvailable,luggageCount);
        const requestPromise =this.requestAPIService.getRequestAPI(this.credentials);
        return bindPromiseWithOnSuccess(requestPromise)
                .to(this.setRequestAPIStatus,this.setRequestAPIResponse)
                .catch(this.setRequestAPIError);
    }
    @action
    clearStore(){
        this.init();
    }
}
export default RequestStore;
