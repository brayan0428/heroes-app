import React from "react";

export const SearchForm = ({ handleSearch, query, setQuery }) => {
  return (
    <form onSubmit={handleSearch}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <button className="btn btn-outline-primary btn-block">Search</button>
    </form>
  );
};
