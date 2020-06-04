import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {observer} from 'mobx-react';
import {observable} from 'mobx';
@observer
class SimpleMenu extends React.Component{
    @observable anchorEl
    constructor(props){
        super(props);
        this.anchorEl = null;
    }
   handleClick = (event) => {
    //   alert(event.target.value)
       this.anchorEl = event.currentTarget;
   };

   handleClose = (event) => {
       this.anchorEl = event.target.value;
   };
render(){
  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
        Filter
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={this.anchorEl}
        keepMounted
        open={Boolean(this.anchorEl)}
        onClose={this.handleClose}
      >
        <MenuItem onClick={this.handleClose}>Active</MenuItem>
        <MenuItem onClick={this.handleClose}>Expired</MenuItem>
      </Menu>
    </div>
  );
}
}
export default SimpleMenu;