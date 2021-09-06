import React from 'react';
import  '../src/assets/styles/app.scss';
import PokemonList from './components/Pokemons/PokemonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PokemonList />
      </header>
    </div>
  );
}

export default App;
