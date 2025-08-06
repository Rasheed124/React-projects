// import "./App.css";
// import { usePokemon, PokemonProvider } from "./store";

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
//       <PokemonProvider>
//         <div className="mx-auto max-w-3xl py-10">
//           <SearchBox />
//           <PokemonList />
//         </div>
//       </PokemonProvider>
//     </>
//   );
// }

// export default App;


// STORE
// import {
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

// const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
//   {} as unknown as ReturnType<typeof usePokemonSource>
// );

// // using the user generic syntax
// // const PokemonContext = createContext({
// //   pokemon: [] a Pokemon[],
// // });

// export function usePokemon() {
//   // return useContext(PokemonContext)!;
//   return useContext(PokemonContext)!;
// }

// export function PokemonProvider({ children }: { children: React.ReactNode }) {
//   return (
//     <PokemonContext.Provider value={usePokemonSource()}>
//       {children}
//     </PokemonContext.Provider>
//   );
// }




































// STORE

// import { useQuery } from "@tanstack/react-query";
// import {
//   createContext,
//   useCallback,
//   useContext,
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
//   // pokemon: Pokemon[];
//   search: string;
// };

// type PokemonAction = { type: "setSearch"; payload: string };

// // USe POkemon
// export function usePokemonSource(): {
//   pokemon: Pokemon[];
//   search: string;
//   setSearch: (search: string) => void;
// } {
//   const { data: pokemon } = useQuery<Pokemon[]>({
//     queryKey: ["pokemon"],
//     queryFn: () => fetch("/pokemon.json").then((res) => res.json()),
//     initialData: [],
//   });
//   const [{ search }, dispatch] = useReducer(
//     (state: PokemonState, action: PokemonAction) => {
//       switch (action.type) {
//         case "setSearch":
//           return { ...state, search: action.payload };
//       }
//     },
//     {
//       search: "",
//     }
//   );

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

// const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
//   {} as unknown as ReturnType<typeof usePokemonSource>
// );

// export function usePokemon() {
//   // return useContext(PokemonContext)!;
//   return useContext(PokemonContext)!;
// }

// export function PokemonProvider({ children }: { children: React.ReactNode }) {
//   return (
//     <PokemonContext.Provider value={usePokemonSource()}>
//       {children}
//     </PokemonContext.Provider>
//   );
// }





// APP
// import "./App.css";
// import { usePokemon, PokemonProvider } from "./store";

// import {
//   QueryClient,
//   QueryClientProvider,
//   useQuery,
// } from "@tanstack/react-query";

// const queryClient = new QueryClient();

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
//       <QueryClientProvider client={queryClient}>
//         <PokemonProvider>
//           <div className="mx-auto max-w-3xl py-10">
//             <SearchBox />
//             <PokemonList />
//           </div>
//         </PokemonProvider>
//       </QueryClientProvider>
//     </>
//   );
// }

// export default App;






























// REACT QUERY AND REACT LOCATION


// APP


// import "./App.css";
// import { usePokemon, PokemonProvider } from "./store";

// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import {
//   Link,
//   Outlet,
//   ReactLocation,
//   Router,
//   useMatch,
// } from "@tanstack/react-location";

// const queryClient = new QueryClient();

// const location = new ReactLocation();

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
//         <Link key={p.id} to={`/pokemon/${p.id}`}>
//           <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
//             <div className="flex-1 flex flex-col p-8">
//               <img
//                 className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
//                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
//                 alt=""
//               />
//               <h3 className="mt-6 text-gray-900 text-sm font-medium">
//                 {p.name}
//               </h3>
//             </div>
//           </li>
//         </Link>
//       ))}
//     </ul>
//   );
// };

// const PokemonDetails = () => {
//   const {
//     params: { id },
//   } = useMatch();
//   const { pokemon } = usePokemon();

//   const pokemonData = pokemon.find((pokem) => pokem.id === +id);
//   if (!pokemonData) {
//     return <div>No pokemon found</div>;
//   }

//   return (
//     <>
//       <div className="mt-3">
//         <Link to="/">
//           <h1 className="text-2xl font-bold mb-5">&lt; Home</h1>
//         </Link>
//         <div className="grid grid-cols-2">
//           <img
//             className="w-96 h-96 flex-shrink-0 mx-auto bg-black rounded-xl"
//             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
//             alt=""
//           />
//           <div className="ml-3">
//             <h2 className="text-2xl font-bold">{pokemonData.name}</h2>
//             <div className="mt-3">
//               <h3 className="text-xl font-bold">Stats</h3>
//               <ul className="mt-3">
//                 {Object.entries(pokemonData.baseStats).map(([stat, value]) => (
//                   <li key={stat} className="flex justify-between border-b py-1">
//                     <span className="capitalize">{stat}</span>
//                     <span>{value}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const routes = [
//   {
//     path: "/",
//     element: (
//       <>
//         <SearchBox />
//         <PokemonList />
//       </>
//     ),
//   },
//   {
//     path: "/pokemon/:id",
//     element: (
//       <>
//         <PokemonDetails />
//       </>
//     ),
//   },
// ];

// function App() {
//   return (
//     <>
//       <QueryClientProvider client={queryClient}>
//         <PokemonProvider>
//           <Router location={location} routes={routes}>
//             <div className="mx-auto max-w-3xl py-10">
//               <Outlet />
//             </div>
//           </Router>
//         </PokemonProvider>
//       </QueryClientProvider>
//     </>
//   );
// }

// export default App;





// store


// import { useQuery } from "@tanstack/react-query";
// import {
//   createContext,
//   useCallback,
//   useContext,
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
//   // pokemon: Pokemon[];
//   search: string;
// };

// type PokemonAction = { type: "setSearch"; payload: string };

// // USe POkemon
// export function usePokemonSource(): {
//   pokemon: Pokemon[];
//   search: string;
//   setSearch: (search: string) => void;
// } {
//   const { data: pokemon } = useQuery<Pokemon[]>({
//     queryKey: ["pokemon"],
//     queryFn: () => fetch("/pokemon.json").then((res) => res.json()),
//     initialData: [], 
//   });
//   const [{ search }, dispatch] = useReducer(
//     (state: PokemonState, action: PokemonAction) => {
//       switch (action.type) {
//         case "setSearch":
//           return { ...state, search: action.payload };
//       }
//     },
//     {
//       search: "",
//     }
//   );

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

// const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
//   {} as unknown as ReturnType<typeof usePokemonSource>
// );

// export function usePokemon() {
//   // return useContext(PokemonContext)!;
//   return useContext(PokemonContext)!;
// }

// export function PokemonProvider({ children }: { children: React.ReactNode }) {
//   return (
//     <PokemonContext.Provider value={usePokemonSource()}>
//       {children}
//     </PokemonContext.Provider>
//   );
// }
