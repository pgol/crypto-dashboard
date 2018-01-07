// @flow

function makeUsersService({dataFetcher} : {dataFetcher: Object}) {
  const unwrap = res => res.data;
  return {
    getCurrencies() {
      //TODO use params
      return dataFetcher.get('/v1/ticker/').then(unwrap);
    },
    getCurrency(currencySymbol: string,) {
      //TODO use params
      return dataFetcher.get(`v1/ticker/${currencySymbol}`).then(unwrap);
    }
  }
}

export default makeUsersService;
