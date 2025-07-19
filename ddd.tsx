// import { createContext, useContext, useEffect, useState } from "react";

// import "./App.css";

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

// // USe POkemon
// function usePokemonSource(): { pokemon: Pokemon[] } {
//   const [pokemon, setPokemon] = useState<Pokemon[]>([]);

//   useEffect(() => {
//     fetch("/pokemon.json")
//       .then((response) => response.json())
//       .then((data) => setPokemon(data));
//   }, []);

//   return { pokemon };
// }

// const pokemonContext = createContext({
//   pokemon: [] as Pokemon[],
// });

// function usePokemon() {
//   return useContext(pokemonContext);
// }

// const PokemonList = () => {
//   const { pokemon } = usePokemon();
//   return (
//     <ul>
//       {pokemon.map((p) => (
//         <li key={p.id}>{p.name}</li>
//       ))}
//     </ul>
//   );
// };

// function App() {
//   return (
//     <>
//       <div>
//         <pokemonContext.Provider value={usePokemonSource()}>
//           <PokemonList />
//         </pokemonContext.Provider>
//       </div>
//     </>
//   );
// }

// export default App;
