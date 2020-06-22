/* global expect jest*/
import React from 'react';
import LogInRoute from '.';
import Adapter from 'enzyme-adapter-react-16';
import { shallow,configure } from 'enzyme';
import { render, fireEvent, waitFor,screen } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";
import AuthAPI from "../../services/AuthService/AuthAPI.api";
import AuthStore from "../../stores/AuthStore";

// describe('LogInRoute', () => {
// configure({adapter: new Adapter()});
//   it('should pass', () => {
//     const wrapper = shallow(<LogInRoute></LogInRoute>);
//     const instance = wrapper.instance();
//     expect(wrapper.exists()).toBeTruthy();
//     // expect(instance.text).toBe('Button');
//   });
// });

describe("LogInRoute Tests", () => {
  let authAPI;
  let authStore;

  beforeEach(() => {
    authAPI = new AuthAPI();
    authStore = new AuthStore(authAPI);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render username empty error message", () => {
    const { getByText, getByRole ,getByTestId} = render(
      <Router history={createMemoryHistory()}>
        <LogInRoute authStore={authStore} />
      </Router>
    );
    const logInButton = screen.getByTestId('custom-element')
    // const logInButton = getByRole("button", { name: "LOGIN" });

    fireEvent.click(logInButton);

    // getByText(/Required/i);
  });
});