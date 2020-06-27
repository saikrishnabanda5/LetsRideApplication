import {observable} from 'mobx';



class MatchingRideModel{
    @observable source: string 
    @observable destination: string
    @observable from_datetime:string
    @observable is_flexible:boolean
    @observable to_datetime:string
    @observable datetime:string
    @observable no_of_seats:number
    @observable luggage_quantity:number
    @observable mobile_number:string
    @observable user_name:string
    // @observable status
    constructor(props){
        this.source=props.source;
        this.destination=props.destination;
        this.from_datetime=props.from_datetime;
        this.is_flexible=props.is_flexible;
        this.to_datetime=props.to_datetime;
        this.datetime=props.datetime;
        this.no_of_seats=props.no_of_seats;
        this.luggage_quantity=props.luggage_quantity;
        this.mobile_number=props.matched_person.mobile_number;
        this.user_name=props.matched_person.user_name;
        // this.status=props.status;
    }
}
export default MatchingRideModel;

