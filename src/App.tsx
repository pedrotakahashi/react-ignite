import React from 'react';
import Counter from './components/Counter/Counter';
import RepositoryList from './components/Repository/RepositoryList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <RepositoryList />
      <Counter />
      </header>
    </div>
  );
}

export default App;
