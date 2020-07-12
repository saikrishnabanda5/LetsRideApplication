/** @jsx jsx */
import { css,jsx } from '@emotion/core';
import React,{Component} from 'react';
import {ButtonComponent,ButtonText,BaseButtonStyle} from './styledComponents';

class BaseButtonComponent extends Component{
    static defaultProps = {
        shape:"oval",
        variant:"filled",
        className:"",
    }
    render(){
        const {onClick,isDisabled,textTypo,className } = this.props;
        let  onClickButton = {};
        if(!isDisabled){
            onClickButton:{
                onClick:onClick
            }
        }
        
        return(
            <ButtonComponent {...onClickButton} className={className}>
              <ButtonText   css={<BaseButtonStyle/>} >sai krishna</ButtonText>
            </ButtonComponent>
            );
    }
}

export default BaseButtonComponent;