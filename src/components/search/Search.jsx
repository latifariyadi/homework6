import React, { useEffect, useState } from "react";
import data from "../../Data";
import "./search.css";

function Search() {
  const [search, setSearch] = useState([]);
  const [find, setFind] = useState([]);
  useEffect(() => {
    // console.log(data);
    search.filter((item) => {
      setSearch(data);
    });
  }, []);

  const handleSearch = (inputValue) => {
    setFind(
      data
        .filter((e) => {
          return (
            e.artists[0].name.toLowerCase() ==
            inputValue.target.value.toLowerCase()
          );
        })
        .map((e) => {
          return e;
        })
    );
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        className="search-input"
        name="search"
        onChange={handleSearch}
      />
      {find.map((e) => (
        <div
          style={{
            width: "300px",
            padding: "10px",
            backgroundColor: "white",
            boxShadow: "4px 5px 8px rgba(0,0,0,0.2)",
            display: "flex",
            gap: "10px",
            marginLeft: "200px",
          }}
        >
          <img
            src={e.album.images[0].url}
            style={{ width: 50, height: 50, objectFit: "cover" }}
          />
          <p>{e.artists[0].name}</p>
        </div>
      ))}
      <button>Cari</button>
    </div>
  );
}

export default Search;
