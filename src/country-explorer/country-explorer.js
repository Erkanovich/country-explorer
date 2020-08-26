import { CountriesApi } from '../apis/countries-api';

export class CountryExplorer {
    static inject = [CountriesApi];
    message = 'I work'

    constructor(api) {
        this.api = api;
    }

    async bind() {
        this.allCountries = await this.api.getAllCountries();
        console.log(this.allCountries);
    }
}