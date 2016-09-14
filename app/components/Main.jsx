import React from 'react';
import Nav from 'Nav';

const Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        <div>
        <p>Main.jsx Rendered!</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Main;
