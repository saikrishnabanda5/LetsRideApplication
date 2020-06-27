import { GetMatchingRideResponse, GetMatchingRideRequest, GetMatchingAssetsResponse, GetMatchingAssetsRequest } from "../../stores/types";



interface ShareService {
  getMatchingRides: (requestObject:GetMatchingRideRequest) => Promise<Array<GetMatchingRideResponse>>

  getMatchingAssets: (requestObject: GetMatchingAssetsRequest) => Promise<Array<GetMatchingAssetsResponse>>
}

export default ShareService
