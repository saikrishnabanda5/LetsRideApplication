import {create} from 'apisauce';
import userCredentials from '../../fixtures/userLogin.json';

class AuthService{
  api:any
  constructor(){
     this.api=create({
            baseURL:"https://virtserver.swaggerhub.com/IB-HUBS2/lets_ride/1.0.0/"
     });
 }
 
  LogInAPI=()=>{
           return new Promise((resolve)=>{
         setTimeout(()=>{
           resolve(userCredentials);
          },1000);
     });
 }
}

export default AuthService;
// return new Promise(resolve => {
//   setTimeout(() => resolve(response), timeOut)
// })