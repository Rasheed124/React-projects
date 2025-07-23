// import "./App.css";
// import { usePokemon, usePokemonSource, pokemonContext } from "./store";

// function SearchBox() {
//   const { search, setSearch } = usePokemon();
//   return (
//     <div>
//       <input
//         className="mt-3 block w-full rounded-md  border-gray-300 border-2 focus:border-2 outline-0 shadow-sm  mb-3 sm:text-lg p-2"
//         placeholder="Search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//     </div>
//   );
// }

// const PokemonList = () => {
//   const { pokemon } = usePokemon();
//   return (
//     <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
//       {pokemon.map((p) => (
//         <li
//           key={p.id}
//           className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
//         >
//           <div className="flex-1 flex flex-col p-8">
//             <img
//               className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
//               src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
//               alt=""
//             />
//             <h3 className="mt-6 text-gray-900 text-sm font-medium">{p.name}</h3>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// };

// function App() {
//   return (
//     <>
//       <pokemonContext.Provider value={usePokemonSource()}>
//         <div className="mx-auto max-w-3xl py-10">
//           <SearchBox />
//           <PokemonList />
//         </div>
//       </pokemonContext.Provider>
//     </>
//   );
// }

// export default App;


// STORE

import {
//   createContext,
//   useCallback,
//   useContext,
//   useEffect,
//   useMemo,
//   useReducer,
// } from "react";

// interface Pokemon {
//   id: number;
//   name: string;
//   types: string[];
//   baseStats: {
//     hp: number;
//     attack: number;
//     defense: number;
//     specialAttack: number;
//     specialDefense: number;
//     speed: number;
//   };
//   abilities: string[];
//   evolvesTo: string;
//   moves: string[];
//   description: string;
// }

// type PokemonState = {
//   pokemon: Pokemon[];
//   search: string;
// };

// type PokemonAction =
//   | { type: "setPokemon"; payload: Pokemon[] }
//   | { type: "setSearch"; payload: string };

// // USe POkemon
// export function usePokemonSource(): {
//   pokemon: Pokemon[];
//   search: string;
//   setSearch: (search: string) => void;
// } {
//   const [{ pokemon, search }, dispatch] = useReducer(
//     (state: PokemonState, action: PokemonAction) => {
//       switch (action.type) {
//         case "setPokemon":
//           return { ...state, pokemon: action.payload };
//         case "setSearch":
//           return { ...state, search: action.payload };
//       }
//     },
//     {
//       pokemon: [],
//       search: "",
//     }
//   );

//   useEffect(() => {
//     fetch("/pokemon.json")
//       .then((response) => response.json())
//       .then((data) => dispatch({ type: "setPokemon", payload: data }));
//   }, []);

//   const setSearch = useCallback((search: string) => {
//     dispatch({
//       type: "setSearch",
//       payload: search,
//     });
//   }, []);

//   const filteredPokemon = useMemo(
//     () =>
//       pokemon
//         .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
//         .slice(0, 20),
//     [pokemon, search]
//   );

//   const sortedPokemon = () =>
//     useMemo(
//       () => [...filteredPokemon].sort((a, b) => a.name.localeCompare(b.name)),
//       [filteredPokemon]
//     );

//   return { pokemon: sortedPokemon(), search, setSearch };
// }

// // const pokemonContext = createContext<
// //   ReturnType<typeof usePokemonSource> | undefined
// // >(undefined);

// export const pokemonContext = createContext<
//   ReturnType<typeof usePokemonSource>
// >({} as unknown as ReturnType<typeof usePokemonSource>);

// // using the user generic syntax
// // const pokemonContext = createContext({
// //   pokemon: [] as Pokemon[],
// // });

// export function usePokemon() {
//   // return useContext(pokemonContext)!;
//   return useContext(pokemonContext)!;
// }
