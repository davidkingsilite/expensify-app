import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form correctly',()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

//should render expense form with expense data

test('should render expense form with expense data', ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () =>{
    const wrapper = shallow(<ExpenseForm />);
        expect(wrapper).toMatchSnapshot();
        wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
 const value = 'New description ';
 const wrapper = shallow(<ExpenseForm />);
 wrapper.find('input').at(0).simulate('change', {
    target: {value }
 });
 expect(wrapper.state('description')).toBe(value);
});

test('should set description input change', () => {
    const value ='New description';
    const wrapper = shallow (<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change',{
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});


