import * as actionTypes from './actionTypes';

export const addTodoList = (data) => {
  return {
    type: actionTypes.ADD
  }
}

export const editTodoList = () => {
  return {
    type: actionTypes.EDIT
  }
}

export const removeTodoList = () => {
  return {
    type: actionTypes.REMOVE
  }
}