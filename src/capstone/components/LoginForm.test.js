import React from 'react';
import moxios from 'moxios';
import Login from './Login';
import LoginForm from './LoginForm';
import {shallow, mount, unmount} from 'enzyme';
import toJson from 'enzyme-to-json';
import store from '../store/configureStore'

describe('Test UserForm using Full DOM rendering', () => {
    let mountWrapper;

    beforeEach(() => {
        mountWrapper = shallow(<LoginForm/>);
    });
    test('IssuesComponent render correctly',()=>{
        expect(mountWrapper).toMatchSnapshot();
    })
    it('Page has 1 Formik', () => {
        expect(mountWrapper.find('Formik').length).toEqual(1);
    })
    
 });