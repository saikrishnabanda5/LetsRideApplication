import React from 'react';
import {observer} from 'mobx-react';
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import {Pages,LeftArrow,CurrentPageNumber,TotalNumberOfPages,RightArrow} from './styledComponents';
@observer
class Pagenator extends React.Component{
    render(){
        
        const {limit,onClickLeftArrow,onClickRightArrow,total,pageNumber} =this.props;
        console.log("total",total,"limit",limit);
        return(
            <Pages >
                <LeftArrow onClick={onClickLeftArrow}>
                        {<AiOutlineArrowLeft/>}              
                </LeftArrow>
                <CurrentPageNumber>{pageNumber}</CurrentPageNumber>
                <TotalNumberOfPages>{(Math.ceil(total/limit))}</TotalNumberOfPages>
                <RightArrow onClick={onClickRightArrow}>
                        {<AiOutlineArrowRight/>}                  
                </RightArrow>
            </Pages>
            );
    }
}
export default Pagenator;

