import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function IssuesReducer(state = initialState.issues, action) {
  switch (action.type) {
    case types.LOAD_ISSUES_SUCCESS:
      return action.issues;

    case types.ADD_ISSUES_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.issue)
      ];

      case types.ADD_USER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.user)
      ];

    case types.EDIT_ISSUES_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.issue,action.vcount)
      ];
      
      case types.DELETE_ISSUES_SUCCESS:
        return [
          ...state,
          Object.assign({}, action.issue)
        ];
     
      case types.LOAD_USERS_SUCCESS:
      return action.users;

      case types.ADD_USER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.user)
      ];

    default:
      return state;
  }
}
