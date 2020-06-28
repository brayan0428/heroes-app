import React, { useMemo } from "react";
import { useParams, Redirect } from "react-router-dom";
import { getHeroById } from "../selectors/getHeroById";
import "../assets/css/Hero.css";

export const Hero = ({ history }) => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id), [id]);

  if (!hero) {
    return <Redirect to="/marvel" />;
  }

  const {
    superhero,
    alter_ego,
    publisher,
    first_appearance,
    characters,
  } = hero;

  const handleBack = () => {
    history.goBack();
  };

  return (
    <div className="Hero">
      <img
        className="Hero__image animate__animated animate__backInLeft"
        src={`../assets/images/${id}.jpg`}
      />
      <div className="Hero__details animate__animated animate__bounceInRight">
        <h2>{superhero}</h2>
        <p>
          <b>Alter ego:</b> {alter_ego}
        </p>
        <p>
          <b>Publisher:</b> {publisher}
        </p>
        <p>
          <b>First appearance: </b>
          {first_appearance}
        </p>
        <p>
          <b>Characters: </b>
          {characters}
        </p>
        <button className="btn btn-outline-primary" onClick={handleBack}>
          Regresar
        </button>
      </div>
    </div>
  );
};
