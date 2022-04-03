import React from "react";
import FilterPanel from "../../components/Home/FilterPanel";
import List from "../../components/Home/List";
import SearchBar from "../../components/Home/SearchBar";
import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      {/*Search Bar*/}
      <SearchBar />

      <div className="home_panelList-wrap"> 
        <div className="home_panel-wrap">
          {/*Side Panels*/}
          <FilterPanel />
        </div>
          {/*List & Empty View*/}
          <div className="home_list-wrap">
            <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
