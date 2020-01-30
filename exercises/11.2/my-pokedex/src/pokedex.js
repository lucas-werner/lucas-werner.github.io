import React from 'react'
import Pokemon from './pokemon';

class Pokedex extends React.Component {
  render() {
    const {pokemons} = this.props;
    return (
      <div className="pokemon-container">
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    )
  }
}

export default Pokedex