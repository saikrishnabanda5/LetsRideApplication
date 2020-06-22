/* global expect jest*/;
import React from "react";
import { render } from "@testing-library/react";

import RequestRide from ".";

describe("RequestRide page", () => {
  it("should render typed source", () => {
    const source = "test-source";
    const { getByPlaceholderText } = render(
      <RequestRide source={source} onChangeSource={() => {}} />
    );
    const sourceField = getByPlaceholderText("Enter Source");
    expect(sourceField.value).toBe('');
  });


//   it("should render given error message", () => {
//     const { getByText } = render(
//       <ShareRide errorMessage="Required" />
//     );

//     getByAltText (/required/i);
//   });
});