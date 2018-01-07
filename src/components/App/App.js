import React, {Component} from 'react';
import './App.css';
import CurrencyForm from '../CurrencyForm/CurrencyForm';
import CurrencyTable from '../CurrencyTable/CurrencyTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Crypto Świry</h1>
        <CurrencyForm/>
        <CurrencyTable />
      </div>
    );
  }
}

export default App;
