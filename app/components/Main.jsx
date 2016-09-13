import React from 'react';
import Nav from 'Nav';

const Main = (props) => {
  return (
    <div>
      <Nav/>
      <div className="row">
        <div className="columns small-12">
        <p>Main.jsx Rendered!</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Main;
