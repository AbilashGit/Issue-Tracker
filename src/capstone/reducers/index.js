import {combineReducers} from 'redux';
import issues from './IssuesReducer';

const rootReducer = combineReducers({
  issues,
});

export default rootReducer;
