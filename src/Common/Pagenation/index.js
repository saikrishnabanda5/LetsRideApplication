import React from 'react';
import ReactPaginate from 'react-paginate';
import {observer,inject} from 'mobx-react';
import '../Pagenation/index.css'
@inject('requestStore')
@observer
class Pagenation extends React.Component{
    render(){
        return(
            <ReactPaginate 
            previousLabel = {<i className ="fas fa-angle-left"></i>}
            nextLabel = {<i className ="fas fa-angle-right"></i>}
            breakLabel = {"..."}
            breakClassName = {"break-me"}
            pageCount = {9}
            marginPageDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange = {this.handlePageClick}
            containerClassName={'pagenation'}
            activeClassName ={'active'}
            />
            
            )
    }
}

export default Pagenation;