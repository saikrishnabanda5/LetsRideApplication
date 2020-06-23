import  React from 'react';
import {Button,StyledLoader} from './styledComponents';
import {observer} from 'mobx-react';

type ButtonComponentProps = {
    text: string,
    onSubmitForm:() => void,
    onEnterKeyPress:()=>any
    status:boolean|null
    isValid:boolean
}

@observer
class ButtonComponent extends React.Component<ButtonComponentProps>{
    render(){
  const {text,onSubmitForm,onEnterKeyPress,status,isValid} =this.props;
        return(
            <Button type="button" data-testid="custom-element" onClick={onSubmitForm} onKeyPress={onEnterKeyPress}  >
            {status?<div><StyledLoader  type="Oval" color="white" height={30} width={30} timeout={3000}/>
            </div>:<div>{text}</div>}
            </Button>
            );
    }
}
export default ButtonComponent;