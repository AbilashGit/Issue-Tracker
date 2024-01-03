import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyApp2 from './capstone/MyApp2';
import { Provider } from 'react-redux';
import configureStore from './capstone/store/configureStore';
import { loadIssues, loadUsers } from './capstone/actions/IssuesActions';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(loadIssues(), loadUsers()); // this is async
ReactDOM.render(
  <Provider store={store}>
    <MyApp2 />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();