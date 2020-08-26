import { HttpClient, json } from 'aurelia-fetch-client'
import 'whatwg-fetch';

export class CountriesApi {
    static inject = [HttpClient];

    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async getAllCountries() {
         let response = await this.httpClient.fetch('https://restcountries.eu/rest/v2/all');
         return await response.json();
    }
}