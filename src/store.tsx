import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

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

type PokemonState = {
  pokemon: Pokemon[];
  search: string;
};

type PokemonAction =
  | { type: "setPokemon"; payload: Pokemon[] }
  | { type: "setSearch"; payload: string };

// USe POkemon
export function usePokemonSource(): {
  pokemon: Pokemon[];
  search: string;
  setSearch: (search: string) => void;
} {
  const [{ pokemon, search }, dispatch] = useReducer(
    (state: PokemonState, action: PokemonAction) => {
      switch (action.type) {
        case "setPokemon":
          return { ...state, pokemon: action.payload };
        case "setSearch":
          return { ...state, search: action.payload };
      }
    },
    {
      pokemon: [],
      search: "",
    }
  );

  useEffect(() => {
    fetch("/pokemon.json")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "setPokemon", payload: data }));
  }, []);

  const setSearch = useCallback((search: string) => {
    dispatch({
      type: "setSearch",
      payload: search,
    });
  }, []);

  const filteredPokemon = useMemo(
    () =>
      pokemon
        .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
        .slice(0, 20),
    [pokemon, search]
  );

  const sortedPokemon = () =>
    useMemo(
      () => [...filteredPokemon].sort((a, b) => a.name.localeCompare(b.name)),
      [filteredPokemon]
    );

  return { pokemon: sortedPokemon(), search, setSearch };
}

// const pokemonContext = createContext<
//   ReturnType<typeof usePokemonSource> | undefined
// >(undefined);

export const pokemonContext = createContext<
  ReturnType<typeof usePokemonSource>
>({} as unknown as ReturnType<typeof usePokemonSource>);

// using the user generic syntax
// const pokemonContext = createContext({
//   pokemon: [] as Pokemon[],
// });

export function usePokemon() {
  // return useContext(pokemonContext)!;
  return useContext(pokemonContext)!;
}
