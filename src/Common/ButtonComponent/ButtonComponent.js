import  React from 'react';
import {Button,StyledLoader} from './styledComponents';
import {observer} from 'mobx-react';
@observer
class ButtonComponent extends React.Component{
    render(){
  const {text,onSubmitForm,onEnterKeyPress,backgroundcolor,padding,status} =this.props;
        return(
            <Button data-testid="custom-element" onClick={onSubmitForm} onKeyPress={onEnterKeyPress} backgroundColor={backgroundcolor}  padding={padding}>
            {status?<div><StyledLoader  type="Oval" color="white" height={30} width={30} timeout={3000}/>
            </div>:<div>{text}</div>}
            </Button>
            );
    }
}
export default ButtonComponent;