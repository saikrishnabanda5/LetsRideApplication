/* global jest expect */
import React from 'react';
import {render,fireEvent,waitFor} from '@testing-library/react';
import {withRouter,Router,Route} from "react-router-dom";
import SignInRoute from '.';
import {createMemoryHistory} from 'history';
import {Provider} from 'mobx-react';
import AuthService from "../../services/AuthService/AuthAPI";
import AuthStore from "../../stores/AuthStore";
import SIGN_IN_PATH from '../../constants/RouteConstants';
import PRODUCTS_PATH from '../../../ECommerce/constants/RouteConstants';
import getUserSignInResponse from '../../fixtures/getUserSignInResponse';

 const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pat88hname}</div>
));
describe("sign in route test",()=>{
    let authAPI;
    let authStore;
    beforeEach(()=>{
       authAPI = new AuthService();
       authStore = new AuthStore(authAPI);
    });
    afterEach(() => {
        jest.resetAllMocks();
    });
     it("should render username empty error message",()=>{
        const {getByText,getByRole}=render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore}/> 
            </Router> 
            );
    const signInButton = getByRole("button", { name: "Sign" });
    fireEvent.click(signInButton);
    getByText(/Please enter username/i);
    });
    it("should render password empty error message",()=>{
        const {getByText,getByPlaceholderText,getByRole}=render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore} />
            </Router>
            );
            const username = "sai-krishna";
            const usernameField = getByPlaceholderText("Username");
            const signInButton = getByRole("button",{name:"Sign"});
            fireEvent.change(usernameField,{target:{value:username}});
            fireEvent.click(signInButton);
            getByText(/Please enter password/i);
    });
    it("should submit sign-in on press Enter",()=>{
        const {getByLabelText,getByRole,getByPlaceholderText}=render(
            <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore}/>
            </Router>
            );
        const username ="sai";
        const password= "krishna";
        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button",{name:"Sign"});
        fireEvent.change(usernameField,{target:{value:username}});
        fireEvent.change(passwordField,{target:{value:password}});
        fireEvent.keyPress(signInButton,{key:"Enter",code:"Enter"});
        // waitFor(()=>getByLabelText("audio-loadng"));
    });
    it("should render SignInRoute success state",()=>{
        const history = createMemoryHistory();
        const route  = SIGN_IN_PATH;
        history.push(route);
    const {getByRole,queryByRole,
    getByPlaceholderText,queryByLabelText,
    getByTestId}=render(
    <Provider authStore={authStore}>
      <Router history={createMemoryHistory()}>  
        <Route path={SIGN_IN_PATH}>
            <SignInRoute />
        </Route>
        <Route path={PRODUCTS_PATH}>
            <LocationDisplay />
        </Route>
      </Router>
    </Provider>
        );
        const username ="sai";
        const password= "krishna";
        const usernameField = getByPlaceholderText("Username");
        const passwordField = getByPlaceholderText("Password");
        const signInButton = getByRole("button",{name:"Sign"});
        const mockSuccessPromise = new Promise(function(resolve,reject){
            resolve(getUserSignInResponse);
        });
        const mockSignInAPI =jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI = mockSignInAPI;
        fireEvent.change(usernameField,{target:{value:username}});
        fireEvent.change(passwordField,{target:{value:password}});
        fireEvent.click(signInButton);
        
        waitFor(()=>{
            expect(queryByRole("button",{name:"Sign"})).not.toBeInTheDocument();
            expect(getByTestId("location-display")).toHaveTextContent(PRODUCTS_PATH);
        });
    });
    it("should render SignInRoute failure state",()=>{
       const {getByText,getByPlaceholderText,getByRole}=render(
           <Router history={createMemoryHistory()}>
                <SignInRoute authStore={authStore}/>
           </Router>
           );
           const username= "sai";
           const password = "krishna";
           const usernameField = getByPlaceholderText("Username");
           const passwordField = getByPlaceholderText("Password");
           const signInButton = getByRole("button",{name:"Sign"});
           const mockFailurePromise = new Promise(function(resolve,reject){
               reject(new Error("error"));
           }).catch(()=>{});
           const mockSignInAPI = jest.fn();
           mockSignInAPI.mockReturnValue(mockFailurePromise);
           authAPI.signInAPI = mockSignInAPI;
           fireEvent.change(usernameField,{target:{value:username}});
           fireEvent.change(passwordField,{target:{value:password}});
           fireEvent.click(signInButton);
           waitFor(()=>{
               getByText(/server-error/i);
           });
    });
})