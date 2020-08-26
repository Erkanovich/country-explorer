import { CountriesApi } from '../apis/countries-api';

export class CountryExplorer {
    static inject = [CountriesApi];

    constructor(api) {
        this.api = api;
    }

    async bind() {
        this.allCountries = await this.api.getAllCountries();
        this.allRegions = Array.from(new Set(this.allCountries.map(country => country.region)));
    }
}