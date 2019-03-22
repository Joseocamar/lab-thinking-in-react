import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable'

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>IronStore</h1>
        <FilterableProductTable />
      </main>
    );
  }
}

export default App;
