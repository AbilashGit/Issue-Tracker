import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import IssueComponent from './IssueComponent';
import store from '../store/configureStore';

const setUp=(initialState) => {
    const testStore=store(initialState);
    const wrapper=shallow(<IssueComponent store={testStore}/>).childAt(0).dive();
    return wrapper;
}

describe('Test IssueComponent using Shallow rendering', () => {  
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
    it('Page has 1 input', () => {
       expect(wrapper.find('Link').length).toEqual(2);
   })
   it('Page has 1 input', () => {
    expect(wrapper.find('Button').length).toEqual(1);
})
   it('Page has 1 Card', () => {
       expect(wrapper.find('Card').length).toEqual(1);
   })
});


describe('When issues array passed to IssueComponent is null', () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            issues: null
        }
        wrapper = shallow(<IssueComponent {...props}/>);
    });

    it('should not crash', () => {
        let Col = wrapper.find('IssueComponent');
        expect(Col.length).toEqual(0);
    });

});