import {observable,action,computed} from 'mobx';
import {API_INITIAL} from '@ib/api-constants';
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise';
import Moment from 'react-moment'
class ShareStore {
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    @observable selectedValue
    @observable selectedAsset
    @observable seatsAvailable
    @observable otherAssets
    @observable count
    @observable source
    @observable destination
    @observable startDate
    @observable isChecked
    @observable luggageCount
    @observable assetsCount
    @observable credentials
    @observable personDetails
    requestAPIService
    constructor(requestService){
        console.log("RService",requestService)
        this.requestAPIService=requestService;
        this.init();
    }
    @action
    init(){
        this.getProductListAPIStatus=API_INITIAL;
        this.getProductListAPIError=null;
        this.selectedValue='Share';
        this.selectedAsset="Select asset";
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
    }
    @action.bound
    setProductListResponse(response){
        this.response=response;
    }
    
    @action.bound
    setGetProductListAPIStatus(apiStatus){
        this.getProductListAPIStatus=apiStatus;
    }
    @action.bound
    setGetProductListAPIError(error){
        this.getProductListAPIError=error;
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
    onSelectShare(event){
        alert(1)
        this.selectedValue=event.target.value;
    }
    
    @action.bound
    onSelectAsset(event){
        this.selectedAsset=event.target.value;
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
    onChangePersonName(){
        this.personDetails =event.target.value;
    }
    @action.bound
    onChangeDateAndTime(event){
        // console.log("dt store",event.target);
        
    //   this.startDate = event.target.value;
        
        // this.startDataAndTime=new Date();
    }
    @action.bound
    getCredentials(source,destination,startDate,isChecked,seatsAvailable,luggageCount){
        alert(9);
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
        this.getCredentials(source,destination,startDate,isChecked,seatsAvailable,luggageCount);
        const requestPromise =this.requestAPIService.getRequestAPI(this.credentials);
        return bindPromiseWithOnSuccess(requestPromise)
                .to(this.setGetProductListAPIStatus,this.setProductListResponse)
                .catch(this.setGetProductListAPIError);
    }
    @action
    clearStore(){
        this.init();
    }
}
export default ShareStore;
