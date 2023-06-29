import { Header } from "../../Components/Header/Header"
import { useState ,useEffect } from "react"
import { Container } from "../../Components/Container/Container"
import axios from "axios"



export const MoviesPage = () =>{

    const [pokemon,setPokemon] = useState([
        {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'}
    ])
    useEffect(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon")
        .then((response) => {
          console.log(response);
          setPokemon(response.data.results)
        })
        .catch((err) => {
          console.log(err);
        });
    }, []); 

    return(
        <div>
            <Header/>
            <Container pokemon={pokemon}/>
        </div>
    )
}