import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ViewCountReducer(state = initialState.viewcount, action) {
  switch (action.type) {
      case types.LOAD_COUNT_SUCCESS:
      return action.viewcount;

      case types.ADD_COUNT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.viewcount)
      ];

    default:
      return state;
  }
}
