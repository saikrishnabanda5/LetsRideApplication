import {observable} from 'mobx';
class AssetRequestModel{
    @observable source
    @observable destination
    @observable from_datetime
    @observable fexible
    @observable to_datetime
    @observable datetime
    @observable no_of_assets
    @observable asset_type
    @observable sensitivity
    @observable mobile_number
    @observable user_name
    @observable deliver_person
    @observable status
    constructor(props){
        this.source=props.source;
        this.destination=props.destination;
        this.from_datetime=props.from_datetime;
        this.fexible=props.fexible;
        this.to_datetime=props.to_datetime;
        this.datetime=props.datetime;
        this.no_of_assets=props.no_of_assets;
        this.asset_type=props.asset_type;
        this.sensitivity =props.sensitivity;
        this.mobile_number=props.accepted_person.mobile_number;
        this.user_name=props.accepted_person.user_name;
        this.deliver_person =props.deliver_person;
        this.status=props.status;
    }
}
export default AssetRequestModel;


