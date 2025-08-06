
import { create } from "zustand";

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  baseStats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  abilities: string[];
  evolvesTo: string;
  moves: string[];
  description: string;
}

const searchAndSortPokem = (pokemon: Pokemon[], search: string) =>
  pokemon
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 10)
    .sort((a, b) => a.name.localeCompare(b.name));

export const usePokemon = create<{
  pokemon: Pokemon[];
  allPokemon: Pokemon[];
  setAllPokemon: (pokemon: Pokemon[]) => void;
  search: string;
  setSearch: (search: string) => void;
}>((set, get) => ({
  pokemon: [],
  allPokemon: [],
  setAllPokemon: (pokemon) =>
    set({
      allPokemon: pokemon,
      pokemon: searchAndSortPokem(pokemon, get().search),
    }),
  search: "",
  setSearch: (search) =>
    set({ search, pokemon: searchAndSortPokem(get().allPokemon, search) }),
}));

fetch("/pokemon.json")
  .then((response) => response.json())
  .then((pokemon) => {
    usePokemon.getState().setAllPokemon(pokemon);
  });

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  return { children };
}
