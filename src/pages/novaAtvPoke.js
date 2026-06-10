import React from "react";
import { Link } from "react-router-dom";
import "./novaAtvPoke.css";
import pirulito from"../assets/pirulito.png";
import fundo from "../assets/fundo.jpeg";


function Trainer(){ 

return(
    <div className="container">
  

    <div ClassName="treinador">
     
    </div>

    <div ClassName="irParaotrapagina">
         <div ClassName="nome">
              <h3> Millena Mahl de Freitas</h3>
         </div>
         <div className="Mahlname">
              <h3></h3>
         </div>
         <div className="idade">
              <h3></h3>
         </div>
        <div className="pokebolas">
            <h3>Você tem 2 pokemons</h3>        
        </div>
        <div className="vazio"></div>
    </div>
    <Link to="/cacapokemom/tepig" ClassName="pirulitos"> <img src={pirulito} /></Link>
    <Link to="/cacapokemom/poliwag" ClassName="pirulitos"> <img src={pirulito} /></Link>
    <Link to="/cacapokemom/jigglypuff" ClassName="pirulitos"> <img src={pirulito} /></Link>
    <Link to="/" ClassName="pirulitos"> <img src={pirulito} /></Link>
    <Link to="/" ClassName="pirulitos"> <img src={pirulito} /></Link>
    <Link to="/" ClassName="pirulitos"> <img src={pirulito} /></Link>
        </div>

);

}
export default Trainer;

