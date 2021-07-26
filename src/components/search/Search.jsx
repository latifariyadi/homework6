import React, { useEffect, useState } from "react";
import data from "../../Data";
import "./search.css";

function Search() {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    // console.log(data);
    setSearch(data);
  }, []);
  return (
    <div className="searchBar">
      {console.log(search)}
      <input type="text" className="search-input" />
      {search
        .filter((item) => {
          item.artists == "Queen";
        })
        .map((result) => (
          <h1>result</h1>
        ))}

      <button>Cari</button>
    </div>
  );
}

export default Search;
