//create a file that imports axios and makes a request to the api and returns the data
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.covid19api.com',
});

async function getCountriesApi() {
    const response = await api.get('/summary');
    return response.data.Countries;
}

async function getCountryDetailsApi(country: string) {
    const response = await api.get(`/country/${country}/status/confirmed`);
    return response.data.slice(-5)
}

export { getCountriesApi, getCountryDetailsApi };