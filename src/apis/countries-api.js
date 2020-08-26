import { HttpClient, json } from 'aurelia-fetch-client'
import 'whatwg-fetch';

export class CountriesApi {
    static inject = [HttpClient];

    constructor(httpClient) {
        this.httpClient = httpClient;
    }

    async getAllCountries() {
         let response = await this.httpClient.fetch('https://restcountries.eu/rest/v2/all?fields=name;nativeName;capital;region;population;flag');
         return await response.json();
    }
}