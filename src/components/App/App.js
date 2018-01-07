import React, {Component} from 'react';
import './App.css';
import CurrencyForm from '../CurrencyForm/CurrencyForm';
import CurrencyTable from '../CurrencyTable/CurrencyTable';

import currencies from '../../mocks/curriencies';
import getExpense from '../../mocks/expense';

//mock data just for now
const symbols = currencies.map(({id, name}) => ({
  id,
  name
}));
//same here
const expenses = [
  getExpense(),
  getExpense({
    currency: 'ADA',
    expense: 100,
    quantity: 2
  }),
  getExpense({
    currency: 'ETH',
    expense: 2314214,
    quantity: 20
  })
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Crypto Świry</h1>
        <CurrencyForm currencies={symbols}/>
        <CurrencyTable expenses={expenses}/>
      </div>
    );
  }
}

export default App;
