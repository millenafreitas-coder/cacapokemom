import React, { useState, useEffect } from 'react';/* "puxa" funções para o código */
import axios from 'axios'; /* traz o axios para dentro do código */
import './cartaspoke.css';/* traz a liga o js do cacapokemon com o css do cacapokemon */ 
import useFetchPokeapi from "../hooks/useFetchPokeapi"; /* facilita o processode costruir o codigo, porque não será mais necessário copiar os mesmos códigos várias vezes em outros */
import { useParams } from "react-router-dom"; /*traz a função de fora também */

function Cacapokemom() {
  const { id } = useParams();
  const {myPokemon, loading, error} = useFetchPokeapi(id); 

  if (loading) return <div>
    className= "loader"> Carregando Pokédex
  </div>;
  if (error) return <div className= "error">ocorreu um erro inesperado</div>;
  
  return (
    <div className="cacapokemom">
     <div className="pokemon-container">
    <div className={`pokemon-card tipo-${myPokemon.tipo}`}> {/* aqui */}
    <h1>Poke card</h1>
   


<h3>{myPokemon.name}</h3>
<img src={myPokemon.sprites.front_default} alt={myPokemon.name}/>
  <h3>{myPokemon.nome+
  myPokemon.vida}</h3>
  <h3>{myPokemon.ataque+
  myPokemon.stats[1].base_stat}</h3>
  <h3>{myPokemon.tipo}</h3>
    </div>
    </div>
    </div>
  );
}
  export default Cacapokemom;
  //