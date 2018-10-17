import fetch from 'cross-fetch';

const URL_AVAILABILITY = 'http://localhost:8081/availability?id=';

const fetchAsyncAvailability = id => fetch(URL_AVAILABILITY + id, {
  method: 'GET',
  mode: 'CORS',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
}).then(resp => resp.json());

export default fetchAsyncAvailability;
