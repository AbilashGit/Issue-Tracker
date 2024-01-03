import React from 'react';
import moxios from 'moxios';
import IssuesForm from './IssuesForm';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import store from '../store/configureStore';

describe('IssuesFormPage', () => {
    let wrapper;
  
    beforeEach(() => {
        wrapper = shallow(<IssuesForm/>);
    });
    
    it('Page has 1 Formik', () => {
        expect(wrapper.find('Formik').length).toEqual(1);
    })
    
});
