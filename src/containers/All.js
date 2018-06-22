import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';

import List from '../components/List/List';
import * as actions from '../store/actions/todoList';
import axios from '../axios-todo';
import withErrorHandler from '../hoc/withErrorHandler';

class All extends Component {
  componentDidMount() {
    this.props.onFatchTodos();
  }


  render() {
    let all = <CircularProgress />;
    if(this.props.loading) {
      // const redirect = <Redirect to="/" />
      all = (
        <div>
          {this.props.todoData.map(todo => (
            <List 
              key={todo.id}
              todoData={todo.todoData} />
          ))}
        </div>
      )
    }
    return all;
  }
}

const mapStateToProps = state => {
  return {
    todoData: state.list,
    loading: state.loading
  }
}

const mapDisptchToProps = dispatch => {
  return {
    onFatchTodos: () => dispatch(actions.fatchTodos())
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(withErrorHandler(All, axios));