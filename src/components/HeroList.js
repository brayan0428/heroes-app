import React, { useMemo } from "react";
import { HeroListItem } from "./HeroListItem";
import { getHerosByPublisher } from "../selectors/getHerosByPublisher";
import "../assets/css/HeroList.css";

export const HeroList = ({ publisher }) => {
  const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);

  return (
    <div className="HeroList">
      {heros.map((hero) => (
        <HeroListItem key={hero.id} {...hero} />
      ))}
    </div>
  );
};
