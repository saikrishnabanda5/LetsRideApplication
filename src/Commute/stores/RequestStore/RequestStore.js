import {observable,action,computed} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import RequestService from '../../services/RequestService/RequestAPI.api.js';
class RequestStore {
    @observable getRequestAPIStatus
    @observable getRequestAPIError
    @observable selectedValue
    @observable selectedAsset
    @observable seatsAvailable
    @observable otherAssets
    @observable selectSensitivity
    @observable count
    @observable source
    @observable destination
    @observable startDate
    @observable isChecked
    @observable luggageCount
    @observable assetsCount
    @observable credentials
    @observable personDetails
    @observable errorMessage
    requestAPIService
    constructor(requestService){
        this.requestAPIService=requestService;
        this.init();
    }
    @action
    init(){
        this.getRequestAPIStatus=API_INITIAL;
        this.getRequestAPIError=null;
        this.selectedValue='REQUEST';
        this.selectedAsset="Select asset";
        this.selectSensitivity="Sensitive";
        this.isChecked=false;
        this.startDate=new Date();
        this.seatsAvailable=0;
        this.luggageCount=0;
        this.assetsCount=0;
        this.response='';
        this.source ='';
        this.destination ='';
        this.otherAssets ="";
        this.personDetails='';
        this.credentials={};
        this.errorMessage='';
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
   incrementCounter() {
      this.seatsAvailable = this.seatsAvailable + 1;
   }

   @action.bound
   decrementCounter() {
       if(this.seatsAvailable>0){
      this.seatsAvailable = this.seatsAvailable - 1;
       }
   }
    @action.bound
   incrementLuggageCounter() {
      this.luggageCount = this.luggageCount + 1;
   }

   @action.bound
   decrementLuggageCounter() {
       if(this.luggageCount>0){
        this.luggageCount = this.luggageCount - 1;
       }
   }
   
    @action.bound
   incrementAssetsCount() {
      this.assetsCount = this.assetsCount + 1;
   }

   @action.bound
    decrementAssetsCount() {
       if(this.assetsCount>0){
        this.assetsCount = this.assetsCount - 1;
       }
   }
    @action.bound
    onSelectRequest(event){
        this.selectedValue=event.target.value;
    }
    
    @action.bound
    onSelectAsset(event){
        this.selectedAsset=event.target.value;
    }
    
    @action.bound
    onSelectSensitivity(event){
        this.selectSensitivity=event.target.value;
    }
    
    onEnterKeyPress=(event)=>{
        if(event.key==="Enter"){
            this.onClickRequest();
        }
    }
    @action.bound
    onChangeSource(event){
        this.source = event.target.value;
    }
    
    @action.bound
    onChangeDestination(event){
        this.destination = event.target.value;
    }
    @action.bound
    onClickCheckBox(event){
        if(this.isChecked){
            this.isChecked =false;
        }
        else{
            this.isChecked =true;
        }
    }
    
    @action.bound
    onChangeUserValue(event){
        this.otherAssets = event.target.value;   
    }
    onChangePersonName(event){
        this.personDetails =event.target.value;
    }
    @action.bound
    onChangeDateAndTime(event){
        // console.log("dt store",event.target);
        
    //   this.startDate = event.target.value;
        
        // this.startDataAndTime=new Date();
    }
    @action.bound
    validation(source,destination,startDate,isChecked,seatsAvailable,luggageCount){
        console.log(source,destination,startDate,isChecked,seatsAvailable,luggageCount);
        if(source.length>0&&destination.length>0&&seatsAvailable.length>=1&&luggageCount.length>=1){
            this.errorMessage='';
            this.getCredentials(source,destination,startDate,isChecked,seatsAvailable,luggageCount);
        }
        else if(source.length===0){
             this.errorMessage="Required";
        }
        else if(destination.length===0){
             this.errorMessage="Required";   
        }
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
    onClickRequest(source,destination,startDate,isChecked,seatsAvailable,luggageCount){
        this.validation(source,destination,startDate,isChecked,seatsAvailable,luggageCount);
        this.source ='';
        this.destination ='';
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
