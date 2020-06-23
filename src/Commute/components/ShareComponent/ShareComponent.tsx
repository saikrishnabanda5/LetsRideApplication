import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
import data from '../../../i18n/strings.json';
import Select from '../../../Common/Select';

type ShareComponentProps ={
    onSelectShare:()=>void
}
@observer
class ShareComponent extends React.Component<ShareComponentProps>{
    @observable listOfShareItems: Array<string>
    constructor(props: Readonly<ShareComponentProps>){
        super(props);
        this.listOfShareItems=[data.share.share,data.share.ride,data.share.travelInfo];
    }
    render(){
        return(
            <Select onSelect={this.props.onSelectShare} listOfItems={this.listOfShareItems}/>
            );
    }
}
export default ShareComponent;