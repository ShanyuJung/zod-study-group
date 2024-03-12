import { z } from "zod";
import usePokemon from "../hooks/usePokemon";

export const Pokemons = () => {
  const PokemonSchema = z.object({
    count: z.number(),
    next: z.string().url().nullable(),
    previous: z.string().url().nullable(),
    results: z.array(
      z.object({
        name: z.string(),
        url: z.string().url(),
      })
    ),
  });

  const pokemonQuery = usePokemon();
  const { data, isLoading } = pokemonQuery;

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.results.map((pokemon) => {
        return (
          <div key={pokemon.url}>
            <h3>{pokemon.name}</h3>
          </div>
        );
      })}
    </div>
  );

  //   const validationResult = PokemonSchema.safeParse(data);

  //   return (
  //     <div>
  //       {validationResult.success ? (
  //         validationResult.data.results.map((pokemon) => {
  //           return (
  //             <div key={pokemon.url}>
  //               <h3>{pokemon.name}</h3>
  //             </div>
  //           );
  //         })
  //       ) : (
  //         <h3>unexpected data</h3>
  //       )}
  //     </div>
  //   );
};
