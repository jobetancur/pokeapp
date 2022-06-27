import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from './Pagination'
import PokeCard from './PokeCard'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [search, setSearch] = useState()

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(20)

  const nameUser = useSelector( state => state.nameUser )

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"

  const getAllPokemons = () => {
    axios.get(URL)
      .then(res => setPokemons(res.data.results))
      .catch(error => console.log(error))
  }

  useEffect (() => {
    getAllPokemons()
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
    filter(e.target.value)
    e.preventDefault()
  }

  const filter = (searchTerm) => {
    let searchResult = pokemons.filter((element) => {
      if(element.name.toString().toLowerCase().includes(searchTerm.toLowerCase())){
        return element;
      } 
    })
    setPokemons(searchResult);
  }

  // console.log(pokemons);

  const max = pokemons?.length / perPage

  // console.log(max);

  return (
    <article className='principalCard'>
      <div className='header'>
        <h2>Pokedex</h2>
        <p>Welcome {nameUser}, here you can find your favorite pokemon.</p>
      </div>
      <div className='filter'>
        <input type="text" placeholder='Please, put your favorite Pokemon' value={search} onChange={handleChange}/>
        <button onClick={() => window.location.reload()}>New Search</button>
      </div>
      <div className='superiorPages'>
        <Pagination page={page} setPage={setPage} max={max} />
      </div>
      <div className='cards'>
        {
          pokemons
          ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage
          ).map( pokemon => (
            <PokeCard 
              key={ pokemon.url }
              url={ pokemon.url }
            />
          ))
        }
      </div>
      <div className='pages'>
        <Pagination page={page} setPage={setPage} max={max} />
      </div>
    </article>
  )
}

export default Pokedex