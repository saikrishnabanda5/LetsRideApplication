import React from 'react';
import {observer,inject} from 'mobx-react';
import {observable} from 'mobx'
import data from '../../../i18n/strings.json'
@observer
class ShareComponent extends React.Component{
    onSelectRequest=(event)=>{
        return this.props.getRequestStore.onSelectRequest(event.target.value)
    }
    render(){
        console.log(this.props.getRequestStore.selectedValue)
        return(
            <div>
            <select onChange={()=>this.onSelectRequest(event)}>  
                  <option value="REQUEST">{"share"}</option>
                  <option value="RIDE">{data.request.ride}</option>
                  <option value="ASSETTRANSPORT">{data.request.assetTransport}t</option>
             </select>
            </div>)
    }
}
export default ShareComponent;
