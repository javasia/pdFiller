import React from "react";

const SearchBar = props => {
  return (
    <div>
      <input
        onChange={props.changed}
        name="user_input"
        value={props.searchName}
        type="text"
        onBlur={props.lostFocus}
      />
      <button onClick={props.addUser}>Add</button>
      <button type='reset' onClick={props.clicked}>Reset</button>
    </div>
  );
};

export default SearchBar;
