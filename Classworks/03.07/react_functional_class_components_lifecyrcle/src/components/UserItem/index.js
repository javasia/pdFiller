import React from "react";

const RepositoryItem = props => {
  return (
    <div onClick={props.clicked}>
      {props.userName}
    </div>
  );
};

export default RepositoryItem;
