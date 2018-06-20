import React, { Component } from 'react';

import Tooltips from '../components/UI/Tooltips/Tooltips';
import Dialog from '../components/UI/Dialog/Dialog';

class TodoData extends Component {
  state = {
    openDialog: false,
  };

  handleClickOpen = () => {
    this.setState({ openDialog: true });
  };

  handleClose = () => {
    this.setState({ openDialog: false });
  };
  render() {
    return (
      <div>
        <Tooltips showDialog={this.handleClickOpen}/>
        <Dialog openDialog={this.state.openDialog} closeDialog={this.handleClose}/>
      </div>
    );
  }
}

export default TodoData;