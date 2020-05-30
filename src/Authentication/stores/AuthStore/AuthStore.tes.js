/* global expect jest*/
import Cookie from 'js-cookie';
import { API_SUCCESS, API_FAILED, API_FETCHING,API_INITIAL} from "@ib/api-constants";
import AuthService from '../../services/AuthService/AuthAPI';
import getUserSignInResponse from "../../fixtures/getUserSignInResponse.json";
import AuthStore from '.';

describe('AuthStore Test',()=>{
    let authAPI;  
    let authStore;
    beforeEach(()=>{
        authAPI = new AuthService();
        authStore = new AuthStore(authAPI);
    });
    
   it("should test initialising auth store", () => {
        expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
        expect(authStore.getUserSignInAPIError).toBe(null);
  });
  it("should test userSignInAPI data fetching state", () => {
    const mockLoadingPromise=new Promise(function(resolve,reject){});
    const mockSignInAPI = jest.fn();
    mockSignInAPI.mockReturnValue(mockLoadingPromise);
    authAPI.signInAPI = mockSignInAPI;
    authStore.userSignIn();
    expect(authStore.getUserSignInAPIStatus).toBe(API_FETCHING);
  });
  it("should test userSignInAPI data success state",async()=>{
      const mockLoadingPromise = new Promise(function(resolve,reject){
          resolve(getUserSignInResponse);
      });
     const mockSignInAPI = jest.fn();
      mockSignInAPI.mockReturnValue(mockLoadingPromise);
      authAPI.signInAPI=mockSignInAPI;
    await authStore.userSignIn();
      expect(authStore.getUserSignInAPIStatus).toBe(API_SUCCESS);
  });
   it('should test signInAPI data failure state',async ()=>{
       const mockLoadingPromise = new Promise(function(resolve,reject){
           reject(new Error("error"));
       });
       const mockSignInAPI = jest.fn();
       mockSignInAPI.mockReturnValue(mockLoadingPromise); 
       authAPI.signInAPI=mockSignInAPI;
      await authStore.userSignIn();
       expect(authStore.getUserSignInAPIStatus).toBe(API_FAILED);
       expect(authStore.getUserSignInAPIError).toBe("error");
   });
   it("should test user sign-out", () => {
    authStore.userSignOut();
    expect(authStore.getUserSignInAPIStatus).toBe(API_INITIAL);
    expect(authStore.getUserSignInAPIError).toBe(null);
  });
 
});

