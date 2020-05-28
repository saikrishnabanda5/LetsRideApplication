/* global expect jest*/
import ProductService from '../../services/ProductService/ProductAPI.api';
import {API_INITIAL,API_FETCHING,API_SUCCESS,API_FAILED} from '@ib/api-constants';
import ProductStore from '.';
import getUserSignInResponse from "../../fixtures/getUserSignInResponse.json";
describe("ProductStore Test",()=>{
    let productAPI;
    let productStore; 
    beforeEach(()=>{
        productAPI = new ProductService();
        productStore = new ProductStore(productAPI);
    });
    it("should initialize product store",()=>{
        expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
        expect(productStore.getProductListAPIError).toBe(null);
        expect(productStore.productList).toStrictEqual([]);
        expect(productStore.sizeFilter).toStrictEqual([]);
        expect(productStore.sortBy).toStrictEqual('SELECT');
    });
    it("should check products fetching state",()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){});
        const mockProductsAPI = jest.fn();
        mockProductsAPI.mockReturnValue(mockLoadingPromise);
        productAPI.getProductsAPI = mockProductsAPI;
        productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);
    });
    it("should check products success state",async()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){
            resolve(getUserSignInResponse);
        });
        const mockProductsAPI = jest.fn();
        mockProductsAPI.mockReturnValue(mockLoadingPromise);
        productAPI.getProductsAPI = mockProductsAPI;
        await productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toEqual(API_SUCCESS);
    });
    it("should check products failure state",async()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){
            reject(new Error("error")); 
        });
        const mockProductsAPI = jest.fn();
        mockProductsAPI.mockReturnValue(mockLoadingPromise);
        productAPI.getProductsAPI = mockProductsAPI;
        await productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
        expect(productStore.getProductListAPIError).toBe("error");
    });
    it("should test sorted and filtered products",()=>{
        productStore.sortBy==="ASCENDING";
    });
    it("should test the selected size",()=>{
        const mockSelectedSize="X";
        productStore.onSelectSize(mockSelectedSize);
        expect(productStore.sizeFilter.length).toBe(1);
        productStore.onSelectSize(mockSelectedSize);
        expect(productStore.sizeFilter.length).toBe(0);
    });
    it("should clear the store",()=>{
        productStore.clearStore();
        expect(productStore.getProductListAPIStatus).toBe(API_INITIAL);
    });
}) 