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
