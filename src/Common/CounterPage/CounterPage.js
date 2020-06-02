import React, { Component } from 'react';
import { observer } from 'mobx-react';
import {Operations,Button,Value} from './styledComponent';
@observer
class CounterPage extends Component {

   render() {
       const {incrementCounter,decrementCounter,count}=this.props;
      return (
         <Operations>
             <Button onClick={decrementCounter}>-</Button>
                <Value>{count} </Value>
             <Button onClick={incrementCounter}>+</Button>
         </Operations>
      );
   }
}

export default CounterPage;