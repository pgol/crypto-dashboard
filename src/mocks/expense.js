const expense = {
  currency: 'IOTA',
  expense: 200,
  expenseCurrency: 'USD',
  quantity: 200,
  rate: 4.01,
};

export const getExpense = (args) => ({
  expense,
  ...args
});

export default expense;


