import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Clock from 'Clock';

describe('Clock', () => {
  it('Should exist', () => {
    expect(Clock).toExist();
  });

  describe('formatSeconds', ()=> {
    it('Should format seconds', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);

      let seconds = 615;
      let expected = '10:15';

      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('Should format seconds when min/sec are less than 10', () => {
      let clock = TestUtils.renderIntoDocument(<Clock/>);

      let seconds = 61;
      let expected = '01:01';

      let actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
