/* global expect jest*/;
import React from "react";
import { render } from "@testing-library/react";

import LogInPage from ".";

describe("LogInPage", () => {
  it("should render typed mobileNumber", () => {
    const mobileNumber = "test-mobileNumber";
    const { getByPlaceholderText } = render(
      <LogInPage mobileNumber={mobileNumber} onChangeMobileNumber={() => {}} />
    );
    const mobileNumberField = getByPlaceholderText("Enter MobileNumber");
    expect(mobileNumberField.value).toBe('');
  });
  
  it("should render typed password", () => {
    const password = "test-password";
    const { getByPlaceholderText } = render(
      <LogInPage password={password} onChangePassword={() => {}} />
    );
    const passwordField = getByPlaceholderText("Enter Password");
    expect(passwordField.value).toBe('');
  });
  
});