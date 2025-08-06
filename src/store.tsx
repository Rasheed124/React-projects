import { proxy } from "valtio";

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

export const store = proxy({
  query: "",
  pokemon: [] as Pokemon[],

  // Computed value as a getter
  get filteredList() {
    const q = this.query.toLowerCase();
    return this.pokemon
      .filter((p) => p.name.toLowerCase().includes(q))
      .slice(0, 10)
      .sort((a, b) => a.name.localeCompare(b.name));
  },
});

fetch("/pokemon.json")
  .then((response) => response.json())
  .then((pokemon) => {
    store.pokemon = pokemon;
  });

export function PokemonProvider({ children }: { children: React.ReactNode }) {
  return { children };
}
