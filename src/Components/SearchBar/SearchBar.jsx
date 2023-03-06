import React from "react";
import Input from "../Input/Input";
import "./SearchBar.css";

const SearchBar = ({ userInput, setUserInput }) => {
  return (
    <div className="search-box">
      <Input
        label={"Search"}
        type={"text"}
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;

// bootstrap input group
// <div class="input-group mb-3">
//   <div class="input-group-prepend">
//     <span class="input-group-text" id="basic-addon1">Search</span>
//   </div>
//   <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
// </div>
