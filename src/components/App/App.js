import React, {Component} from 'react';
import './App.css';
import CurrencyForm from '../CurrencyForm/CurrencyForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Crypto Świry</h1>
        <CurrencyForm />
      </div>
    );
  }
}

export default App;
