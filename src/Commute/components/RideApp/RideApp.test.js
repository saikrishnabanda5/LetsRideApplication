/* global expect */
import React from 'react';
import { render} from "@testing-library/react";
import RideApp from ".";

describe("RideApp component", () => {
  it("shows the component ", () => {
    const testMessage = "Test Message";
    const {  getByTestId } = render(
      <RideApp>{testMessage}</RideApp> 
    );
    const element = getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });
});   