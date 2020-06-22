/* global expect jest*/
import ShareService from '../../services/ShareService/ShareAPI.api';
import {API_INITIAL,API_FETCHING,API_SUCCESS,API_FAILED} from '@ib/api-constants';
import { shallow } from 'enzyme';
// import {render,fireEvent,waitFor} from '@testing-library/react';
// import { screen } from '@testing-library/dom'
import ShareStore from '.';
import getResponse from "../../fixtures/postRideRequest.json";
import getMatchingRides from "../../fixtures/getMatchingRides.json";
import getMatchingAssets from "../../fixtures/getMatchingAssets.json";
describe("shareStore Test",()=>{
    let shareAPI;
    let shareStore; 
    beforeEach(()=>{
        shareAPI = new ShareService();
        shareStore = new ShareStore(shareAPI);
    });
    it("should initialize share store",()=>{
        expect(shareStore.getShareRideAPIStatus).toBe(API_INITIAL);
    });
    it("should test ShareRide fetching state", () => {
    const mockLoadingPromise=new Promise(function(resolve,reject){});
    const mockShareRideAPI = jest.fn();
    mockShareRideAPI.mockReturnValue(mockLoadingPromise);
    shareAPI.postShareRideAPI = mockShareRideAPI;
    shareStore.onShareRide();
    expect(shareStore.getShareRideAPIStatus).toBe(API_FETCHING);
   });
    it("should check ShareRide success state",async()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){
            resolve(getResponse);
        });
        const mockShareRideAPI = jest.fn();
        mockShareRideAPI.mockReturnValue(mockLoadingPromise);
        shareAPI.postShareRideAPI = mockShareRideAPI;
        await shareStore.onShareRide();
        expect(shareStore.getShareRideAPIStatus).toEqual(API_SUCCESS);
    });
    
    it('should test ShareRide failure state',async ()=>{
       const mockLoadingPromise = new Promise(function(resolve,reject){
           reject(new Error("error"));
       });
       const mockShareRideAPI = jest.fn();
       mockShareRideAPI.mockReturnValue(mockLoadingPromise); 
         shareAPI.postShareRideAPI=mockShareRideAPI;
      await shareStore.onShareRide();
       expect(shareStore.getShareRideAPIStatus).toBe(API_FAILED);
   });
   
   
      it("should test ShareTravelDetails  fetching state", () => {
        const mockLoadingPromise=new Promise(function(resolve,reject){});
        const mockShareTravelAPI = jest.fn();
        mockShareTravelAPI.mockReturnValue(mockLoadingPromise);
        shareAPI.getShareTravelInfoAPI = mockShareTravelAPI;
        shareStore.onShareTravelInfo();
        expect(shareStore.getShareTravelInfoAPIStatus).toBe(API_FETCHING);
      });
    it("should check ShareTravelDetails success state",async()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){
            resolve(getResponse);
        });
        const mockShareTravelAPI = jest.fn();
        mockShareTravelAPI.mockReturnValue(mockLoadingPromise);
        shareAPI.getShareTravelInfoAPI = mockShareTravelAPI;
        await shareStore.onShareTravelInfo();
        expect(shareStore.getShareTravelInfoAPIStatus).toEqual(API_SUCCESS);
    });
    
    it('should test ShareTravelDetails failure state',async ()=>{
       const mockLoadingPromise = new Promise(function(resolve,reject){
           reject(new Error("error"));
       });
       const mockShareTravelAPI = jest.fn();
       mockShareTravelAPI.mockReturnValue(mockLoadingPromise); 
         shareAPI.getShareTravelInfoAPI=mockShareTravelAPI;
      await shareStore.onShareTravelInfo();
       expect(shareStore.getShareTravelInfoAPIStatus).toBe(API_FAILED);
   });
   
   
    it("should test matching Rides  fetching state", () => {
        const mockLoadingPromise=new Promise(function(resolve,reject){});
        const mockRequestRideAPI = jest.fn();
        mockRequestRideAPI.mockReturnValue(mockLoadingPromise);
        shareAPI.getMatchingRides = mockRequestRideAPI;
        shareStore.onMatchingRides();
        expect(shareStore.getMatchingRideAPIStatus).toBe(API_FETCHING);
      });
    it("should check matching Rides success state",async()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){
            resolve(getMatchingRides);
        });
        const mockRequestAssetAPI = jest.fn();
        mockRequestAssetAPI.mockReturnValue(mockLoadingPromise);
        shareAPI.getMatchingRides = mockRequestAssetAPI;
        await shareStore.onMatchingRides();
        expect(shareStore.getMatchingRideAPIStatus).toEqual(API_SUCCESS);
    });
    
    it('should test matching Rides failure state',async   ()=>{
       const mockLoadingPromise = new Promise(function(resolve,reject){
           reject(new Error("error"));
       });
       const mockRequestAssetAPI = jest.fn();
       mockRequestAssetAPI.mockReturnValue(mockLoadingPromise); 
         shareAPI.getMatchingRides=mockRequestAssetAPI;
      await shareStore.onMatchingRides();
       expect(shareStore.getMatchingRideAPIStatus).toBe(API_FAILED);
   });
   
   
   it("should test matching Assets  fetching state", () => {
        const mockLoadingPromise=new Promise(function(resolve,reject){});
        const mockRequestRideAPI = jest.fn();
        mockRequestRideAPI.mockReturnValue(mockLoadingPromise);
        shareAPI.getMatchingAssets = mockRequestRideAPI;
        shareStore.onMatchingAssets();
        expect(shareStore.getMatchingAssetAPIStatus).toBe(API_FETCHING);
      });
    it("should check matching Assets success state",async()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){
            resolve(getMatchingAssets);
        });
        const mockRequestAssetAPI = jest.fn();
        mockRequestAssetAPI.mockReturnValue(mockLoadingPromise);
        shareAPI.getMatchingAssets = mockRequestAssetAPI;
        await shareStore.onMatchingAssets();
        expect(shareStore.getMatchingAssetAPIStatus).toEqual(API_SUCCESS);
    });
    
    it('should test matching Assets failure state',async   ()=>{
       const mockLoadingPromise = new Promise(function(resolve,reject){
           reject(new Error("error"));
       });
       const mockRequestAssetAPI = jest.fn();
       mockRequestAssetAPI.mockReturnValue(mockLoadingPromise); 
         shareAPI.getMatchingAssets=mockRequestAssetAPI;
      await shareStore.onMatchingAssets();
       expect(shareStore.getMatchingAssetAPIStatus).toBe(API_FAILED);
   });
    
    it("should check left button for ride",()=>{
        shareStore.pageNumber = 5;
        shareStore.onClickRideLeftArrow();
        expect(shareStore.pageNumber).toBe(4);
        
    });
    
    it("should check right button for ride",()=>{
        shareStore.noOfMatchedRides =5;
        shareStore.matchingAssetLimit = 2;
        shareStore.onClickRideRightArrow();
        
        expect(shareStore.pageNumber).toBe(2);
    });
    
    it("should check left button for asset",()=>{
        shareStore.pageNumber = 5;
        shareStore.onClickAssetLeftArrow();
        expect(shareStore.pageNumber).toBe(4);
        
    });
    
    it("should check right button for asset",()=>{
        shareStore.noOfMatchedAssets =5;
        shareStore.matchingAssetLimit = 2;
        shareStore.onClickAssetRightArrow();
        
        expect(shareStore.pageNumber).toBe(2);
    });
    it("should clear the store",()=>{
        shareStore.clearStore();
        expect(shareStore.isChecked).toBe(undefined);
    });
}); 
