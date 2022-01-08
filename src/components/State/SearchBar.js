import React, { useEffect } from "react";

function SearchBar({ setSearch, setApiData, apiData, search, setStateData }) {
  const searchChange = (e) => {
    let searchInput = e.target.value;
    setSearch(searchInput);
  };

  useEffect(() => {
    const newData = apiData.filter((state) =>
      state.stateName.toLowerCase().includes(search.toLowerCase())
    );
    if (search !== "") {
      setStateData(newData);
    } else {
      setStateData(apiData);
    }
  }, [search]);
  return (
    <div className="filterWrapper">
      <div className="inputGroup">
        <input
          type="text"
          value={search}
          onChange={(e) => searchChange(e)}
          placeholder="Search state / union territory"
        />
        <button
          className="clearBtn"
          onClick={() => {
            setSearch("");
            setStateData(apiData);
          }}
          style={{ display: search.length > 0 ? "inline" : "none" }}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
