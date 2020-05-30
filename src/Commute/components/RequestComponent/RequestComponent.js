import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import data from '../../../i18n/strings.json';
import Select from '../../../Common/Select';
@observer
class RequestComponent extends React.Component{
    @observable listOfRequests
    constructor(props){
        super(props);
        this.listOfRequests=[data.request.request,data.request.ride,data.request.assetTransport];
    }
    render(){
        return(
            <Select onSelect={this.props.getRequestStore.onSelectRequest} listOfItems={this.listOfRequests}/>
            );
    }
}
export default RequestComponent;