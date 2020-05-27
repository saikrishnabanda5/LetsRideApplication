import React from "react";
import {observer,inject} from 'mobx-react';
import {withRouter} from "react-router-dom";
import ProductsPage from '../../components/ProductsPage';
@inject('productStore')
@inject('authStore')
@inject('cartStore')
@observer
class ProductPageRoute extends React.Component {
    componentDidMount(){
        this.doNetworkCalls();
    }
    getProductStore=()=>{
      return this.props.productStore;
    }
    getCartStore=()=>{
      return this.props.cartStore;
    }
    doNetworkCalls=()=>{
        this.getProductStore().getProductList();
    }
    onClickSignOut=()=>{
        this.props.authStore.userSignOut();
        const {history} = this.props;
        history.replace('/signin');
    }
    renderUsersList=()=>{
        return "";
    }
  render() {
    return (
      <ProductsPage onClickSignOut={this.onClickSignOut}
      getProductStore={this.getProductStore()}
      getCartStore={this.getCartStore()}
      doNetworkCalls={this.doNetworkCalls}
      renderUsersList={this.renderUsersList}
      />
    );
  }
}

export default withRouter(ProductPageRoute);