import React from "react";
import "../assets/css/HeroListItem.css";
import { Link } from "react-router-dom";

export const HeroListItem = ({
  id,
  superhero,
  publisher,
  first_appearance,
}) => {
  return (
    <div className="HeroListItem animate__animated animate__fadeIn">
      <img className="HeroListItem__img" src={`assets/images/${id}.jpg`} />
      <div className="HeroLisItem__details">
        <h4>{superhero}</h4>
        <small>
          <i>{publisher}</i>
        </small>
        <p>{first_appearance}</p>
        <Link to={`/hero/${id}`} className="HeroListItem__link">
          View more...
        </Link>
      </div>
    </div>
  );
};
