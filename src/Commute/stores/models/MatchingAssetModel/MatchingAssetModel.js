import {observable} from 'mobx';
class MatchingAssetModel{
    @observable source
    @observable destination
    @observable from_datetime
    @observable is_flexible
    @observable to_datetime
    @observable datetime
    @observable no_of_assets
    @observable asset_type
    @observable sensitivity
    @observable deliver_person
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
        this.no_of_assets=props.no_of_assets;
        this.asset_type = props.asset_type;
        this.sensitivity = props.sensitivity;
        this.deliver_person=props.deliver_person;
        this.mobile_number=props.accepted_person.mobile_number;
        this.user_name=props.accepted_person.user_name;
    }
}
export default MatchingAssetModel;