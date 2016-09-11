import React from 'react';
const Main = (props) => {
  return (
    <div>
      <div>
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Main;
