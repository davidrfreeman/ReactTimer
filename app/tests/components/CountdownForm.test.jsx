import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
  it('Should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('Should call onSetCountdown if valid seconds entered', () => {
    let spy = expect.createSpy();
    let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    let $el = $(ReactDOM.findDOMNode(countdownForm));

    // Dummy value to test
    countdownForm.refs.seconds.value = '109';
    // Simulate form submit and use non-jQuery dom node
    TestUtils.Simulate.submit($el.find('form')[0]);

    // The value tested should pass
    expect(spy).toHaveBeenCalledWith(109);
  });

  it('Should not call onSetCountdown if invalid seconds entered', () => {
    let spy = expect.createSpy();
    let countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    let $el = $(ReactDOM.findDOMNode(countdownForm));

    // Dummy value to test
    countdownForm.refs.seconds.value = 'abd';
    // Simulate form submit
    TestUtils.Simulate.submit($el.find('form')[0]);

    // The value tested should NOT pass the test
    expect(spy).toNotHaveBeenCalled();
  });
});
