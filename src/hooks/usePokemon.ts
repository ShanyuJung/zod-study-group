import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Pokemon {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

function usePokemon() {
  return useQuery({
    queryKey: ["pokemon"],
    queryFn: async () => {
      try {
        const response = await axios.get<Pokemon>(
          "https://pokeapi.co/api/v2/pokemon/"
        );
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch Pokemon data");
      }
    },
  });
}

export default usePokemon;
