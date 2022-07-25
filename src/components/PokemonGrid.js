import React from 'react'
import {ImArrowLeft, ImArrowRight} from 'react-icons/im'

import './PokemonGrid.css'
import Pokemon from './Pokemon'

const PokemonGrid = ({pokemonList, goToPrevPage, goToNextPage, FilterPokemon}) => {



    return (
        <div className='pokemon-grid'>
            <div className='container'>
                {
                    pokemonList.map(x => <div key={x}><Pokemon url={x}/></div>)
                }
            </div>
            <div className='nav-btn'>
                {goToPrevPage && <button onClick={goToPrevPage} className='prev-pg-btn'><ImArrowLeft /></button>}
                {goToNextPage && <button onClick={goToNextPage} className='next-pg-btn'><ImArrowRight /></button>}
            </div>
        </div>
    )
}

export default PokemonGrid