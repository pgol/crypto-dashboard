import React, {Component} from 'react';
import _ from 'lodash'
import './App.css';
import CurrencyForm from '../CurrencyForm/CurrencyForm';
import CurrencyTable from '../CurrencyTable/CurrencyTable';

import currencies from '../../mocks/curriencies';
import expense from '../../mocks/expense';

//mock data just for now
const symbols = currencies.map(({id, name}) => ({
  id,
  name
}));
//same here
const expenses = [
  expense,
  Object.assign({}, expense, {
    currency: 'ADA',
    expense: 0.5,
    quantity: 2
  }),
  Object.assign({}, expense, {
    currency: 'BTC',
    expense: 10000,
    quantity: 3
  }),
];

//TODO move logic to separate component
//calculating data for table
const tableData = expenses.map(expense => {
  const coin = currencies.find(currency => {
    return currency.symbol === expense.currency;
  });
  if (!coin) return {};
  return {
    name: expense.currency,
    price: coin.price_usd,
    profit:
      Number(coin.price_usd * expense.quantity - expense.expense * expense.quantity).toFixed(2)
  }
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Crypto Świry</h1>
        <CurrencyForm currencies={symbols}/>
        <CurrencyTable expenses={tableData}/>
      </div>
    );
  }
}

export default App;
