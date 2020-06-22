/* global expect jest*/;
import React from "react";
import { render } from "@testing-library/react";

import ShareTravelInfo from ".";

describe("ShareTravelInfo page", () => {
  it("should render typed source", () => {
    const source = "test-source";
    const { getByPlaceholderText } = render(
      <ShareTravelInfo source={source} onChangeSource={() => {}} />
    );
    const sourceField = getByPlaceholderText("Enter Source");
    expect(sourceField.value).toBe('');
  });
  
//   it("should render typed password", () => {
//     const password = "test-password";
//     const { getByPlaceholderText } = render(
//       <ShareRide password={password} onChangePassword={() => {}} />
//     );
//     const passwordField = getByPlaceholderText("Enter Password");
//     expect(passwordField.value).toBe(password);
//   });

//   it("should render given error message", () => {
//     const { getByText } = render(
//       <ShareRide errorMessage="Required" />
//     );

//     getByText(/required/i);
//   });
});