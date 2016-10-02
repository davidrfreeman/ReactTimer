import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Timer from 'Timer';

describe('Timer', () => {
  it('Should exist', () => {
    expect(Timer).toExist();
  });

  it('Should start timer on started status', (done) => {
    let timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.handleStatusChange('started');

    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });
});
