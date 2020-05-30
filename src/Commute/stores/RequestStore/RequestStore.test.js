/* global expect jest*/
import RequestService from '../../services/RequestService/RequestAPI.api';
import {API_INITIAL,API_FETCHING,API_SUCCESS,API_FAILED} from '@ib/api-constants';
import {render,fireEvent,waitFor} from '@testing-library/react';
import { screen } from '@testing-library/dom'
import RequestStore from '.';
import getResponse from "../../fixtures/getResponse.json";
describe("ProductStore Test",()=>{
    let requestAPI;
    let requestStore; 
    beforeEach(()=>{
        requestAPI = new RequestService();
        requestStore = new RequestStore(requestAPI);
    });
    it("should initialize request store",()=>{
        expect(requestStore.isChecked).toBe(false);
    });
    it("should check request success state",async()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){
            resolve(getResponse);
        });
        const mockProductsAPI = jest.fn();
        mockProductsAPI.mockReturnValue(mockLoadingPromise);
        requestAPI.getRequestAPI = mockProductsAPI;
        await requestAPI.onClickRequest;
        expect(requestAPI.getRequestAPIStatus).toEqual(undefined);
    });
    // it("should check products failure state",async()=>{
    //     const mockLoadingPromise=new Promise(function(resolve,reject){
    //         reject(new Error("error")); 
    //     });
    //     const mockProductsAPI = jest.fn();
    //     mockProductsAPI.mockReturnValue(mockLoadingPromise);
    //     productAPI.getProductsAPI = mockProductsAPI;
    //     await productStore.getProductList();
    //     expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
    //     expect(productStore.getProductListAPIError).toBe("error");
    // });
    // it("should test sorted and filtered products",()=>{
    //     productStore.sortBy==="ASCENDING";
    // });
    it("should test incrementCounter and decrementCounter",()=>{
        const mockincrement=1;
        const mockdecrement=0;
        requestStore.incrementCounter(mockincrement);
        expect(requestStore.seatsAvailable).toBe(mockincrement);
        
        requestStore.decrementCounter(mockdecrement);
        expect(requestStore.seatsAvailable).toBe(mockdecrement);
        
        requestStore.incrementLuggageCounter(mockincrement);
        expect(requestStore.luggageCount).toBe(mockincrement);
        
        requestStore.decrementLuggageCounter(mockdecrement);
        expect(requestStore.luggageCount).toBe(mockdecrement);
        
        requestStore.incrementAssetsCount(mockincrement);
        expect(requestStore.assetsCount).toBe(mockincrement);
        
        requestStore.decrementAssetsCount(mockdecrement);
        expect(requestStore.assetsCount).toBe(mockdecrement);
    });
    it("should test selecting type of request",()=>{
        // const mockvalue="Request";
        // const selectElement = screen.getByDisplayValue(mockvalue);
        // requestStore.onSelectRequest(selectElement);
        // expect(requestStore.selectedValue).toBe(selectElement);
        
        
    });
    
    it("should clear the store",()=>{
        requestStore.clearStore();
        expect(requestStore.isChecked).toBe(false);
    });
}); 

// const username = "sai-krishna";
            // const usernameField = getByPlaceholderText("Username");
            // const signInButton = getByRole("button",{name:"Sign"});
            // fireEvent.change(usernameField,{target:{value:username}});
            // fireEvent.click(signInButton);
            // getByText(/Please enter password/i);