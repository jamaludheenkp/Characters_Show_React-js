import React, { useState } from 'react'
import './StarWars.css'

const StarWars = () => {

  const [character, setCharacter] = useState([])
  const [loaded, setLoaded] = useState(false)
  const RandomNum = Math.ceil(Math.random() * 88)
  
  const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${RandomNum}.json`

    const getData = async () =>{
      const res = await fetch(url);
      const data = await res.json();
      setCharacter(data);
      setLoaded(true);
      console.log(data);
    }

  return (
    <div>
      { 
        loaded && 
        <div className='content'>
            <img className='img' src={character.image} alt={character.name} />
            <h1> {character.name} </h1>
            <h3>Gender : {character.gender} </h3>
            <h3>HomeWorld :  {character.homeworld}</h3>
            <ul>
              {
                character.affiliations.map(affiliation => {
                  return (
                    <li> {affiliation}</li>
                  )
                })
              }
            </ul>
        </div>
      }
        <button className='btn' type='button' onClick={getData}>Randomize Character</button>
    </div>
  )
}

export default StarWars