import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import IssuesComponent from './IssuesComponent';
import IssueComponent from './IssueComponent';
import store from '../store/configureStore';
import moxios from 'moxios';

const setUp=(initialState) => {
    const testStore=store(initialState);
    const wrapper=shallow(<IssuesComponent store={testStore}/>).childAt(0).dive();
    return wrapper;
}

describe ('IssuesComponent Snapshot',()=>{
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
     test('IssuesComponent render correctly',()=>{
         expect(wrapper).toMatchSnapshot();
     })
});


describe('Test IssuesComponent using Shallow rendering', () => {  
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

    it('has 5 text input elements', () => {
        expect(wrapper.find('input').length).toEqual(5);
    })
    it('displays correct heading for Issues', () => {
        expect(wrapper.find("h1").render().text()).toEqual("Issues List");
    })
    it('displays IssueComponent', () => {
        expect(wrapper.find(IssueComponent).length).toEqual(4);
    })
    it('Page has 5 input', () => {
       expect(wrapper.find('input').length).toEqual(5);
   })
   it('Page has 1 Container', () => {
       expect(wrapper.find('Container').length).toEqual(1);
   })
   it('Page has 1 Row', () => {
       expect(wrapper.find('Row').length).toEqual(1);
   })
});


describe('The Issues provided to IssuesComponent is null', () => {  
    let wrapper;
    
    beforeEach(()=>{
        const initialState ={
            issues :[     ]
        }
        wrapper=setUp(initialState);
    });

    it('should not crash', () => {
        let Col = wrapper.find('Col');
        expect(Col.length).toEqual(0);
    });

});

let mockResponse = {
    status: 200,
    response: [
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
            "count": 10
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
          }
    ]
};


describe('App Component Mount Test ', () => {
    const testStore=store(mockResponse);
    let mountWrapper;

    beforeAll(() => {
        moxios.install();
    })
    
    afterAll(() => {
        moxios.uninstall();
    })
    
    it('renders correctly', (done) => {
        moxios.stubRequest('http://localhost:3001/issues', mockResponse);
        mountWrapper = mount(<IssuesComponent store={testStore}/>);
        moxios.wait(() => {
            mountWrapper.update();
            expect(mountWrapper).toMatchSnapshot();
            done();
            mountWrapper.unmount();
        })
    });
})