import React from 'react';
import {observer} from 'mobx-react';
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import {Pages,LeftArrow,CurrentPageNumber,TotalNumberOfPages,RightArrow} from './styledComponent'
@observer
class Pagenator extends React.Component{
    render(){
        console.log(this.props)
        const {limit,offset,details,onClickLeftArrow,onClickRightArrow,total,pageNumber} =this.props;
        return(
            <Pages >
                <LeftArrow onClick={onClickLeftArrow}>
                    <AiOutlineArrowLeft/>
                </LeftArrow>
                <CurrentPageNumber>{pageNumber}</CurrentPageNumber>
                <TotalNumberOfPages>{Math.ceil(total/limit)}</TotalNumberOfPages>
                <RightArrow onClick={onClickRightArrow}>
                    <AiOutlineArrowRight/>
                </RightArrow>
            </Pages>
            );
    }
}
export default Pagenator;