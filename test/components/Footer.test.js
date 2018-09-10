import React from 'react';
import ReactDom from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Base from '../../components/Footer.jsx';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Footer Test', function() {
  it('should pass', function() {
    const wrapper = shallow(<Base />);
    const welcome = 'Footer';
    expect(wrapper.contains(welcome)).to.equal(true);
  })
})
