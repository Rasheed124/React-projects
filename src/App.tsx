import { useSnapshot } from "valtio";
import "./App.css";

import {
  Link,
  Outlet,
  ReactLocation,
  Router,
  useMatch,
} from "@tanstack/react-location";
import { store } from "./store";

const location = new ReactLocation();

function SearchBox() {
  const snap = useSnapshot(store);
  return (
    <div>
      <input
        className="mt-3 block w-full rounded-md  border-gray-300 border-2 focus:border-2 outline-0 shadow-sm  mb-3 sm:text-lg p-2"
        placeholder="Search"
        value={snap.query}
        onChange={(e) => (store.query = e.target.value)}
      />
    </div>
  );
}

const PokemonList = () => {
  const snap = useSnapshot(store);

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {snap.filteredList.map((p) => (
        <Link key={p.id} to={`/pokemon/${p.id}`}>
          <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                {p.name}
              </h3>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};

const PokemonDetails = () => {
  const {
    params: { id },
  } = useMatch();
  const snap = useSnapshot(store);

  const pokemonData = snap.pokemon.find((pokem) => pokem.id === +id);
  if (!pokemonData) {
    return <div>No pokemon found</div>;
  }

  return (
    <>
      <div className="mt-3">
        <Link to="/">
          <h1 className="text-2xl font-bold mb-5">&lt; Home</h1>
        </Link>
        <div className="grid grid-cols-2">
          <img
            className="w-96 h-96 flex-shrink-0 mx-auto bg-black rounded-xl"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
            alt=""
          />
          <div className="ml-3">
            <h2 className="text-2xl font-bold">{pokemonData.name}</h2>
            <div className="mt-3">
              <h3 className="text-xl font-bold">Stats</h3>
              <ul className="mt-3">
                {Object.entries(pokemonData.baseStats).map(([stat, value]) => (
                  <li key={stat} className="flex justify-between border-b py-1">
                    <span className="capitalize">{stat}</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const routes = [
  {
    path: "/",
    element: (
      <>
        <SearchBox />
        <PokemonList />
      </>
    ),
  },
  {
    path: "/pokemon/:id",
    element: (
      <>
        <PokemonDetails />
      </>
    ),
  },
];

function App() {
  return (
    <>
      <Router location={location} routes={routes}>
        <div className="mx-auto max-w-3xl py-10">
          <Outlet />
        </div>
      </Router>
    </>
  );
}

export default App;
