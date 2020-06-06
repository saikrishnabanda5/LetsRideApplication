import {observable} from 'mobx';
class MatchingModel{
    @observable source
    @observable destination
    @observable from_datetime
    @observable fexible
    @observable to_datetime
    @observable datetime
    @observable no_of_seats
    @observable luggage_quantity
    @observable mobile_number
    @observable user_name
    @observable status
    constructor(props){
        this.source=props.source;
        this.destination=props.destination;
        this.from_datetime=props.from_datetime;
        this.is_flexible=props.is_flexible;
        this.to_datetime=props.to_datetime;
        this.datetime=props.datetime;
        this.no_of_seats=props.no_of_seats;
        this.luggage_quantity=props.luggage_quantity;
        this.mobile_number=props.accepted_person.mobile_number;
        this.user_name=props.accepted_person.user_name;
        this.status=props.status;
    }
}
export default MatchingModel;

