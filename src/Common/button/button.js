import  React from 'react';
import {Button} from './styledComponent';
class ButtonComponent extends React.Component{
    render(){
  const {text,onClickSignIn,onEnterKeyPress,backgroundcolor,padding} =this.props;
        return(
            <Button onClick={onClickSignIn} onKeyPress={onEnterKeyPress} backgroundColor={backgroundcolor} padding={padding}>{text} </Button>
             );
    }
}
export default ButtonComponent;