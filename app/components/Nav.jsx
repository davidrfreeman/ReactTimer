import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = () => {

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li><Link to="/" activeClassName="activeLink">Timer</Link></li>
          <li><Link to="/" activeClassName="activeLink">Countdown</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">Created By<a href="https://github.com/davidrfreeman" target="_blank">David Freeman</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
