import { ImageSearch, Search } from "@mui/icons-material";
import React from "react";

import "./styles.css";

const SearchBar = ({ value, changeInput }) => {
  return (
    <div className="searchBar-wrap">
      <Search className="searchBar-icon" />
      <input
        type="text"
        placeholder="Woodland Hills"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default SearchBar;
