/* global expect jest*/;
import React from "react";
import { render } from "@testing-library/react";

import RequestAssetTransport from ".";

describe("RequestAssetTransport page", () => {
  it("should render typed source", () => {
    const source = "test-source";
    const { getByPlaceholderText } = render(
      <RequestAssetTransport source={source} onChangeSource={() => {}} />
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