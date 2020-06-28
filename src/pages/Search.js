import React, { useState, useMemo } from "react";
import { heros } from "../data/heros";
import { HeroListItem } from "../components/HeroListItem";
import { useLocation } from "react-router-dom";
import { getHerosByname } from "../selectors/getHerosByName";
import { SearchForm } from "../components/SearchForm";

export const Search = ({ history }) => {
  const location = useLocation();
  const q = new URLSearchParams(location.search).get("q");

  const [query, setQuery] = useState("");
  const heroesFiltered = useMemo(() => getHerosByname(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim().length <= 0) {
      return;
    }
    history.push(`?q=${query}`);
  };

  return (
    <div className="row">
      <div className="col-4">
        <h2>Search Form</h2>
        <SearchForm
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
        />
      </div>
      <div className="col-8">
        <div className="row">
          {heroesFiltered.length <= 0 && <h4>No superheroes found</h4>}
          {heroesFiltered.map((hero) => (
            <div className="col-md-6 mb-3" key={hero.id}>
              <HeroListItem {...hero} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
