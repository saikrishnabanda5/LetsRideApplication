import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import data from '../../../i18n/strings.json';
import Select from '../../../Common/Select';
@observer
class ShareComponent extends React.Component{
    @observable listOfShareItems
    constructor(props){
        super(props);
        this.listOfShareItems=[data.share.share,data.share.ride,data.share.travelInfo];
    }
    render(){
        return(
            <Select onSelect={this.props.getShareStore.onSelectShare} listOfItems={this.listOfShareItems}/>
            );
    }
}
export default ShareComponent;
