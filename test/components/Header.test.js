import React from 'react';
import ReactDom from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import Header from '../../components/Header.jsx';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Header Test', function() {
  let wrapper

  beforeEach(function() {
    wrapper = shallow(<Header />);
  })

  it('.nav-bar should have 3 child <li>', function() {
    // console.log(wrapper.debug())
    expect(wrapper.find('.nav-bar').children()).to.have.lengthOf(3)
  })

  it('should have the function changeActive', function() {
    expect(wrapper.instance().changeActive).to.be.a('function')
  })

  it('should have the function multiplyNumber', function() {
    expect(wrapper.instance().multiplyNumber).to.be.a('function')
  })

  it('Passing in two numbers to multiplyNumber should multiply them together', function() {
    expect(wrapper.instance().multiplyNumber(2, 4)).to.equal(8)
  })
})
