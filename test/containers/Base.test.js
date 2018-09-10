import React from 'react';
import ReactDom from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Base from '../../containers/Base.jsx';

import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Base Testing', function() {
  it('should pass', function() {

    var user = {
      setName: function(name){
        this.name = name;
      }
    }

    //Create a spy for the setName function
    var setNameSpy = sinon.spy(user, 'setName');

    //Now, any time we call the function, the spy logs information about it
    user.setName('Darth Vader');
    user.setName('Darth Vader');
    user.setName('Darth Vader');

    //Which we can see by looking at the spy object
    console.log(setNameSpy.callCount); //output: 3

    //Important final step - remove the spy
    setNameSpy.restore();

    const wrapper = shallow(<Base />);
    const welcome = <h1>Hello</h1>;
    expect(wrapper.contains(welcome)).to.equal(true);
  })
})
