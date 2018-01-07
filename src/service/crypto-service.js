import dataFetcherFactory from './data-fetcher-factory';
import cmpServiceFactory from './crypto-service-factory';
import axios from 'axios';
import config from '../config/config';

const cryptoService = cmpServiceFactory({
  dataFetcher: dataFetcherFactory({
    fetch: axios,
    baseUrl: config.cryptoApiUrl
  })
});


export default cryptoService;
