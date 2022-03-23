import React from 'react'
import Navbar from './Navbar'
import PokemonBanner from './PokemonBanner'
import PokemonProductsList from './PokemonProductsList'

function PokemonPage() {
  return (
    <div className='PokemonPage'>
        <Navbar/>
        <PokemonBanner/>
        <PokemonProductsList/>
    </div>
  )
}

export default PokemonPage