import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  list: [],
  loading: false
}

const reducer = (state = initialState, action) => {
  console.log('action: ', action.type);
  switch (action.type) {
    case actionTypes.ADD_START:
    return {
      ...state,
      loading: true
    }
    case actionTypes.ADD_SUCCESS:
      const newList = {
        ...action.todoData,
        id: action.todoId
      }
      return {
        ...state,
        loading: false,
        list: state.list.concat(newList)
      }
    case actionTypes.ADD_FAIL:
      return {
        ...state,
        loading: false
      }

    case actionTypes.FETCH_TODOS_START:
      return {
        ...state,
        loading: true
      }

    case actionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        list: action.todoData,
        loading: true
      }

    case actionTypes.FETCH_TODOS_FAIL:
      return {
        ...state,
        loading: false
      }
  
    default:
      return state;
  }
  
}

export default reducer;
