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


export const fatchTodosSuccess = (todoData) => {
  return {
    type: actionTypes.FETCH_TODOS_SUCCESS,
    todoData: todoData
  };
};

export const fatchTodosFail = (error) => {
  return {
    type: actionTypes.FETCH_TODOS_FAIL,
    error: error
  };
};

export const fatchTodosStart = () => {
  return {
    type: actionTypes.FETCH_TODOS_START
  };
}

export const fatchTodos = () => {
  return dispatch => {
    dispatch(fatchTodosStart());
    axios.get('/todoData.json')
    .then( res => {
      console.log('res: ', res.data);
      const fetchedTodos= [];
      for(let key in res.data) {
        fetchedTodos.push({
          ...res.data[key],
          id: key
        });
      }
      dispatch(fatchTodosSuccess(fetchedTodos));
    })
    .catch( err => {
      console.log('err: ', err);
      dispatch(fatchTodosFail(err));
    })
  }
}