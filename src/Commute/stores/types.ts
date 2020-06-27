export interface PostsObject {
    userId: number
    id: number
    title: string
    body: string
  }
  
  export interface UpdatePostsRequest {
    id: number
    update_body: string
  }
  
export interface GetMatchingRideRequest{
  limit:number
  offset:number
}
export interface GetMatchingRideResponse{
  source: string
  destination:string
  from_datetime:string
  is_flexible: boolean
  to_datetime: string
  datetime: string
  no_of_seats: number
  luggage_quantity: number
  matched_person: {
    mobile_number: string
    user_name: string
  }
}

export interface GetMatchingAssetsRequest{
  limit:number
  offset:number
}


export interface GetMatchingAssetsResponse{
  source: string
  destination:string
  from_datetime:string
  is_flexible: boolean
  to_datetime: string
  datetime: string
  no_of_assets:number
  asset_type: string
  sensitivity: string
  deliver_person: string
  matched_person: {
     mobile_number: string
     user_name: string
  }
}