import {create} from 'apisauce';
import userCredentials from '../../fixtures/userLogin.json';
class AuthService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://virtserver.swaggerhub.com/IB-HUBS2/lets_ride/1.0.0/"
     });
 }
 
  LogInAPI=()=>{
     return new Promise((res)=>{
         setTimeout(()=>
         {res(userCredentials),1000});
     });
 }
}

export default AuthService;