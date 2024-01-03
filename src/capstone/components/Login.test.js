import React from 'react';
import moxios from 'moxios';
import Login from './Login';
import LoginForm from './LoginForm';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import store from '../store/configureStore'

const setUp=(initialState) => {
  const testStore=store(initialState);
  const wrapper=shallow(<Login store={testStore}/>).childAt(0).dive();
  return wrapper;
}

describe ('Login Snapshot',()=>{
  let wrapper;
   beforeEach(()=>{
       const initialState ={
           issues :[
              {
                  "id": 15,
                  "title": "data issue",
                  "isd": "data got disconnected",
                  "severity": "Major",
                  "Status": "InProgress",
                  "cdate": "2021-03-03",
                  "rdate": "",
                  "count": 20
                },
                {
                  "id": 20,
                  "title": "Wrong Display",
                  "isd": "the issue is with the displaying the data in a unordered way",
                  "severity": "Minor",
                  "Status": "Open",
                  "cdate": "2021-04-02",
                  "rdate": "2021-04-05",
                  "count": 9
                },
                {
                  "id": 22,
                  "title": "Invalid name",
                  "isd": "the name of the search item is showing error",
                  "severity": "Major",
                  "Status": "Closed",
                  "cdate": "2021-04-01",
                  "rdate": "",
                  "count": 3
                },
                {
                  "title": "On delete",
                  "isd": "jjjjbjkmkm",
                  "severity": "Minor",
                  "Status": "Open",
                  "cdate": "2021-04-15",
                  "rdate": "",
                  "count": 3,
                  "id": 23
                }
           ]
       }
       wrapper=setUp(initialState);
   });
   test('Login render correctly',()=>{
       expect(wrapper).toMatchSnapshot();
   });
   it('displays IssueComponent', () => {
    expect(wrapper.find(LoginForm).length).toEqual(1);
})
  })