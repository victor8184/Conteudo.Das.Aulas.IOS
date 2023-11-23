import './App.css';
import { Component } from 'react';
import Exemplo from './Components/Exemplo';
import Header from './components/header';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header nome="Morty" />
        <Exemplo />
      </div>
    );
  }
}

export default App; 