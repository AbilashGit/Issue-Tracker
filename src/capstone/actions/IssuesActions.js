import * as types from './actionTypes';
import  IssuesApi from '../data/IssuesApi';

export function loadIssuesSuccess(issues) {
  return { type: types.LOAD_ISSUES_SUCCESS, issues};
}

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users};
}

export function addIssuesSuccess(issue,vcount) {
  return { type: types.ADD_ISSUES_SUCCESS, issue,vcount};
}
export function deleteIssuesSuccess(id) {
  return { type: types.DELETE_ISSUES_SUCCESS, id};
}
export function EditIssuesSuccess(issue) {
  return { type: types.EDIT_ISSUES_SUCCESS, issue};
}
export function addUserSuccess(user) {
  return { type: types.ADD_USER_SUCCESS,user};
}


export function loadIssues() {
  return function(dispatch) {
    return IssuesApi.getAllIssues().then(issues => {
      dispatch(loadIssuesSuccess(issues));
    }).catch(error => {
      throw(error);
    });
  };
}

export function addIssue(issue) {

  return function (dispatch, getState) {
    return IssuesApi.saveIssues(issue).then(issue => {
      dispatch(addIssuesSuccess(issue));
    }).catch(error => {
      throw(error);
    });
  };
}


export function deleteIssue(id) {
  return function (dispatch, getState) {
    return IssuesApi.deleteIssues(id).then(() => {
      dispatch(deleteIssuesSuccess(id));
    }).catch(error => {
      throw(error);
    });
  };
}


export function EditIssue(issue) {
  return function (dispatch, getState) {
    return IssuesApi.EditIssues(issue).then(issue => {
      dispatch(EditIssuesSuccess(issue));
    }).catch(error => {
      throw(error);
    });
  };
}
export function addUser(user) {
  return function (dispatch, getState) {
    return IssuesApi.saveUser(user).then(user => {
      dispatch(addUserSuccess(user));
    }).catch(error => {
      throw(error);
    });
  };
}
export function loadUsers() {
  return function(dispatch) {
    return IssuesApi.getAllUsers().then(users=> {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}
