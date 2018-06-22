import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";


import Tooltips from '../components/UI/Tooltips/Tooltips';
import Dialog from '../components/UI/Dialog/Dialog';
import Input from '../components/UI/Input/Input';

import {updateObject} from '../shared/utility';
import * as  actions from '../store/actions/todoList';
import withErrorHandler from '../hoc/withErrorHandler';
import axios from '../axios-todo';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

class TodoData extends Component {
  state = {
    openDialog: false,
    todoForm: {
      title: {
        elementType: 'input',
        elementConfig: {
          id: 'name',
          autoFocus: true,
          label: 'Title',
          margin: 'normal',
          fullWidth: true
        },
        value: '',
      },
      Description: {
        elementType: 'input',
        elementConfig: {
          id: 'name',
          autoFocus: false,
          label: 'Description',
          margin: 'normal',
          fullWidth: true
        },
        value: '',
      },
      DueDate: {
        elementType: 'date',
        elementConfig: {
          id:"date",
          label:"Due Date",
          type:"date",
          InputLabelProps:{
            shrink: true,
          }
        },
        defaultValue:"2017-05-24",
        value: '',
      },
      time: {
        elementType: 'time',
        elementConfig: {
          id: 'time',
          label: 'Alarm clock',
          type: 'time',
          InputLabelProps: {
            shrink: true,
          },
          inputProps:{
            step: 300, // 5 min
          }
        },
        defaultValue: '07:30',
        value: '',
      }
    }
  };

  handleClickOpen = () => {
    this.setState({ openDialog: true });

  };

  handleClose = () => {
    this.setState({ openDialog: false });
  };

  addHandle = () => {
    this.setState({ openDialog: false });
    // this.props.onSetRedirectPath('/');
    this.props.history.push('/');
  }

  orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for(let formElementIdentifier in this.state.todoForm) {
      formData[formElementIdentifier] = this.state.todoForm[formElementIdentifier].value;
    }
    const todo = {
      todoData: formData,
    }
    this.props.onTodoData(todo);
  }

  inputChangeHandler = (event, inputIdentifier) => {

    const updatedFormElement = updateObject(this.state.todoForm[inputIdentifier], {
      value: event.target.value,
    });

    const updatedtodoForm = updateObject(this.state.todoForm, {
      [inputIdentifier]: updatedFormElement
    })

    let formIsValid = true;
    for(let inputIdentifier in updatedtodoForm) {
      formIsValid = updatedtodoForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({todoForm: updatedtodoForm});
  } 

  render() {
    console.log(this.props.data);
    const formElementArray = [];
    for(let key in this.state.todoForm) {
      formElementArray.push({
        id: key,
        config: this.state.todoForm[key]
      })
    } 
    console.log(formElementArray);
    let form= (
      <div>
        {formElementArray.map(formElement => (  
          <Input 
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => this.inputChangeHandler(event, formElement.id)}
          />       

        ))}
         <button btnType="Success" >ORDER</button>
      </div>
    );
    if(this.props.loading) {
      form = <CircularProgress  />
    }

    return (
      <div>
        <Tooltips showDialog={this.handleClickOpen}/>
        <Dialog openDialog={this.state.openDialog} closeDialog={this.handleClose}>
          <form onSubmit={this.orderHandler}>
            <DialogContent>
              {form}
            </DialogContent>
            <DialogActions>
              <Button type="submit" onClick={this.addHandle}  color="primary">
                Add
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('state: ', state);
  return {
    data: state.list,
    loading : state.loading
  }
}

const mapDisptchToProps = dispatch => {
  return {
    onTodoData: (todoData) => dispatch(actions.add(todoData))
  }
}

export default connect(mapStateToProps,mapDisptchToProps)(withErrorHandler(withRouter(TodoData), axios));