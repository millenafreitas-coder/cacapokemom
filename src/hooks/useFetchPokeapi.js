import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetchPokeapi(pokemon) {
  console.log('iniciando construção da pagina')
  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [specie, setSpecie] = useState({});
  const [evolution, setEvolution] = useState({});
  const [myPokemon, setMyPokemon] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`,
          {
           
          });

        setPokemons(res.data);
        console.log('Success:', res.data);
        setLoading(false);
      }
      catch (err) {
        console.error("Erro ao carregar API", err);
        setLoading(false)
        setError(true)
      }
    };
    getData();
  }, [pokemon]);

  useEffect(() => {
    const getSpacies = async () => {
      try {
        const res = await axios.get(pokemons.species.url, {});
        setSpecie(res.data);
        console.log('Success:', res.data);
        setLoading(false);
      }catch (err){
        console.error('Erro ao carregar API', err);
        setLoading(false);
        setError(true);
      }
      };
      getSpacies();
    }, [pokemons]);


    useEffect(() => {
      const getEvolutions = async () => {
        try {
          const res = await axios.get(specie.evolution_chain.url, {}); 

          setEvolution(res.data);
          console.log('Success:', res.data);
          setLoading(false);
        }catch (err){
          console.error('Erro ao carregar API', err);
          setLoading(false);
          setError(true);
        }
        };
        getEvolutions();
      }, [specie]);


      useEffect(() => {
        const setPoke = async () => {
        try {
        setMyPokemon({
          nome: pokemons.name,
          vida: pokemons.stats[0].base_stat,
          ataque: pokemons.stats[1].base_stat,
          tipo: pokemons.types[0].type.name,
          evolucao: [evolution.chain.species.name],
          imagem: pokemons.sprites.front_default,
      });
     } catch (err) {
        console.error(err);
      }
    };
    setPoke();
      }, [evolution, pokemons]);

  return { myPokemon, loading, error }
}

export default useFetchPokeapi;