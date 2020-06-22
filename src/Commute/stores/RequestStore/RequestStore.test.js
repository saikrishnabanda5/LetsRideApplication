/* global expect jest*/
import RequestService from '../../services/RequestService/RequestAPI.api';
import {API_INITIAL,API_FETCHING,API_SUCCESS,API_FAILED} from '@ib/api-constants';
// import {render,fireEvent,waitFor} from '@testing-library/react';
// import { screen } from '@testing-library/dom'
import RequestStore from '.';
import getResponse from "../../fixtures/postRideRequest.json";
import getRideResponse from "../../fixtures/getRideResponse.json";
import getAssetResponse from "../../fixtures/getAssetResponse.json";
describe("RequestStore Test",()=>{
    let requestAPI;
    let requestStore; 
    beforeEach(()=>{
        requestAPI = new RequestService();
        requestStore = new RequestStore(requestAPI);
    });
    it("should initialize request store",()=>{
        expect(requestStore.getRideRequestAPIStatus).toBe(API_INITIAL);
    });
    it("should test RequestRide data fetching state", () => {
    const mockLoadingPromise=new Promise(function(resolve,reject){});
    const mockRequestRideAPI = jest.fn();
    mockRequestRideAPI.mockReturnValue(mockLoadingPromise);
    requestAPI.postRequestARideAPI = mockRequestRideAPI;
    requestStore.onRideRequest();
    expect(requestStore.getRideRequestAPIStatus).toBe(API_FETCHING);
   });
    it("should check RequestRide success state",async()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){
            resolve(getResponse);
        });
        const mockRequestRideAPI = jest.fn();
        mockRequestRideAPI.mockReturnValue(mockLoadingPromise);
        requestAPI.postRequestARideAPI = mockRequestRideAPI;
        await requestStore.onRideRequest();
        expect(requestStore.getRideRequestAPIStatus).toEqual(API_SUCCESS);
    });
    
    it('should test RequestRide failure state',async ()=>{
       const mockLoadingPromise = new Promise(function(resolve,reject){
           reject(new Error("error"));
       });
       const mockRequestRideAPI = jest.fn();
       mockRequestRideAPI.mockReturnValue(mockLoadingPromise); 
         requestAPI.postRequestARideAPI=mockRequestRideAPI;
      await requestStore.onRideRequest();
       expect(requestStore.getRideRequestAPIStatus).toBe(API_FAILED);
   });
   
   
      it("should test RequestAssetTransport  fetching state", () => {
        const mockLoadingPromise=new Promise(function(resolve,reject){});
        const mockRequestRideAPI = jest.fn();
        mockRequestRideAPI.mockReturnValue(mockLoadingPromise);
        requestAPI.postRequestAssetAPI = mockRequestRideAPI;
        requestStore.onClickAssetRequest();
        expect(requestStore.getAssetRequestAPIStatus).toBe(API_FETCHING);
      });
    it("should check RequestAssetTransport success state",async()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){
            resolve(getResponse);
        });
        const mockRequestAssetAPI = jest.fn();
        mockRequestAssetAPI.mockReturnValue(mockLoadingPromise);
        requestAPI.postRequestAssetAPI = mockRequestAssetAPI;
        await requestStore.onClickAssetRequest();
        expect(requestStore.getAssetRequestAPIStatus).toEqual(API_SUCCESS);
    });
    
    it('should test RequestAssetTransport failure state',async ()=>{
       const mockLoadingPromise = new Promise(function(resolve,reject){
           reject(new Error("error"));
       });
       const mockRequestAssetAPI = jest.fn();
       mockRequestAssetAPI.mockReturnValue(mockLoadingPromise); 
         requestAPI.postRequestAssetAPI=mockRequestAssetAPI;
      await requestStore.onClickAssetRequest();
       expect(requestStore.getAssetRequestAPIStatus).toBe(API_FAILED);
   });
   
   
    it("should test my ride requests  fetching state", () => {
        const mockLoadingPromise=new Promise(function(resolve,reject){});
        const mockRequestRideAPI = jest.fn();
        mockRequestRideAPI.mockReturnValue(mockLoadingPromise);
        requestAPI.getMyRideRequestAPI = mockRequestRideAPI;
        requestStore.onMyRideRequests();
        expect(requestStore.getMyRideRequestAPIStatus).toBe(API_FETCHING);
      });
    it("should check my ride requests success state",async()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){
            resolve(getRideResponse);
        });
        const mockRequestAssetAPI = jest.fn();
        mockRequestAssetAPI.mockReturnValue(mockLoadingPromise);
        requestAPI.getMyRideRequestAPI = mockRequestAssetAPI;
        await requestStore.onMyRideRequests();
        expect(requestStore.getMyRideRequestAPIStatus).toEqual(API_SUCCESS);
    });
    
    it('should test my ride requests failure state',async   ()=>{
       const mockLoadingPromise = new Promise(function(resolve,reject){
           reject(new Error("error"));
       });
       const mockRequestAssetAPI = jest.fn();
       mockRequestAssetAPI.mockReturnValue(mockLoadingPromise); 
         requestAPI.getMyRideRequestAPI=mockRequestAssetAPI;
      await requestStore.onMyRideRequests();
       expect(requestStore.getMyRideRequestAPIStatus).toBe(API_FAILED);
   });
   
   
   it("should test my asset requests  fetching state", () => {
        const mockLoadingPromise=new Promise(function(resolve,reject){});
        const mockRequestRideAPI = jest.fn();
        mockRequestRideAPI.mockReturnValue(mockLoadingPromise);
        requestAPI.getMyAssetRequestAPI = mockRequestRideAPI;
        requestStore.onMyAssetRequests();
        expect(requestStore.getAssetAPIStatus).toBe(API_FETCHING);
      });
    it("should check my asset requests success state",async()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){
            resolve(getAssetResponse);
        });
        const mockRequestAssetAPI = jest.fn();
        mockRequestAssetAPI.mockReturnValue(mockLoadingPromise);
        requestAPI.getMyAssetRequestAPI = mockRequestAssetAPI;
        await requestStore.onMyAssetRequests();
        expect(requestStore.getAssetAPIStatus).toEqual(API_SUCCESS);
    });
    
    it('should test my asset requests failure state',async   ()=>{
       const mockLoadingPromise = new Promise(function(resolve,reject){
           reject(new Error("error"));
       });
       const mockRequestAssetAPI = jest.fn();
       mockRequestAssetAPI.mockReturnValue(mockLoadingPromise); 
         requestAPI.getMyAssetRequestAPI=mockRequestAssetAPI;
      await requestStore.onMyAssetRequests();
       expect(requestStore.getAssetAPIStatus).toBe(API_FAILED);
   });
    
    it("should check left button for ride",()=>{
        requestStore.pageNumber = 5;
        requestStore.onClickLeftArrow();
        expect(requestStore.pageNumber).toBe(4);
        
    });
    
    it("should check right button for ride",()=>{
        requestStore.noOfRequests =5;
        requestStore.rideLimit = 2;
        requestStore.onClickRightArrow();
        
        expect(requestStore.pageNumber).toBe(2);
    });
    
    it("should check left button for asset",()=>{
        requestStore.pageNumber = 5;
        requestStore.onClickAssetLeftArrow();
        expect(requestStore.pageNumber).toBe(4);
        
    });
    
    it("should check right button for asset",()=>{
        requestStore.noOfAssetRequests =5;
        requestStore.assetLimit = 2;
        requestStore.onClickAssetRightArrow();
        
        expect(requestStore.pageNumber).toBe(2);
    });
    
    it("should clear the store",()=>{
        requestStore.clearStore();
        expect(requestStore.isChecked).toBe(undefined);
    });
}); 
