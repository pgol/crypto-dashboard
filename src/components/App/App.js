import React, {Component} from 'react';
import './App.css';
import CurrencyForm from '../CurrencyForm/CurrencyForm';
import CurrencyTable from '../CurrencyTable/CurrencyTable';

import currencies from '../../mocks/curriencies';

class App extends Component {
  render() {
    const symbols = currencies.map(({id, name}) => ({
      id,
      name
    }));


    return (
      <div className="App">
        <h1>Crypto Świry</h1>
        <CurrencyForm currencies={symbols} />
        <CurrencyTable />
      </div>
    );
  }
}

export default App;
