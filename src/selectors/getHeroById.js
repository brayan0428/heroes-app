import { heros } from "../data/heros";

export const getHeroById = (id) => {
  return heros.find((hero) => hero.id === id);
};
