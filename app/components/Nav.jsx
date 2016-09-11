import React from 'react';
import {Link, IndexLink} from 'react-router';
import WeatherForm from 'WeatherForm';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  onSearch(e) {
    e.preventDefault();

    let location = this.refs.search.value;
    let encodedLocation = encodeURIComponent(location);

    if(location.length > 0) {
      this.refs.search.value = '';
      window.location.search = 'location=' + location;
    }
  }

  render() {
    return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Weather App</li>
              <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
              <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
              <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <form onSubmit={this.onSearch.bind(this)}>
        <ul className="menu">
          <li>
            <input type="search" ref="search" placeholder="Search Weather by City"/>
          </li>
          <li>
            <input type="submit" className="button" value="Get Weather"/>
          </li>
        </ul>
        </form>
      </div>
    </div>
    );
  }
}
