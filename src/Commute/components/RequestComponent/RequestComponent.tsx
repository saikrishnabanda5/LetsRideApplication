import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import data from '../../../i18n/strings.json';
import Select from '../../../Common/Select';

type RequestComponentProps ={
    onSelectRequest:()=>any
}

@observer
class RequestComponent extends React.Component<RequestComponentProps>{
    @observable listOfRequests:  Array<string>
    constructor(props: Readonly<RequestComponentProps>){
        super(props);
        this.listOfRequests=[data.request.request,data.request.ride,data.request.assetTransport];
    }
    render(){
        return(
            <Select onSelect={this.props.onSelectRequest} listOfItems={this.listOfRequests} />
            );
    }
}
export default RequestComponent;