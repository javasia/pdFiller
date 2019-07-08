import React from 'react';

const B = props => {
  console.log("B render method fired");
  return (
      <div>Hello, my name is {props.componentName}</div>
    )
}

export default B;
