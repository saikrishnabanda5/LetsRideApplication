import {create} from 'apisauce';
import credentials from '../../fixtures/getRideResponse.json';
import matchingRides from '../../fixtures/getMatchingRides.json';
import matchingAssets from '../../fixtures/getMatchingAssets.json';
class ShareRideService{
  api;
  
  constructor(){
     this.api=create({
            baseURL:"https://virtserver.swaggerhub.com/IB-HUBS2/lets_ride/1.0.0/"
     });
 }
 getMatchingRides=(limit,offset)=>{
  const newMatchingRides = matchingRides.matching_asset_requests.slice(offset,offset+limit);
    return new Promise((res)=>{
          setTimeout(()=>res(newMatchingRides),500);
        }
     );
 }
  getMatchingAssets=()=>{
   
   return new Promise((res)=>{
         setTimeout(()=>res(matchingAssets),500);
     });
     }
     
}
export default ShareRideService;