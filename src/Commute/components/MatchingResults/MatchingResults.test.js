/* global expect jest*/;
import React from 'react';

import {render,fireEvent} from '@testing-library/react'
import MatchingResults from '.';
import ShareService from '../../services/ShareService/ShareAPI.api';
import ShareStore from '../../stores/ShareStore'
describe("should test matching results",()=>{
    let shareAPI;
    let shareStore; 
    beforeEach(()=>{
        shareAPI = new ShareService();
        shareStore = new ShareStore(shareAPI);
    });
    it("should test click ride",()=>{
    const { getByPlaceholderText,getByRole } = render(
      <MatchingResults shareStore={shareStore}  />
    );
    const rideButton = getByRole("button", { name: "Ride" });
    fireEvent.click(rideButton);
        
    });
})