import * as actionTypes from './actionTypes';
import axios from '../../axios-todo';

export const addSuccess = (id, todoData) => {
  return {
    type: actionTypes.ADD_SUCCESS,
    todoId: id,
    todoData: todoData
  }
}

export const addFail = (error) => {
  return {
    type: actionTypes.ADD_FAIL,
    error: error
  };
};

export const addStart = () => {
  return {
    type:actionTypes.ADD_START
  }
}

export const add = (todoData) => {
  return dispatch => {
    dispatch(addStart());
    axios.post('/todoData.json', todoData)
    .then( res => {
      console.log('res: ', res.data);
      dispatch(addSuccess(res.data, todoData));
    })
    .catch( err => {
      console.log('err: ', err);
      dispatch(addFail(err));
    })
  }
}