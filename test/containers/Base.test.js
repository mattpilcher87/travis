import React from 'react';
import ReactDom from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Base from '../../containers/Base.jsx';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Base Testing', function() {
  it('should pass', function() {
    const wrapper = shallow(<Base />);
    const welcome = <h1>Hello</h1>;
    expect(wrapper.contains(welcome)).to.equal(true);
  })
})
