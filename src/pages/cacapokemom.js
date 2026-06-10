import React, { useState, useEffect } from 'react';/* "puxa" funções para o código */
import axios from 'axios'; /* traz o axios para dentro do código */
import './cartaspoke.css';/* traz a liga o js do cacapokemon com o css do cacapokemon */ 
import useFetchPokeapi from "../hooks/useFetchPokeapi"; /* facilita o processode costruir o codigo, porque não será mais necessário copiar os mesmos códigos várias vezes em outros */
import { useParams } from "react-router-dom"; /*traz a função de fora também */

function Cacapokemom() {
  const { id } = useParams();
  const {pokemons, loading, error} = useFetchPokeapi(id); 

  if (loading) return <div>
    className= "loader"> Carregando Pokédex
  </div>;
  if (error) return <div className= "error">ocorreu um erro inesperado</div>;
  
  return (
    <div className="cacapokemom">
     <div className="pokemon-container">
    <div className={`pokemon-card tipo-${pokemons.types[0].type.name}`}> {/* aqui */}
    <h1>Poke card</h1>
   


<h3>{pokemons.name}</h3>
<img src={pokemons.sprites.front_default} alt={pokemons.name}/>
  <h3>{pokemons.stats[0].stat.name+
  pokemons.stats[0].base_stat}</h3>
  <h3>{pokemons.stats[1].stat.name+''+
  pokemons.stats[1].base_stat}</h3>
  <h3>{pokemons.types[0].type.name}</h3>
    </div>
    </div>
    </div>
  );
}
  export default Cacapokemom;
  //