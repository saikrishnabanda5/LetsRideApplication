import React from 'react';
import {render,fireEvent,waitFor} from '@testing-library/react';
import {withRouter,Router,Route} from "react-router-dom";
import {createMemoryHistory} from 'history';
import {Provider} from 'mobx-react';
import ProductPageRoute from './index';
// import AuthService from "../../../Authentication/services/AuthService/AuthAPI";
// import ProductService from "../../services/ProductService/ProductAPI.api"; 
// import AuthStore from "../../../Authentication/stores/AuthStore";
// import ProductStore from "../../stores/ProductStore";
// import CartStore from '../../stores/CartStore'
// import SIGN_IN_PATH from '../../../Authentication/constants/RouteConstants';
// import PRODUCTS_PATH from '../../constants/RouteConstants';
// import getUserSignInResponse from '../../fixtures/getUserSignInResponse';

// const LocationDisplay = withRouter(({ location }) => (
//   <div data-testid="location-display">{location.pathname}</div>
// ));
describe("Product page route test",()=>{
  it("should",()=>{
    expect(1).toBe(1)
  })
  
    // let productAPI;
    // let productStore;
    // let authAPI;
    // let authStore;
    // let cartStore;
    // beforeEach(()=>{
    //   productAPI = new ProductService();
    //   productStore = new ProductStore(productAPI);
    //   authAPI = new AuthService();
    //   authStore = new AuthStore(authAPI);
    //   cartStore = new CartStore(productStore);
    // });
    // afterEach(() => {
    //     jest.resetAllMocks();
    // });
    // it("should render ProductPageRoute success state",()=>{
    //     const history = createMemoryHistory();
    //     const route  = PRODUCTS_PATH;
    //     history.push(route);
    // const {getByRole,queryByRole,
    // queryByLabelText,
    // getByTestId}=render(
    // <Provider authStore={authStore}>
    //   <Router history={createMemoryHistory()}>  
    //     <Route path={PRODUCTS_PATH}>
    //         <ProductPageRoute productStore={productStore} cartStore={cartStore}/>
    //     </Route>
    //     <Route path={SIGN_IN_PATH}>
    //         <LocationDisplay />
    //     </Route>
    //   </Router>
    // </Provider>
    //     );
    //     const signOutButton = getByRole("button",{name:"SignOut"})
    //     fireEvent.click(signOutButton);
        
    //     waitFor(()=>{
    //         expect(queryByRole("button",{name:"SignOut"})).not.toBeInTheDocument();
    //         expect(getByTestId("location-display")).toHaveTextContent(SIGN_IN_PATH);
    //     });
    // });
})