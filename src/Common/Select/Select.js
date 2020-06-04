import React from 'react';
import {SelectTag,SelectTagDetails,Option} from './styledComponent';
class Select extends React.Component{
     selectAValue=()=>{
        const selectItem = this.props.listOfItems.map((item)=>{
          return <Option key={item} value={item}> {item}</Option>;
        });
        return selectItem;
    }
    render(){
        const {onSelect,assetTransportRequest}=this.props;
        return(
            <div>{assetTransportRequest!=="ASSET TRANSPORT REQUEST"?<SelectTag id="select" onChange={onSelect}> {this.selectAValue()} </SelectTag>:
            <SelectTagDetails  onChange={onSelect} id="select" > 
            {this.selectAValue()} </SelectTagDetails>}
            </div>
            );
    }
}

export default Select;