import {create} from 'apisauce';
import {networkCallWithApisauce} from '../../utils/APIUtils';
import {apiMethods} from '../../constants/APIConstants';
import {ProductServiceEndpoint} from '../endpoint';

class ProductService{
  api
  constructor(){
     this.api=create({
            baseURL:"https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/"
     });
 }
 getProductsAPI(limit,offset){
     return networkCallWithApisauce(
            this.api,
            `products?limit=${limit}&offset=${offset}`,
            {},       
            apiMethods.get
        );
 }
}

export default ProductService;

// - https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/
//- v1/products/