import React from 'react';
import {shallow, mount} from 'enzyme';
import toJson from 'enzyme-to-json';
import MyApp2 from './MyApp2'

describe('App', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<MyApp2/>);
    });

    test('render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

 
});

describe('App', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<MyApp2/>);
    });

    it('Page has 1 BrowserRouter', () => {
        expect(wrapper.find('BrowserRouter').length).toEqual(1);
     })
     it('Number of Routes', () => {
        expect(wrapper.find('Route').length).toEqual(9);
     })

it('Page has 1 Redirect', () => {
   expect(wrapper.find('Redirect').length).toEqual(2);
})

it('Page has 1 Switch', () => {
   expect(wrapper.find('Switch').length).toEqual(1);
})
it('Page has 1 Suspense', () => {
   expect(wrapper.find('Suspense').length).toEqual(1);
})
})