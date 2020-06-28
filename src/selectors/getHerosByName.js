import { heros } from "../data/heros";

export const getHerosByname = (name = "") => {
  if (!name) return [];
  name = name.toLowerCase();
  return heros.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
