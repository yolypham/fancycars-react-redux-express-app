import fetch from 'cross-fetch';

const URL_CARS = 'http://localhost:8081/cars';

const fetchAsyncCars = () => fetch(URL_CARS, {
  method: 'GET',
  mode: 'CORS',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
}).then(resp => resp.json());

export default fetchAsyncCars;
