import  React from 'react';
import {Button,StyledLoader} from './styledComponent';
import {observer} from 'mobx-react';
@observer
class ButtonComponent extends React.Component{
    render(){
  const {text,onSubmitForm,onEnterKeyPress,backgroundcolor,padding,isValid,status} =this.props;
        return(<div>
            <Button onClick={onSubmitForm} onKeyPress={onEnterKeyPress} backgroundColor={backgroundcolor}  padding={padding}>
            {isValid?<StyledLoader className="" type="Oval" color="white" height={30} width={30} timeout={2000}/>:text} </Button>
            </div>
            );
    }
}
export default ButtonComponent;

// <div>{status===400?<div>
//             <div>Invalid</div></div>:null} </div>